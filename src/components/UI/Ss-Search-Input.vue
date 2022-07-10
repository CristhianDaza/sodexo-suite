<template>
  <div>
    <label class="inputSearch" for="search">
      <input
        type="text"
        id="search"
        placeholder="Buscar"
        @input="searchItem"
      />
      <span>
        <i class="icon icon-search"></i>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component({
  name: 'SsSearch',
})

export default class SsSearch extends Vue {
  @Emit('search-item')
  private searchItem(e: { target: { value: string } }): string {
    return e.target.value;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.sass";

.inputSearch {
  position: relative;

  & input {
    padding-left: 33px;
    margin-bottom: 20px;
  }
}

.icon {
  position: absolute;
  top: 3px;
  left: 8px;
  color: black;
}
</style>
