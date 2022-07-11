<template>
  <div class="lateralMenu">
    <div class="avatar"></div>
    <div class="avatar"></div>
    <div class="avatar"></div>
    <div class="user">
      <div class="avatar"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'LateralMenu',
})
export default class LateralMenu extends Vue {}
</script>

<style lang="scss" scoped>
.lateralMenu {
  background-color: #363A3E;
  display: inline-flex;
  width: 65px;
  margin-top: -1px;
  height:  calc(100vh - 65px) ;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .avatar {
    margin: 10px 0;
    opacity: 20%;
  }

  & .user {
    bottom: 0;
    left: 0;
    background: #2B2E32;
    position: absolute;
    width: 64px;
    display: flex;
    justify-content: center;
  }
}
</style>
