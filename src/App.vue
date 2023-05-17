<template>
  <el-container>
    <el-aside width="200px"><SidebarMenu /></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main> <RouterView /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu/SidebarMenu.vue'
</script>

<style scoped></style>
