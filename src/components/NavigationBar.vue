<template>
  <el-menu theme="dark" default-active="/" class="menu" mode="horizontal" :router="true"  >
    <el-menu-item index="home">Home</el-menu-item>
    <el-submenu index="skills">
      <template slot="title">Skills</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <el-row type="flex" class="row-bg" justify="end">
      <el-menu-item index=""><a href="https://medium.com/@kritcg" target="_blank">Medium</a></el-menu-item>
      <el-menu-item index="contact-me">Contact me</el-menu-item>
    </el-row>
  </el-menu>
</template>
<script>
  export default {
    methods: {
    }
  }
</script>
<style scoped>

</style>
