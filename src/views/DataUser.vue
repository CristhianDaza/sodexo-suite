<template>
  <info-user />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    InfoUser: () => import(/* webpackChunkName: "infoUser" */ '@/components/Layout/InfoUser.vue'),
  },
})
export default class HomeView extends Vue {
}
</script>
