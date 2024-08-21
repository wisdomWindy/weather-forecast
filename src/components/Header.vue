<template>
  <div class="header">
    <div class="search">
      <input class="search-input" v-model="city" @click="handleCenter" type="text" password="false" />
      <img class="search-icon" src="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const city = ref('');
const emits = defineEmits(['search']);
const handleCenter = () => {
  console.log('e')
  emits('search', city.value);
}

</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  width: 220px;
  height: 50px;
  border-radius: 25px;
  background-color: #f5f5f5;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;

  &-input {
    height: 100%;
    flex: 1;
    outline: none;
    border: none;
    background-color: transparent;
  }

  &-icon {
    width: 20px;
    height: 20px;
  }
}
</style>