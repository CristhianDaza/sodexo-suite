<template>
  <div class="banner_user">
    <ss-search @search-item="searchUser" />
    <ss-card-user
      v-for="user in getUsers"
      :key="user.id"
      @set-action="selectUser(user)"
      :is-active="user.isActive"
    >
      <template v-slot:info>Beneficiario</template>
      <template v-slot:name>{{ user.name }}</template>
    </ss-card-user>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { SsSearch, SsCardUser } from '@/components/UI';
import { mapActions, mapGetters } from 'vuex';
import { user } from '@/typings/TypeUser.d';

@Component({
  name: 'BannerUser',
  components: {
    SsSearch,
    SsCardUser,
  },
  computed: {
    ...mapGetters('UserStore', {
      filterByName: 'filterByName',
    }),
  },
  methods: {
    ...mapActions('UserStore', {
      updateActive: 'updateActive',
    }),
  },
})
export default class BannerUser extends Vue {
  private search = ''

  private updateActive!: any

  private filterByName!: any

  public get getUsers(): user[] {
    return this.filterByName(this.search);
  }

  private selectUser(selectUser: user): void {
    this.$router.push({ name: 'editUser', params: { id: selectUser.id } });
  }

  private searchUser(search: string): void {
    this.search = search;
    this.filterByName(search);
  }

  @Watch('$route.params.id', { immediate: true })
  updateActiveUser(value: number, oldValue: number): void {
    if (value) {
      this.updateActive(Number(value));
    }
    if (oldValue) {
      this.updateActive(Number(oldValue));
    }
  }
}
</script>

<style lang="scss" scoped>
.banner_user {
  background: #F5F5F5;
  width: 280px;
  height: calc(100vh - 131px);
  padding: 20px 10px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
}
</style>
