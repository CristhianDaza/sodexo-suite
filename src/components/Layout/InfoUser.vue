<template>
  <div>
    <div class="main_menu-user" @click.self="cancelDelete" @keyup="cancelDelete">
      <div class="main_menu-user-principal" v-if="userToId">
        <div class="info">Usuario seleccionado</div>
        <div class="name">{{ user[0].name }}</div>
      </div>
      <div class="main_menu-user-principal" v-else>
        <div class="info">Selecciona un usuario</div>
      </div>
      <div class="main_menu-user-actions">
        <ss-button
          @set-action="editUser(user)"
          v-if="isEdit"
        >
          Editar
        </ss-button>
        <ss-button
          @set-action="createNewUser(user[0])"
          v-else
        >
          Guardar
        </ss-button>
        <ss-button
          icon="remove"
          secondary-color
          @set-action="showModalDelete(user)"
          v-if="userToId"
        >
          Eliminar
        </ss-button>
      </div>
    </div>
    <div class="info_user">
      <div class="info_user-avatar">
        <div class="avatar"></div>
        <div class="info">Beneficiario</div>
      </div>
      <ss-divider is-full />
      <ss-input-user
        :user="user"
        :errors="errors"
      />
    </div>
    <ss-widget-confirm
      v-if="showModal"
      @accept-modal="confirmDelete"
      @cancel-modal="cancelDelete"
    >
      {{ infoWidgetConfirm }}
    </ss-widget-confirm>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import {
  SsDivider,
  SsButton,
  SsInputUser,
  SsWidgetConfirm,
} from '@/components/UI';
import { user } from '@/typings/TypeUser.d';
import { mapActions } from 'vuex';

@Component({
  name: 'InfoUser',
  components: {
    SsWidgetConfirm,
    SsInputUser,
    SsDivider,
    SsButton,
  },
  methods: {
    ...mapActions('UserStore', {
      createUser: 'createUser',
      deleteUser: 'deleteUser',
      updateUser: 'updateUser',
    }),
  },
})
export default class InfoUser extends Vue {
  @Prop({ type: Array, required: false })
  private userToId!: user[]

  @Prop({ type: Boolean, default: false })
  private isEdit!: boolean

  private createUser!: any

  private deleteUser!: any

  private updateUser!: any

  private user: user[] = [{
    name: '',
    card: null,
    balance: null,
    id: new Date().getTime(),
    isActive: false,
  }]

  private infoWidgetConfirm = '¿Está seguro que desea eliminar?';

  private showModal = false;

  private userToDelete: user[] = [];

  private errors: string[] = [];

  public getUserToId() {
    if (!this.userToId) return;
    this.user = [...this.userToId];
  }

  private async createNewUser(newUser: user):Promise<void> {
    const validate = this.validateForm(newUser);
    if (validate) return;
    const newUserModified = [];
    const newBalance = Number(newUser.balance)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    newUserModified.push({
      ...newUser,
      balance: newBalance,
    });
    this.createUser(newUserModified[0]);
    await this.$router.push({ name: 'editUser', params: { id: newUser.id } });
  }

  private editUser(userEdit: user): void {
    this.updateUser(userEdit);
  }

  private validateForm(userValidate: user): boolean {
    this.errors = [];
    const characters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    if (!userValidate.name.trim()) {
      const errorName = 'El nombre es obligatorio';
      this.errors.push(errorName);
    }
    if (!userValidate.card) {
      const errorCard = 'La tarjeta es obligatoria';
      this.errors.push(errorCard);
    }
    if (!userValidate.balance) {
      const errorBalance = 'El saldo es obligatorio';
      this.errors.push(errorBalance);
    }
    if (!Number(userValidate.balance)) {
      const errorBalanceNumber = 'El saldo debe ser en números';
      this.errors.push(errorBalanceNumber);
    }
    if (!characters.test(userValidate.name.toLowerCase())) {
      const errorNameCharacters = 'No se permite caracteres especiales';
      this.errors.push(errorNameCharacters);
    }

    return this.errors.length > 0;
  }

  private showModalDelete(userDelete: user[]):void {
    this.showModal = true;
    this.userToDelete = userDelete;
  }

  async confirmDelete(): Promise<void> {
    this.deleteUser(this.userToDelete[0]);
    await this.$router.push({ name: 'home' });
    this.cancelDelete();
  }

  private cancelDelete(): void {
    this.showModal = false;
    this.userToDelete = [];
  }

  @Watch('userToId', { immediate: true })
  ChangeUser() {
    this.getUserToId();
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.sass';

.main_menu-user {
  height: 65px;
  display: flex;
  align-items: center;
  width: calc(100vw - 360px);
  justify-content: space-between;
  border-bottom: 1px solid $gray-color;
  padding: 0 15px;

  &-principal {
    & .name {
      font-size: 16px;
    }
  }

  &-actions {
    display: flex;

    & button {
      margin-right: 5px;
    }
  }
}

.info_user {
  display: flex;
  margin: 30px 20px;

  &-avatar {
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .avatar {
      width: 100px;
      height: 100px;
      margin: 0;
    }

    & .info {
      font-size: 14px;
      margin-top: 20px;
    }
  }
}
</style>
