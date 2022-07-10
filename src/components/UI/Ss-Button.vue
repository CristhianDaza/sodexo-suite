<template>
  <button
    :class="{
      'primary-color' : primaryColor, 'secondary-color' : secondaryColor, 'padding-left' : icon
    }"
    @click="setAction"
    class="mainButton"
  >
    <div v-if="icon" class="mainIcon">
      <i :class="`icon-${icon}`" class="icon">
      </i>
    </div>
    <slot></slot>
  </button>
</template>

<script lang="ts" >
import {
  Component,
  Prop,
  Vue,
  Emit,
} from 'vue-property-decorator';

@Component({
  name: 'SsButton',
})
export default class SsButton extends Vue {
  @Prop({ type: Boolean, default: true })
  private primaryColor!: boolean;

  @Prop({ type: Boolean, default: false })
  private secondaryColor!: boolean;

  @Prop({ type: String, default: '' })
  private icon!: string

  @Emit('set-action') setAction(): boolean {
    return true;
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.sass';

.mainButton {
  border-radius: 25px;
  padding: 12px 20px;
  font-size: 12px;
  cursor: pointer;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  position: relative;

  &.primary-color {
    background: $primary-color;
  }

  &.secondary-color {
    background: $secondary-color;
  }

  & .mainIcon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, .2);
    border-radius: 100%;
    width: 30px;
    height: 30px;
    left: 4px;
  }
}

.padding-left {
  padding-left: 45px;
}
</style>
