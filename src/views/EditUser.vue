<template>
  <info-user
    :user-to-id="user[0]"
    is-edit
  />
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import { user } from '@/typings/TypeUser.d';

@Component({
  name: 'EditUser',
  components: {
    InfoUser: () => import(/* webpackChunkName: "infoUser" */ '@/components/Layout/InfoUser.vue'),
  },
  computed: {
    ...mapState('UserStore', {
      user: 'user',
    }),
  },
  methods: {
    ...mapActions('UserStore', {
      getUser: 'getUser',
    }),
  },
})
export default class EditUser extends Vue {
  private idRoute = Number(this.$route.params.id);

  private getUser!: any

  private user!: user[]

  private getUserId(id: number): void {
    this.getUser(id);
  }

  private created(): void {
    this.getUserId(this.idRoute);
  }

  @Watch('$route.params.id', { immediate: true })
  OnRouteChange(value: number): void {
    this.getUserId(value);
  }
}
</script>

<style scoped>

</style>
