<template>
  <div class="travel">
    <div class="white-card">
      <div class="history card">
        <div class="title">History and Humanity</div>
        <div class="line"></div>
        <div class="content">
          <p style="margin-bottom: 20px"><b>Hengqin (Chinese: 横琴岛), is an island in Zhuhai, a prefecture-level city and Special Economic Zone in Guangdong Province of China. The whole island is designated a special economic district, as Hengqin New Area, similar to Binhai New Area in Tianjin and Pudong New Area in Shanghai.</b></p>
          <el-timeline>
            <el-timeline-item timestamp="1890s" placement="top">
              <p>Portugal claimed both Xiao Hengqin and Da Hengqin, along with the larger former island of Wanzai — now a peninsula — to their north, as part of the Macau. Portugal briefly occupied them before World War II.</p>
            </el-timeline-item>
            <el-timeline-item timestamp="1970s" placement="top">
              <p>The two islands, Xiao Hengqin and Da Hengqin, were reclaimed into one island, which is now Hengqin Island.</p>
            </el-timeline-item>
            <el-timeline-item timestamp="1999/12/20" placement="top">
              <p>The Chinese government resumed the exercise of sovereignty over Macau, and the <b>Macau Special Administrative Region of the People's Republic of China</b> was established.</p>
            </el-timeline-item>
            <el-timeline-item timestamp="2009/6/27" placement="top">
              <p>The government of Macau officially announced that the <b>University of Macau</b> would build its new campus on the island.</p>
            </el-timeline-item>
            <el-timeline-item timestamp="2009/11/25" placement="top">
              <p>The State Council of China approves the establishment of <b>Hengqin New Area</b>.</p>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
    <div class="grey-card">
      <div class="trans card">
        <div class="title">Transportation and Tourism</div>
        <div class="line"></div>
        <div class="content">
          <div class="map">
            <img src="./../assets/img/map.jpg"/>
          </div>
          <el-divider></el-divider>
          <p>Hengqin has formed a relatively complete land, sea and air transportation system. It is a 40-minute drive from Zhuhai Airport and a 10-minute drive from Macau Airport. It is also only a 50-minute drive from Zhuhai Port, a hub port in South China.</p>
          <p><b>By Air: </b>There are 5 international and domestic airports around Hengqin: Hong Kong International Airport, Macau International Airport, Guangzhou International Airport, Shenzhen International Airport, and Zhuhai Airport.</p>
          <p><b>By Sea: </b>There are 3 large ports around Hengqin: Wan Chai Pier, Kyushu Port and Shenzhen Shekou Port. Hengqin Passenger Terminal has just opened.</p>
          <p><b>By Land: </b>From downtown Zhuhai, Hengqin can be reached by multiple highways and bus lines.</p>
          <el-divider></el-divider>
          <p>Hengqin Island got its name because of its shape like Guqin. It has a natural landscape of ten steps and one waterfall and hundreds of steps and trees.</p>
          <p>The remains of the naval battles of the Song and Yuan armies in ancient times are still preserved, and there are also Tianhu Scenic Area, Triassic Spring, Ocean Paradise, Shibo Garden and other scenic spots.</p>
          <p>It is close to Macau and is a new city with a little landscape, suitable for entertainment and shopping. In addition, it is also a famous oyster eating spot in Zhuhai.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.travel {
  .history {
    p {
      margin-bottom: 0;
    }
  }
  .trans {
    .map {
      width: 100%;
      text-align: center;
      image {
        width: 760px;
        margin: 0 auto;
      }
    }
    p {
      margin-bottom: 20px;
    }
  }
}
</style>

<script>
export default {
  name: 'Travel'
}
</script>