<template>
  <div class="registration">
    <div class="white-card">
      <div class="registration card">
        <div class="title">Registration (for Authors and Non-authors)</div>
        <div class="line"></div>
        <div class="content">
          <p style="margin-bottom: 20px">Registration fee for ICCSIP2020: <b>RMB 2600</b>. The remittance shall be made to the following account. Adding remarks <b>"ICCSIP", author's name and record number</b>.</p>
          <el-timeline>
            <el-timeline-item timestamp="1) Direct remittance" placement="top">
              <p>Organization: 中国人工智能学会</br>Bank: 中国工商银行新街口支行</br>Account: 0200002909200166203</p>
            </el-timeline-item>
            <el-timeline-item timestamp="2) Alipay transfer" placement="top">
              <img style="width: 200px" src="./../assets/img/qr.png"/>
            </el-timeline-item>
          </el-timeline>
          <p>Then please fill in the <b><a href="ICCSIP2020 REGISTRY.docx" target="_blank">registration form</a></b> and email to <b>csip2020_2020@163.com</b>. Both English and Chinese versions are available.</p>         
          <p>Notice of the Chinese version: <b><a href="ICCSIP2020会议通知.pdf" target="_blank">ICCSIP2020会议通知</a></b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.registration {
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
}
</style>

<script>
export default {
  name: 'Registration'
}
</script>