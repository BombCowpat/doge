<template>
  <div>
    <canvas ref="glcanvas" id="glcanvas" width="640" height="480"></canvas>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  export default {
    setup() {
      const glcanvas = ref()
      onMounted(() => {
        console.log('xx')
        console.log(glcanvas)
      })
      return {
        glcanvas
      }
    }
  }
</script>

<style lang="scss" scoped></style>
