<template>
  <div>
    <div class="main_menu-user">
      <div class="main_menu-user-principal" v-if="userToId">
        <div class="info">Usuario seleccionado</div>
        <div class="name">{{ userToId.name }}</div>
      </div>
      <div class="main_menu-user-principal" v-else>
        <div class="info">Selecciona un usuario</div>
      </div>
      <div class="main_menu-user-actions">
        <ss-button
          @set-action="editUser(userToId)"
          v-if="isEdit"
        >
          Editar
        </ss-button>
        <ss-button
          @set-action="createNewUser(user)"
          v-else
        >
          Guardar
        </ss-button>
        <ss-button
          icon="remove"
          secondary-color
          @set-action="deleteUserSelect(userToId)"
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
        :user="userToId ? userToId : user"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SsDivider, SsButton, SsInputUser } from '@/components/UI';
import { user } from '@/typings/TypeUser.d';
import { mapActions } from 'vuex';

@Component({
  name: 'InfoUser',
  components: {
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
  @Prop({ type: Object, required: false })
  private userToId!: user[]

  @Prop({ type: Boolean, default: false })
  private isEdit!: boolean

  private createUser!: any

  private deleteUser!: any

  private updateUser!: any

  private user: user = {
    name: '',
    card: 0,
    balance: 0,
    id: new Date().getTime(),
    isActive: false,
  }

  private async createNewUser(newUser: user):Promise<void> {
    this.createUser(newUser);
    await this.$router.push({ name: 'editUser', params: { id: newUser.id } });
  }

  private async deleteUserSelect(userId: user[]):Promise<void> {
    this.deleteUser(userId);
    await this.$router.push({ name: 'home' });
  }

  private editUser(userEdit: user[]): void {
    this.updateUser(userEdit);
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

  &-principal {
    & .name {
      font-size: 16px;
    }
  }

  &-actions {
    display: flex;

    & button {
      margin-right: 15px;
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
