<template>
  <div class="homeView">
    <h1 class="info">Sodexo Suite</h1>
    <h2 class="name">Seleccione un Beneficiario</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'HomeView',
})
export default class HomeView extends Vue {
}
</script>

<style lang="scss" scoped>
.homeView {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 250px auto;
}
</style>
