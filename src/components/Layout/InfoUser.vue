<template>
  <div class="info_user">
    <div class="info_user-avatar">
      <div class="avatar"></div>
      <div class="info">Beneficiario</div>
    </div>
    <ss-divider is-full />
    <div class="info_user-data">
      <label for="name"> <span class="info">Nombre completo</span>
        <input
          type="text"
          id="name"
          placeholder="Ingresa tu nombre"
        />
      </label>

      <label for="card"> <span class="info">No. de tarjeta</span>
        <input
          type="number"
          id="card"
          placeholder="Ingresa el no. de tarjeta"
        />
      </label>

      <label for="balance"> <span class="info">Saldo</span>
        <input
          type="number"
          id="balance"
          placeholder="Ingresa el Saldo"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SsDivider } from '@/components/UI';

@Component({
  name: 'InfoUser',
  components: {
    SsDivider,
  },
})
export default class InfoUser extends Vue {}
</script>

<style lang="scss" scoped>
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
