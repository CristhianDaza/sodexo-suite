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
  // eslint-disable-next-line class-methods-use-this
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
    background: $gray-color;
    padding: 10px 5px 10px 33px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    width: 250px;
    font-size: 12px;
    color: black;
    position: relative;

    &::placeholder {
      color: black;
    }

    &:focus-visible {
      outline: 2px solid $primary-color;
    }
  }
}

.icon {
  position: absolute;
  top: 3px;
  left: 8px;
  color: black;
}
</style>
