<script setup lang="ts">
const isDragging = ref(false)
const offset = ref({ x: 0, y: 0 })

function onCloseWindow() {
  window.electron.close()
}

function onMinimizeWindow() {
  window.electron.minimize()
}

function startDrag(e) {
  isDragging.value = true
  offset.value.x = e.clientX
  offset.value.y = e.clientY
}

function stopDrag() {
  isDragging.value = false
}

function moveWindow(e) {
  if (isDragging.value) {
    const newX = e.screenX - offset.value.x
    const newY = e.screenY - offset.value.y
    window.electron.setPosition(newX, newY)
  }
}
window.addEventListener('mousemove', moveWindow)
</script>

<template>
  <div class="py-2 px-4 flex items-center justify-between border-b" @mousedown="startDrag" @mouseup="stopDrag">
    <div class="title">
      小伟同学.
    </div>
    <div class="space-x-2 flex">
      <div class="i-carbon:subtract-filled" @click="onMinimizeWindow" />
      <div class="i-carbon:close-filled" @click="onCloseWindow" />
    </div>
  </div>
</template>

<style scoped>

</style>
