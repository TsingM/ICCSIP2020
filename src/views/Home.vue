<template>
  <div class="home">
    <div class="grey-card">
      <!-- 走马灯 -->
      <el-carousel :interval="5000" type="card" :height="carHeight+'px'" class="carousel">
        <el-carousel-item v-for="item in carList" :key="item.id">
          <img ref="carHeight" :src="item.idView" class="car">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="white-card">
      <!-- 介绍 -->
      <div class="intro card">
        <div class="title">Welcome to ICCSIP 2020</div>
        <div class="line"></div>
        <div class="content">
          <p>Fifth International Conference on Cognitive Systems and Information Processing (ICCSIP 2020), with the theme Cognitive Computation for AI and Applications in Intelligent Information Processing will be held during December 18-20, 2020, Zhuhai, China. The aim of this conference is to bring together experts from different expertise areas to discuss the state-of-the-art in cognitive systems and intelligent information processing, and to present new research results and perspectives on future development. </p>
          <p>This conference is sponsored by Cognitive Systems and Information Processing Society of Chinese Association for Artificial Intelligence, Cognitive Computing and Systems Society of Chinese Association of Automation, Intelligent Robot Society of China Computer Federation, Tsinghua University, Science in China Press, and technically sponsored by IEEE Computational Intelligence Society, Science in China Series F: Information Sciences, IET Cognitive Computation and Systems and the National Natural Science Foundation Committee.</p>
        </div>
      </div>
    </div>
    <div class="grey-card">
      <!-- 时间节点 -->
      <div class="date card">
        <p class="title">Important Dates</p>
        <p class="line"></p>
        <el-steps align-center class="steps">
          <el-step status="finish" title="July 30, 2020" description="Paper submission deadline" icon="el-icon-document"></el-step>
          <el-step status="process" title="Sep. 30, 2020" description="Notification of acceptance" icon="el-icon-message-solid"></el-step>
          <el-step status="process" title="Oct. 30, 2020" description="Camera-ready copy and author registration" icon="el-icon-s-check"></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@cyan: #176998;
.home {
  .carousel {
    .el-carousel__item {
      .car {
        width: 100%;
      }
    }
  }
  .date {
    .steps {
      padding: 20px;
      .el-step__icon {
        background-color: #f7f7f7;
      }
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
      carHeight: (document.body.clientWidth > 1200) ? (document.body.clientWidth * 9 / 32) : 337.5,
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
