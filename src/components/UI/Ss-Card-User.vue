<template>
  <div class="card" :class="{ 'isActive' : isActive }" >
    <div class="card-avatar">
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
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'SsCardUser',
})

export default class HomeView extends Vue {
  @Prop({ type: Boolean, default: false })
  private isActive!: boolean;
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.sass";

.card {
  background: white;
  display: flex;
  padding: 8px 5px;
  border-radius: 10px;
  margin: 5px;
  max-width: 250px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border: 3px solid white;

  &-avatar {
    width: 40px;
    height: 40px;
    background: $gray-color;
    border-radius: 50%;
    margin-left: 8px;
  }

  &-detail {
    margin-left: 18px;
  }

  &.isActive {
    border: 3px solid $primary-color;

    & .card-avatar{
      background: $primary-color;
    }

    & .card-detail-name {
      color: $primary-color;
    }
  }
}
</style>
