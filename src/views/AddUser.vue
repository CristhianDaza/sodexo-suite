<template>
  <info-user />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'AddUser',
  components: {
    InfoUser: () => import(/* webpackChunkName: "infoUser" */ '@/components/Layout/InfoUser.vue'),
  },
})
export default class AddUser extends Vue {
}
</script>

<style scoped>

</style>
