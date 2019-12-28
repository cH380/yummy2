<template>
  <div>
    <div>
      <van-search placeholder="请输入搜索关键词" v-model="value1" />
    </div>
    <!-- 格子间距 -->
    <div>
      <router-link to="/movie">
        <van-grid :gutter="5">
          <van-grid-item v-for="value2 in 1" :key="value2" icon="point-gift-o" text="电影" />
        </van-grid>
      </router-link>
    </div>
    <!-- 底部导航栏 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/app" icon="apps-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.loading {
  transition: all 0.3s ease;
}
</style>