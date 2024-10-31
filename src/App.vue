<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <Application>
      <RouterView />
    </Application>
    <n-global-style />
  </n-config-provider>
</template>
