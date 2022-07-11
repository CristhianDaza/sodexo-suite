<template>
  <div class="widget_confirm">
    <div class="widget_confirm-text">
      <slot></slot>
    </div>
    <div class="widget_confirm-actions">
      <ss-button @set-action="acceptModal">Aceptar</ss-button>
      <ss-button @set-action="cancelModal" secondary-color>Cancelar</ss-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
// eslint-disable-next-line import/no-cycle
import { SsButton } from '@/components/UI';

@Component({
  name: 'SsWidgetConfirm',
  components: {
    SsButton,
  },
})
export default class SsWidgetConfirm extends Vue {
  @Emit('accept-modal')
  private acceptModal() :boolean {
    return true;
  }

  @Emit('cancel-modal')
  private cancelModal() :boolean {
    return true;
  }
}
</script>

<style lang="scss" scoped>
.widget_confirm {
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #2B2E32;
  width: 450px;
  height: 250px;
  top: 30%;
  left: 35%;
  border-radius: 25px;
  color: white;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.75);

  &-text {
    font-size: 24px;
    margin-bottom: 35px;
  }

  &-actions {
    display: flex;

    & button {
      margin: 5px;
    }
  }
}
</style>
