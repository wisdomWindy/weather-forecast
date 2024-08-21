<template>
  <div class="life-index">
    <div class="title">生活指数</div>
    <div class="list">
      <div class="list-item" v-for="(item) in lifeIndexData" :key="item.name">
        <img class="item-icon">
        <div class="item-content">
          <div class="item-title">{{ item.name }} {{ item.category }}</div>
          <div class="item-description">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="list"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  lifeIndexData: {
    type: Array<LifeIndex>,
    default: () => ([])
  }
});
</script>

<style scoped lang="scss">
.life-index {
  padding: 10px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  height:300px;
  overflow: scroll;
  margin-top:10px;
  
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.title{
  padding:0 10px 10px 0;
}

.list {
  display: flex;
  flex-wrap: wrap;
  &-item {
    display: flex;
    align-items: center;
    width:45%;
    margin:10px 0;
  }
}

.item-icon {
  width: 50px;
  height: 50px;
  margin-right:20px;
}

.item-title {
  font-size: 16px;
  font-weight: bold;
}

.item-description {
  font-size: 10px;
}
</style>