<template>
  <div class="home">
    <div class="grey-card">
      <!-- 走马灯 -->
      <el-carousel :interval="4000" type="card" :height="carHeight+'px'">
        <el-carousel-item v-for="item in carList" :key="item.id">
          <img ref="carHeight" :src="item.idView" class="car">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="white-card">
      <!-- 介绍 -->
      <div class="intro media">
        <p class="title">Welcome to ICCSIP 2020</p>
        <p class="line"></p>
        <p class="content">Processing (ICCSIP 2020), with the theme Cognitive Computation for AI and Applications in Intelligent Information Processing will be held during December 18-20, 2020, Zhuhai, China. The aim of this conference is to bring together experts from different expertise areas to discuss the state-of-the-art in cognitive systems and intelligent information processing, and to present new research results and perspectives on future development. <br>This conference is sponsored by Cognitive Systems and Information Processing Society of Chinese Association for Artificial Intelligence, Cognitive Computing and Systems Society of Chinese Association of Automation, Intelligent Robot Society of China Computer Federation, Tsinghua University, Science in China Press, and technically sponsored by IEEE Computational Intelligence Society, Science in China Series F: Information Sciences, IET Cognitive Computation and Systems and the National Natural Science Foundation Committee. </p>
      </div>
    </div>
    <div class="grey-card">
      <!-- 时间节点 -->
      <div class="date media">
        <p class="title">Important Dates</p>
        <p class="line"></p>
        <el-steps align-center>
          <el-step status="finish" title="April 30, 2020" description="Paper submission deadline"></el-step>
          <el-step status="process" title="June 30, 2020" description="Notification of acceptance"></el-step>
          <el-step status="process" title="Sep 20, 2020" description="Camera-ready copy and author registration"></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@cyan: #176998;
.media {
  margin: 0 auto;
  @media (max-width: 576px) {
        width: auto;
      }
      @media (min-width: 576px) {
        width: 550px;
      }
      @media (min-width: 768px) {
        width: 750px;
      }
      @media (min-width: 992px) {
        width: 970px;
      }
      @media (min-width: 1200px) {
        width: 1170px;
      }
}
.home {
  .el-carousel {
    .el-carousel__item {
      .car {
        width: 100%;
      }
    }
  }
  .intro, .date {
    overflow: hidden;
    .title {
      text-align: center;
      font-weight: bold;
      font-size: 48px;
      line-height: 48px;
      color: @cyan;
    }
    .line {
      width: 100px;
      height: 20px;
      border-top: 5px solid #ffd04b;
      margin: 10px auto;
    }
    .content {
      padding: 20px;
      margin: 0;
      font-size: 18px;
      line-height: 27px;
    }
    .el-steps {
      padding: 20px;
      .el-step__title {
        font-size: 28px;
      }
      .el-step__description {
        margin-top: 10px;
        font-size: 18px;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      carHeight: document.body.clientWidth * 9 / 32,
      carList: [
        {id: 0, name: '澳门塔夜景', idView: require('./../assets/img/car1.jpg')},
        {id: 1, name: '俯瞰效果图', idView: require('./../assets/img/car2.jpg')},
        {id: 2, name: '横琴口岸综合服务片区', idView: require('./../assets/img/car3.jpg')},
        {id: 3, name: '珠海横琴长隆酒店', idView: require('./../assets/img/car4.jpg')}
      ]
    }
   }
}
</script>
