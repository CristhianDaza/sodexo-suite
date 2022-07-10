<template>
  <div
    class="card"
    :class="{ 'isActive' : isActive }"
    @click="setAction"
    @keypress="setAction"
   >
    <div class="avatar">
    </div>
    <div class="card-detail">
      <div class="info">
        <slot name="info"></slot>
      </div>
      <div class="name">
        <slot name="name"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'SsCardUser',
})

export default class HomeView extends Vue {
  @Prop({ type: Boolean, default: false })
  private isActive!: boolean;

  @Emit('set-action') setAction() : boolean {
    return true;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.sass";

.card {
  background: white;
  display: flex;
  padding: 8px 5px;
  border-radius: 10px;
  margin: 2px 0;
  min-width: 250px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border: 3px solid white;
  transition: all .2s linear;

  &-detail {
    margin-left: 18px;
  }

  &.isActive {
    border: 3px solid $primary-color;

    & .avatar{
      background: $primary-color;
    }

    & .name {
      color: $primary-color;
    }
  }

  &:hover {
    border: 3px solid $primary-color;
  }
}
</style>
