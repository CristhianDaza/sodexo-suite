<template>
  <div id="app">
    <main-header />
    <div class="mainApp">
      <lateral-menu />
      <main-menu />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
  components: {
    MainHeader: () => import(/* webpackChunkName: "mainHeader" */ '@/components/Layout/MainHeader.vue'),
    LateralMenu: () => import(/* webpackChunkName: "lateralMenu" */ '@/components/Layout/LateralMenu.vue'),
    MainMenu: () => import(/* webpackChunkName: "mainMenu" */ '@/components/Layout/MainMenu.vue'),
  },
})

export default class App extends Vue {
}
</script>

<style lang="scss">
.mainApp {
  display: flex;
}
</style>
