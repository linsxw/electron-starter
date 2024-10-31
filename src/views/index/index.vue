<script setup lang="ts">
import LayoutHeader from '@/layouts/components/Header/index.vue'

const collapsed = ref(false)
const menuOptions: MenuOption[] = [
  {
    label: '用户管理',
    key: 'user-manage',
  },
  {
    label: '博客管理',
    key: 'blog-manage',
  },
  {
    label: 'TODO管理',
    key: 'todo-manage',
  },
]
</script>

<template>
  <div class="h-full flex flex-col">
    <LayoutHeader />
    <n-layout has-sider class="flex-1">
      <n-layout-sider bordered width="200">
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <n-layout-content content-style="padding: 10px;">
          <video width="500" controls>
            <source src="https://upfile.xhany.cn/mine-blog/2024/10/f51387375c38489ab0745e26753a1903.mp4" type="video/mp4">
          </video>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped>

</style>
