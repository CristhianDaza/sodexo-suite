<template>
  <info-user
    :user-to-id="getUserView"
    is-edit
  />
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import { user } from '@/typings/TypeUser.d';

@Component({
  name: 'EditUser',
  components: {
    InfoUser: () => import(/* webpackChunkName: "infoUser" */ '@/components/Layout/InfoUser.vue'),
  },
  computed: {
    ...mapGetters('UserStore', {
      userView: 'userView',
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

  private userView!: user;

  public get getUserView():user {
    return this.userView;
  }

  private getUserId(id: number): void {
    this.getUser(id);
  }

  private created(): void {
    this.getUserId(this.idRoute);
  }

  @Watch('$route.params.id')
  OnRouteChange(value: number): void {
    this.getUserId(value);
  }
}
</script>

<style scoped>

</style>
