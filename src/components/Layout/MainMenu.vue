<template>
  <div class="container-fluid">
    <div class="main_menu">
      <div class="main_menu-all_benefits">
        <div class="main_menu-all_benefits-text">
          <div class="info">Todos los</div>
          <div class="name">Beneficiarios</div>
        </div>
        <div class="main_menu-all_benefits-actions">
          <ss-button
            icon="add"
            @set-action="$router.push({ name: 'addUser' })"
          >
            Nuevo
          </ss-button>
        </div>
        <ss-divider />
      </div>
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
  },
})
export default class MainMenu extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.sass';

.main_menu {
  display: inline-flex;
  align-items: flex-start;
  border-bottom: 1px solid $gray-color;
  width: 280px;
  height: 65px;

  &-all_benefits {
    display: flex;
    padding: 0 16px;
    align-items: center;

    &-text {
      margin-right: 25px;

      & .name {
        font-size: 16px;
      }
    }

    &-actions {
      margin-right: 37px;
    }
  }
}

.main_app_user {
  display: flex;
}
</style>
