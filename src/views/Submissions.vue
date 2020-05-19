<template>
  <div class="submissions">
    <div class="white-card">
      <div class="call-for-paper card">
        <div class="title">Call for Papers and Special Sessions</div>
        <div class="line"></div>
        <div class="content">
          <p>Original papers are invited from multidisciplinary perspectives on subject areas including, but not limited to.</p>
          <el-table :data="papers" stripe border size="medium" class="paper">
            <el-table-column prop="cog" label="Cognitive Systems"></el-table-column>
            <el-table-column prop="info" label="Information Processing"></el-table-column>
          </el-table>
          <p>In addition, ICCSIP 2020 Program Committees solicit proposals for special sessions within the technical scopes of the conference. Special sessions, to be organized by internationally recognized experts, aim to bring together researchers in special focused topics. Papers submitted for special sessions are to be peer-reviewed with the same criteria used for the contributed papers. Researchers interested in organizing special sessions are invited to submit formal proposals to ICCSIP 2020. A special session proposal should include the session title, a brief description of the scope and motivation, names, contact information and brief biographical information on the organizers.</p>
        </div>
      </div>
    </div>
    <div class="grey-card">
      <div class="paper-submission card">
        <div class="title">Paper Submission</div>
        <div class="line"></div>
        <div class="content">
          <p style="margin-bottom: 0"><b>Submit at: <a href="https://easychair.org/conferences/?conf=iccsip2020" target="_blank">https://easychair.org/conferences/?conf=iccsip2020</a></b></p>
          <p><b>If you don't have an easychair account, please sign up first at:  <a href="https://www.easychair.org/account/signup" target="_blank">https://www.easychair.org/account/signup</a></b></p>
          <p>Authors are invited to submit full-length papers (6 pages normally and 8 pages maximum) by the submission deadline through the online submission system. Potential organizers are also invited to enlist five or more papers with cohesive topics to form special sessions.</p>
          <p>The submitted paper implies that it is original and has not been submitted under review or is not copyright-protected elsewhere and will be presented by an author if accepted. All submitted papers will be refereed by experts in the field based on the criteria of originality, significance, quality, and clarity. The authors of accepted papers will have an opportunity to revise their papers and take consideration of the referees' comments and suggestions.</p>
          <p>Papers presented at ICCSIP 2020 will be published in the EI-indexed proceedings and some selected top papers will be included in special issues of several SCI-indexed journals. </p>
          <el-card class="journal">
            <div slot="header" class="journal-title">
              <span>Journals</span>
            </div>
            <div v-for="i in journals" :key="i" class="journal-content">
              {{ i }}
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="white-card">
      <div class="important-dates card">
        <div class="title">Important Dates</div>
        <div class="line"></div>
        <div class="content">
          <el-table :data="dates" size="medium" class="dates">
            <el-table-column prop="process" label="Procss"></el-table-column>
            <el-table-column prop="date" label="Date"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @cyan: #176998;
  .submissions {
    a {
      color: #333333;
      -webkit-tap-highlight-color: #333333;
    }
    a:visited {
      color: #333333;
    }
    a:active {
      color: #333333;
    }
    .call-for-paper {
      .paper {
        width: 100%;
        margin-bottom: 36px;
        .el-table__header {
          width: 100%!important;
          font-size: 20px;
        }
        .el-table__body {
          width: 100%!important;
          font-size: 16px;
        }
      }
    }
    .paper-submission {
      .journal {
        .journal-title {
          padding: 10px 0;
          font-size: 20px;
        }
        .journal-content {
          font-size: 16px;
          line-height: 32px;
        }
      }
    }
    .important-dates {
      .dates {
        width: 80%;
        margin: 0 auto 50px auto;
        .el-table__header {
          width: 100%!important;
          font-size: 20px;
        }
        .el-table__body {
          width: 100%!important;
          font-size: 16px;
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'Submissions',
  data () {
    return {
      papers: [{
        cog: "Cognitive sciences and technology",
        info: "Information presentation and metrics"
      },{
        cog: "Visual cognition and computation",
        info: "Multi-modal information interaction and fusion"
      },{
        cog: "Auditory cognitive processing",
        info: "Big data and intelligent information processing"
      },{
        cog: "Tactile cognition and computation",
        info: "Neural cognitive computation and learning"
      },{
        cog: "Cognitive metrics",
        info: "Visual information processing"
      },{
        cog: "Cognitive psychology",
        info: "Brain-computer interface"
      },{
        cog: "Cognitive robotics",
        info: "Bioinformatics and applications"
      },{
        cog: "Cognitive radio",
        info: "Multi-modal cognitive mechanism for dexterous operation"
      },{
        cog: "Cognitive radars",
        info: "Extreme learning / other learning machines  and applications"
      }
      ],
      journals: [
        "Cognitive Computation and Systems",
        "International Journal of Control, Automation, and Systems",
        "Robotics and Autonomous Systems",
        "Science China: Information Sciences",
        "Tsinghua Science and Technology (English Version)",
        "IEEE Transactions on Cognitive and Development Systems",
        "IEEE Transactions on Fuzzy Systems"
      ],
      dates: [{
        process: "Paper submission deadline",
        date: "July 30, 2020"
      },{
        process: "Notification of acceptance",
        date: "Sep. 30, 2020"
      },{
        process: "Camera-ready copy and author registration",
        date: " Oct. 30, 2020"
      }
    ]
    }
   }
}
</script>