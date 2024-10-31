<script setup lang="ts">

</script>

<template>
  <div>
    <n-tabs type="line" animated>
      <n-tab-pane name="oasis" tab="Oasis">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="周杰伦">
        七里香
      </n-tab-pane>
    </n-tabs>
    <n-button @click="$router.push('/login')">
      去登录
    </n-button>
  </div>
</template>

<style scoped>

</style>
