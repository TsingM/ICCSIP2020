<template>
  <div class="organization">
    <div class="white-card">
      <div class="organizers card">
          <p class="title">Organizers</p>
          <p class="line"></p>
          <div>
            <el-divider class="type">Host</el-divider>
            <a href="https://www.caai.cn" target="_blank" class="orgainzer">
                <img src="./../assets/img/logos/aai.png" class="image">
                <p class="name">Chinese Association for Artificial Intelligence</p>
            </a>
            <el-divider class="type">Organizers</el-divider>
            <a href="https://www.caai.cn" target="_blank" class="orgainzer">
                <img src="./../assets/img/logos/aai.png" class="image">
                <p class="name">Cognitive Systems and Information Processing Society of Chinese Association for Artificial Intelligence</p>
            </a>
            <a href="http://www.fudan-zhuhai.org.cn" target="_blank" class="orgainzer">
                <img src="./../assets/img/logos/fudan.png" class="image">
                <p class="name">Fudan-zhuhai Innovation Institute</p>
            </a>
            <el-divider class="type">Co-organizer</el-divider>
            <a href="http://www.caa.org.cn" target="_blank" class="orgainzer">
                <img src="./../assets/img/logos/caa.png" class="image">
                <p class="name">Cognitive Computing and Systems Society of Chinese Association of Automation</p>
            </a>
            <el-divider class="type">Technical Sponsors</el-divider>
            <a href="https://www.ccf.org.cn" target="_blank" class="orgainzer">
                <img src="./../assets/img/logos/ccf.png" class="image">
                <p class="name">Intelligent Robot Society of China Computer Federation</p>
            </a>
            <a href="http://www.cs.tsinghua.edu.cn" target="_blank" class="orgainzer">
                <img src="./../assets/img/logos/tsinghua.png" class="image">
                <p class="name">Tsinghua University</p>
            </a>
            <a href="http://www.scichina.com" target="_blank" class="orgainzer">
                <img src="./../assets/img/logos/mag.png" class="image">
                <p class="name">Science in China Press</p>
            </a>
            <a href="https://cis.ieee.org" target="_blank" class="orgainzer">
                <img src="./../assets/img/logos/ieee.png" class="image">
                <p class="name">IEEE Computational Intelligence Society</p>
            </a>
          </div>
      </div>
    </div>
    <div class="grey-card">
      <div class="committee card">
          <p class="title">Organizing Committee</p>
          <p class="line"></p>
          <el-card v-for="(item,i) in committee" :key="i" class="chair">
            <div slot="header" class="type">{{i}}</div>
            <div v-for="j in committee[i]" :key="j" class="person">
              {{j}}
            </div>
          </el-card>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  @cyan: #176998;
  .organization {
    a {
      text-decoration: none;
      color: #333333;
      -webkit-tap-highlight-color: #333333;
    }
    a:visited {
      color: #333333;
    }
    a:active {
      color: #333333;
    }
    .organizers {
      .type {
        margin: 80px 0 50px 0;
        .el-divider__text {
          font-size: 24px;
        }
      }
      .orgainzer {
        display: block;
        margin-bottom: 50px;
        text-align: center;
        .image {
          width: 200px;
          margin: 0 auto;
        }
        .name {
          font-size: 18px;
        }
      }
    }
    .committee {
      .chair {
        width: 70%;
        margin: 50px auto 0 auto;
        .type {
          text-align: center;
          font-size: 24px;
          line-height: 42px;
        }
        .person {
          text-align: center;
          font-size: 18px;
          line-height: 32px;
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'Organization',
  data () {
    return {
      committee: {
        "Honorary Chairs": [
          "Bo Zhang, China",
          "Nanning Zheng, China",
          "Deyi Li, China",
          "Lin Chen, China"
        ],
        "Advisory Committee Chairs": [
          "Qionghai Dai, China",
          "Hongbin Zha, China",
          "Fuji Ren, Japan",
          "Yaochu Jin, Germany",
          "Jennie Si, USA"
        ],
        "General Chairs": [
          "Fuchun Sun, China",
          "Angelo Cangosi, United Kindom",
          "Jianwei Zhang, Germany",
          "Dewen Hu, China"
        ],
        "Program Committee Chairs": [
          "Zengguang Hou, China",
          "Stefan Wermter, Germany",
          "Xuguang Lan, China",
          "Yan Yang, China"
        ],
        "Organizing Committee Chairs": [
          "Huaping Liu, China",
          "Guang-Bin Huang, Singapore",
          "Hong Cheng, China",
          "Wenqiang Zhang, China"
        ],
        "Plenary Sessions Chairs": [
          "Changlin Wang,  China",
          "Chenguang Yang, UK"
        ],
        "Special Sessions Chairs": [
          "Fei Song, China",
          "Yixu Song, China"
        ],
        "Publications Chairs": [
          "Wei Li, USA",
          "Quanbo Ge, China"
        ],
        "Publicity Chairs": [
          "Jianmin Li, China",
          "Bin Fang, China"
        ],
        "Finance Chair": [
          "Qianyi Sun, China"
        ],
        "Registration Chair": [
          "Qianyi Sun, China"
        ],
        "Local Arrangements Chairs": [
          "Junyu Wang, China",
          "Zhongyi Chu, China",
          "Changhe Chu, China"
        ]
      },
      activeNames: ['1', '2', '3', '4']
    }
   }
}
</script>