<template>
  <div class="divider">
    <hr :class="{ 'fullHeight' : isFull }">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Ss-Divider',
})
export default class SsDivider extends Vue {
  @Prop({ type: Boolean, default: false })
  private isFull!: boolean;
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.sass";

.divider {
  & hr {
    margin-top: 5px;
    height: 58px;
    width: 1px;
    border-width:0;
    background-color: $gray-color;

    &.fullHeight {
      height: 100%;
    }
  }
}

</style>
