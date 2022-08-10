<template>
  <div ref="blog4">
    <h3 v-if="loading">OpenCV 加载中...</h3>
    <div class="wrap">
      <div class="inputoutput">
        <div class="caption"><input type="file" ref="fileInput" name="file" /></div>
        <img ref="imageSrc" alt="No Image" />
      </div>
      <div class="inputoutput">
        <div class="caption">canvasOutput</div>
        <canvas class="out-img" id="canvasOutput"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { withBase } from 'vitepress'
  const blog4 = ref(null)
  const imageSrc = ref(null)
  const fileInput = ref(null)
  const loading = ref(true)
  onMounted(() => {
    const scriptCV = document.createElement('script')
    scriptCV.src = withBase('/opencv.js')
    blog4.value.appendChild(scriptCV)
    scriptCV.addEventListener('load', () => {
      loading.value = false
      const imgElement = imageSrc.value
      const inputElement = fileInput.value
      inputElement.addEventListener(
        'change',
        (e) => {
          imgElement.src = URL.createObjectURL(e.target.files[0])
        },
        false
      )
      imgElement.onload = function () {
        let src = cv.imread(imgElement)
        let dst = new cv.Mat()
        cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0)
        // You can try more different parameters
        cv.adaptiveThreshold(src, dst, 200, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 3, 2)
        cv.imshow('canvasOutput', dst)
        src.delete()
        dst.delete()
      }
      setTimeout(() => {
        imgElement.src = withBase('/img/ars.jpg')
      }, 1000)
    })
  })
</script>

<style lang="scss" scoped>
  .wrap {
    margin-top: 20px;
    .caption {
      margin-bottom: 20px;
    }
  }
  .inputoutput {
    margin-bottom: 20px;
    .out-img {
      width: 100%;
    }
  }
</style>
