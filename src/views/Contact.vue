<template>
  <div class="contact">
    <div class="grey-card">
      <div class="contact card">
        <div class="title">Contact Us</div>
        <div class="line"></div>
        <div class="content">
          <el-timeline class="contact-info">
            <el-timeline-item v-for="(contact, index) in contacts" :key="index" :type="contact.type">
               <el-card>
                <h4><i :class="contact.icon"></i>{{" "+contact.item}}</h4>
                <h5>{{contact.content}}</h5>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.contact {
  .content {
    .contact-info {
      width: 70%;
      margin: 0 auto;
      .el-card {
        h4 {
          font-size: 20px;
          line-height: 20px;
          color: #535051;
        }
        h5 {
          margin-top: 20px;
          font-size: 28px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>

<script>
  export default {
    name: 'Contact',
    data() {
      return {
        contacts: [{
          item: "Contacts",
          content: "Qianyi Sun",
          icon: "el-icon-user",
          type: "primary"
        }, {
          item: "Email",
          content: "csip2020_2020@163.com",
          icon: "el-icon-message",
          type: "danger"
        }, {
          item: "Phone",
          content: "+86 15952525480",
          icon: "el-icon-phone-outline",
          type: "warning"
        }, {
          item: "WeChat Official Account",
          content: "认知系统与信息处理专委会",
          icon: "el-icon-chat-round",
          type: "success"
        }]
      };
    }
  };
</script>