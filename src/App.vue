<template>
  <div id="app">
    <main-header />
    <lateral-menu />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
  components: {
    MainHeader: () => import(/* webpackChunkName: "mainHeader" */ '@/components/Layout/MainHeader.vue'),
    LateralMenu: () => import(/* webpackChunkName: "lateralMenu" */ '@/components/Layout/LateralMenu.vue'),
  },
})

export default class App extends Vue {
}
</script>

<style lang="scss">
</style>
