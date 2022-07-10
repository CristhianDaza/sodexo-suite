<template>
  <div class="info_user-data">
    <label for="name"> <span class="info">Nombre completo</span>
      <input
        type="text"
        id="name"
        placeholder="Ingresa tu nombre"
        v-model="user.name"
      />
    </label>
    <label for="card"> <span class="info">No. de tarjeta</span>
      <input
        type="number"
        id="card"
        placeholder="Ingresa el no. de tarjeta"
        v-model="user.card"
      />
    </label>
    <label for="balance"> <span class="info">Saldo</span>
      <input
        type="number"
        id="balance"
        placeholder="Ingresa el Saldo"
        v-model="user.balance"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { user } from '@/typings/TypeUser.d';

@Component({
  name: 'SsInputUser',
})
export default class SsInputUser extends Vue {
  @Prop({ type: Object })
  private user!: user[]
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
