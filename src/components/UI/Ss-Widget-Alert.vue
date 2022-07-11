<template>
  <div class="widget_alert">
    <p class="widget_alert-message">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'SsWidgetAlert',
})
export default class SsWidgetAlert extends Vue {}
</script>

<style lang="scss" scoped>
.widget_alert {
  background: darkgreen;
  width: 300px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  position: fixed;
  top: 50px;
  right: 50px;

  &-message {
    font-size: 14px;
    color: white;
  }
}
</style>
