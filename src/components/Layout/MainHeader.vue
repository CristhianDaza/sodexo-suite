<template>
  <div class="main_header">
    <div class="main_header-logo">
      <img :src="require('@/assets/img/Logo.svg')" alt="Logo Principal">
    </div>
    <ss-divider />
    <div class="main_header-app_name">
      <div class="main_header-app_name-container_info">
        <div class="avatar"></div>
        <div class="main_header-app_name-info">
          <div class="info">Sodexo Suite</div>
          <div class="name">Administración de Beneficiario</div>
        </div>
      </div>
      <div class="main_header-app_name-action">
        <div class="avatar"></div>
        <div class="avatar avatar-button"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SsDivider } from '@/components/UI';

@Component({
  name: 'MainHeader',
  components: {
    SsDivider,
  },
})

export default class MainHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.sass";

.main_header {
  display: flex;
  border-bottom: 1px inset $gray-color;

  &-logo {
    padding: 12px;
  }

  &-app_name {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &-container_info {
      display: flex;
    }

    &-info {
      margin-left: 12px;

      & .info {
        font-size: 14px;
      }

      & .name {
        font-size: 16px;
      }
    }

    &-action {
      display: flex;
      margin-right: 20px;

      & .avatar-button {
        width: 230px;
        border-radius: 25px;
      }
    }
  }

  &-actions {
    float: left;
  }
}
</style>
