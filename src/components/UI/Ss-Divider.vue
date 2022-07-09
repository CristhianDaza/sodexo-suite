<template>
  <div class="divider">
    <hr>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Ss-Divider',
})
export default class SsDivider extends Vue {}
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
  }
}

</style>
