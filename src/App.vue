<script setup lang="ts">
import { naiveThemeConfig } from '@/config/naiveConfig.ts'
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider class="h-full" :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="naiveThemeConfig">
    <Application>
      <RouterView />
    </Application>
    <n-global-style />
  </n-config-provider>
</template>
