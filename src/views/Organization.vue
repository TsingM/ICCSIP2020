<template>
  <div class="organization">
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
    <div class="white-card">
      <div class="organizers card">
          <p class="title">Organizers</p>
          <p class="line"></p>
          <el-collapse v-model="activeNames" class="organizer">
            <el-collapse-item title="Host" name="1">
              <div>Chinese Association for Artificial Intelligence</div>
            </el-collapse-item>
            <el-collapse-item title="Organizers" name="2">
              <div>Cognitive Systems and Information Processing Society of Chinese Association for Artificial Intelligence</div>
              <div>Fudan-zhuhai Innovation Institute</div>
            </el-collapse-item>
            <el-collapse-item title="Co-organizer" name="3">
              <div>Cognitive Computing and Systems Society of Chinese Association of Automation</div>
            </el-collapse-item>
            <el-collapse-item title="Technical Sponsors" name="4">
              <div>Intelligent Robot Society of China Computer Federation</div>
              <div>Tsinghua University</div>
              <div>Science in China Press</div>
              <div>IEEE Computational Intelligence Society</div>
            </el-collapse-item>
          </el-collapse>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  @cyan: #176998;
  .organization {
    .committee {
      .chair {
        width: 70%;
        margin: 50px auto 0 auto;
        .type {
          text-align: center;
          font-size: 28px;
          line-height: 42px;
        }
        .person {
          text-align: center;
          font-size: 18px;
          line-height: 32px;
        }
      }
    }
    .organizers {
      .organizer {
        .el-collapse-item__header {
          padding: 10px 0;
          font-size: 28px;
        }
        .el-collapse-item__content {
          div {
            font-size: 18px;
            line-height: 36px;
          }
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