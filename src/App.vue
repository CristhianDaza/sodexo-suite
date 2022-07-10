<template>
  <div id="app">
    <main-header />
    <div class="mainApp">
      <lateral-menu />
      <div class="main_app_user">
        <main-menu />
        <banner-user />
      </div>
      <router-view/>
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
    BannerUser: () => import(/* webpackChunkName: "bannerUser" */ '@/components/Layout/BannerUser.vue'),
  },
})

export default class App extends Vue {
}
</script>

<style lang="scss">
.mainApp {
  display: flex;

  & .main_app_user {
    display: flex;
    flex-direction: column;
  }
}
</style>
