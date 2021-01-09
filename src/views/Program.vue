<template>
  <div class="program">
    <div class="white-card">
      <div class="schedule card">
        <div class="title">Program-at-a-Glance</div>
        <div class="line"></div>
        <div class="content">
          <img src="./../assets/img/program1.png">
          <img src="./../assets/img/program2a.png">
          <img src="./../assets/img/program2b.png">
          <img src="./../assets/img/program3.png">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.schedule {
  img {
    width: 80%;
    margin-left: 10%;
  }
}
</style>

<script>
export default {
  name: 'Program'
}
</script>