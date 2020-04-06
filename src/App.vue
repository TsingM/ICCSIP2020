<template>
  <el-container class="container">
    <!-- header -->
    <el-header height="140px" class="header">
      <el-row>
        <el-col :xs="10" :sm="9" :md="8" :lg="7" :xl="7" class="header-left">
          <h4>International Conference on<br>Cognitive Systems and Information Processing</h4>
          <h5>December 18-20, 2020</h5>
          <h5>Hengqin, Zhuhai, China</h5>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="10" :xl="10" class="header-middle"></el-col>
        <el-col :xs="10" :sm="9" :md="8" :lg="6" :xl="6" class="header-right"></el-col>
      </el-row>
    </el-header>
    <!-- 主菜单 -->
    <el-main class="main">
      <el-menu :default-active="$route.path" mode="horizontal" @select="handleSelect"
      background-color="#176998" text-color="#fff" active-text-color="#ffd04b" class="menu">
        <el-menu-item index="/">HOME</el-menu-item>
        <el-menu-item index="/organization">ORGANIZATION</el-menu-item>
        <el-menu-item index="/submissions">SUBMISSIONS</el-menu-item>
        <el-menu-item index="/program">PROGRAM</el-menu-item>
        <el-menu-item index="/travel">REGISTRANTION AND TRAVEL</el-menu-item>
        <el-menu-item index="/contact">CONTACT</el-menu-item>
      </el-menu>
    </el-main>
    <!-- 路由页面 -->
    <router-view/>
    <!-- footer -->
    <el-footer height="100px" class="footer">
      <div class="copyright">Copyright © ICCSIP 2020. All Rights Reserved.</div>
    </el-footer>
    <!-- 回到顶部 -->
    <el-backtop class="backtop"></el-backtop>
  </el-container>
</template>

<style lang="less">
@cyan: #176998;
.container {
  .header {
    padding: 0 50px;
    margin: 10px 0;
    .el-col {
      height: 140px;
      overflow: hidden;
    }
    .header-left {
      h4, h5 {
        width: 100%;
        text-align: left;
      }
      h4 {
        margin-bottom: 10px;
        line-height: 30px;
        font-size: 24px;
        color: @cyan;
      }
      h5 {
        line-height: 20px;
        font-size: 18px;
        color: #484848;
      }
    }
    .header-middle {
      background-image: url(./assets/img/banner.png);
      background-size: 100% auto;
      background-position: bottom center;
      background-repeat: no-repeat;
    }
    .header-right {
      background-image: url(./assets/img/logo.png);
      background-size: contain;
      background-position: bottom right;
      background-repeat: no-repeat;
      background-origin:content-box;
    }
  }
  .main {
    height: 60px;
    padding: 0;
    text-align: center;
    overflow: hidden;
    background-color: @cyan;
    .menu {
      display: inline-block;
      height: 60px;
      border: 0;
      .el-menu-item {
        font-size: 16px;
      }
    }
  }
  .footer {
    background-color: @cyan;
    overflow: hidden;
    .copyright {
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 20px;
      color: #ffffff;
    }
  }
  .backtop {
    width: 60px;
    height: 60px;
    color: @cyan;
  }
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

