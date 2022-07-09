<template>
  <div class="banner_user">
    <ss-search />
    <ss-card-user is-active>
      <template v-slot:info>Beneficiario</template>
      <template v-slot:name>Cristhian Daza</template>
    </ss-card-user>
    <ss-card-user>
      <template v-slot:info>Beneficiario</template>
      <template v-slot:name>Luis Miranda Mejia</template>
    </ss-card-user>
    <ss-card-user>
      <template v-slot:info>Beneficiario</template>
      <template v-slot:name>Karen Olvera Mendoza</template>
    </ss-card-user>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SsSearch, SsCardUser } from '@/components/UI';

@Component({
  name: 'BannerUser',
  components: {
    SsSearch,
    SsCardUser,
  },
})
export default class BannerUser extends Vue {}
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
