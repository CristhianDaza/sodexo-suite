<template>
  <div class="container-fluid">
    <div class="main_menu">
      <div class="main_menu-all_benefits">
        <div class="main_menu-all_benefits-text">
          <div class="info">Todos los</div>
          <div class="name">Beneficiarios</div>
        </div>
        <div class="main_menu-all_benefits-actions">
          <ss-button icon="add">
            Nuevo
          </ss-button>
        </div>
        <ss-divider />
      </div>
      <div class="main_menu-user">
        <div class="main_menu-user-principal">
          <div class="info">Usuario seleccionado</div>
          <div class="name">Cristhian Daza</div>
        </div>
        <div class="main_menu-user-actions">
          <ss-button>
            Guardar
          </ss-button>
          <ss-button icon="remove" secondary-color>
            Eliminar
          </ss-button>
        </div>
      </div>
    </div>
    <div class="main_app_user">
      <banner-user />
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SsButton, SsDivider } from '@/components/UI';

@Component({
  name: 'MainMenu',
  components: {
    SsButton,
    SsDivider,
    BannerUser: () => import(/* webpackChunkName: "bannerUser" */ '@/components/Layout/BannerUser.vue'),
  },
})
export default class MainMenu extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.sass';

.main_menu {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid $gray-color;
  width: 100%;
  height: 65px;

  &-all_benefits {
    display: flex;
    padding: 0 30px;
    align-items: center;
    width: 350px;

    &-text {
      margin-right: 25px;

      & .name {
        font-size: 16px;
      }
    }

    &-actions {
      margin-right: 25px;
    }
  }

  &-user {
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

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
}

.main_app_user {
  display: flex;
}
</style>
