<template>
  <div id="app">
    <!-- header -->
    <div id="header">
      标题
    </div>
    <!-- 主菜单 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>
    <!-- 路由页面 -->
    <router-view/>
    <!-- footer -->
    
  </div>
</template>

<style lang="css">
#header {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 60px;
  font-weight: 500;
  color: #32A5FF;
}
</style>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key)
    }
  }
}
</script>

