<template>
  <div class="info_user-data">
    <label for="name"> <span class="info">Nombre completo</span>
      <input
        type="text"
        id="name"
        placeholder="Ingresa tu nombre"
        v-model="getUser.name"
      />
    </label>
    <label for="card"> <span class="info">No. de tarjeta</span>
      <input
        type="number"
        id="card"
        placeholder="Ingresa el no. de tarjeta"
        v-model="getUser.card"
      />
    </label>
    <label for="balance"> <span class="info">Saldo</span>
      <input
        id="balance"
        placeholder="Ingresa el Saldo"
        v-model="getUser.balance"
      />
    </label>
    <div v-if="errors.length > 0">
      Error en el formulario:
      <ul v-for="(error, i) in errors" :key="i">
        <li>{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { user } from '@/typings/TypeUser.d';

@Component({
  name: 'SsInputUser',
})
export default class SsInputUser extends Vue {
  @Prop({ type: Array })
  private user!: user[]

  @Prop({ type: Array })
  private errors!: []

  private get getUser(): user {
    return this.user[0];
  }
}
</script>

<style lang="scss" scoped>
.info_user {
  &-data {
   display: flex;
   flex-direction: column;
   padding: 30px 20px;

    & span {
      display: block;
      margin-bottom: 10px;
      font-size: 14px;
    }

    & label {
      margin-bottom: 20px;
    }

    & input {
      width: 50vw;
    }
  }
}
</style>
