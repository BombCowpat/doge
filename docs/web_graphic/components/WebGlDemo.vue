<template>
  <div class="gl-wrap">
    <canvas ref="glcanvas" id="glcanvas" class="glcanvas"></canvas>
  </div>
</template>
<script>
  import { ref, onMounted } from 'vue'
  import { mat4 } from 'gl-matrix'
  export default {
    setup() {
      const glcanvas = ref()
      onMounted(() => {
        const gl = glcanvas.value.getContext('webgl')

        const vsSource = `
          attribute vec4 aVertexPosition;
          attribute vec4 aVertexColor;

          uniform mat4 uModelViewMatrix;
          uniform mat4 uProjectionMatrix;

          varying lowp vec4 vColor;

          void main(void) {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
            vColor = aVertexColor;
          }
        `
        const fsSource = `
          varying lowp vec4 vColor;

          void main(void) {
            gl_FragColor = vColor;
          }
        `

        //
        //  初始化着色器程序，让 WebGL 知道如何绘制我们的数据
        function initShaderProgram(gl, vsSource, fsSource) {
          const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource)
          const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource)

          // 创建着色器程序

          const shaderProgram = gl.createProgram()
          gl.attachShader(shaderProgram, vertexShader)
          gl.attachShader(shaderProgram, fragmentShader)
          gl.linkProgram(shaderProgram)

          // 如果创建失败，alert
          if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram))
            return null
          }

          return shaderProgram
        }

        //
        // 创建指定类型的着色器，上传 source 源码并编译
        //
        function loadShader(gl, type, source) {
          const shader = gl.createShader(type)

          // Send the source to the shader object

          gl.shaderSource(shader, source)

          // Compile the shader program

          gl.compileShader(shader)

          // See if it compiled successfully

          if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader))
            gl.deleteShader(shader)
            return null
          }

          return shader
        }

        const shaderProgram = initShaderProgram(gl, vsSource, fsSource)

        // Collect all the info needed to use the shader program.
        // Look up which attributes our shader program is using
        // for aVertexPosition, aVertexColor and also
        // look up uniform locations.
        const programInfo = {
          program: shaderProgram,
          attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor')
          },
          uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')
          }
        }

        function initColorBuffer(gl) {
          const colors = [
            1.0,
            1.0,
            1.0,
            1.0, // 白
            1.0,
            0.0,
            0.0,
            1.0, // 红
            0.0,
            1.0,
            0.0,
            1.0, // 绿
            0.0,
            0.0,
            1.0,
            1.0 // 蓝
          ]

          const colorBuffer = gl.createBuffer()
          gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW)

          return colorBuffer
        }

        function initBuffers(gl) {
          const positionBuffer = initPositionBuffer(gl)
          const colorBuffer = initColorBuffer(gl)
          return {
            position: positionBuffer,
            color: colorBuffer
          }
        }

        function initPositionBuffer(gl) {
          // Create a buffer for the square's positions.
          const positionBuffer = gl.createBuffer()

          // Select the positionBuffer as the one to apply buffer
          // operations to from here out.
          gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

          // Now create an array of positions for the square.
          const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]

          // Now pass the list of positions into WebGL to build the
          // shape. We do this by creating a Float32Array from the
          // JavaScript array, then use it to fill the current buffer.
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

          return positionBuffer
        }

        function drawScene(gl, programInfo, buffers) {
          gl.clearColor(0.0, 0.0, 0.0, 1.0) // Clear to black, fully opaque
          gl.clearDepth(1.0) // Clear everything
          gl.enable(gl.DEPTH_TEST) // Enable depth testing
          gl.depthFunc(gl.LEQUAL) // Near things obscure far things

          // Clear the canvas before we start drawing on it.

          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

          // Create a perspective matrix, a special matrix that is
          // used to simulate the distortion of perspective in a camera.
          // Our field of view is 45 degrees, with a width/height
          // ratio that matches the display size of the canvas
          // and we only want to see objects between 0.1 units
          // and 100 units away from the camera.

          const fieldOfView = (45 * Math.PI) / 180 // in radians
          const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight
          const zNear = 0.1
          const zFar = 100.0
          const projectionMatrix = mat4.create()

          // note: glmatrix.js always has the first argument
          // as the destination to receive the result.
          mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar)

          // Set the drawing position to the "identity" point, which is
          // the center of the scene.
          const modelViewMatrix = mat4.create()

          // Now move the drawing position a bit to where we want to
          // start drawing the square.

          mat4.translate(
            modelViewMatrix, // destination matrix
            modelViewMatrix, // matrix to translate
            [-0.0, 0.0, -6.0]
          ) // amount to translate

          // Tell WebGL how to pull out the positions from the position
          // buffer into the vertexPosition attribute.
          {
            const numComponents = 2 // pull out 2 values per iteration
            const type = gl.FLOAT // the data in the buffer is 32bit floats
            const normalize = false // don't normalize
            const stride = 0 // how many bytes to get from one set of values to the next
            // 0 = use type and numComponents above
            const offset = 0 // how many bytes inside the buffer to start from
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position)
            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset)
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition)
          }

          setColorAttribute(gl, buffers, programInfo)

          // Tell WebGL to use our program when drawing

          gl.useProgram(programInfo.program)

          // Set the shader uniforms

          gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix)
          gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix)

          {
            const offset = 0
            const vertexCount = 4
            gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount)
          }
        }

        // Tell WebGL how to pull out the colors from the color buffer
        // into the vertexColor attribute.
        function setColorAttribute(gl, buffers, programInfo) {
          const numComponents = 4
          const type = gl.FLOAT
          const normalize = false
          const stride = 0
          const offset = 0
          gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color)
          gl.vertexAttribPointer(programInfo.attribLocations.vertexColor, numComponents, type, normalize, stride, offset)
          gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor)
        }

        // Tell WebGL how to pull out the positions from the position
        // buffer into the vertexPosition attribute.
        function setPositionAttribute(gl, buffers, programInfo) {
          const numComponents = 2 // pull out 2 values per iteration
          const type = gl.FLOAT // the data in the buffer is 32bit floats
          const normalize = false // don't normalize
          const stride = 0 // how many bytes to get from one set of values to the next
          // 0 = use type and numComponents above
          const offset = 0 // how many bytes inside the buffer to start from
          gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position)
          gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset)
          gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition)
        }

        // Here's where we call the routine that builds all the
        // objects we'll be drawing.
        const buffers = initBuffers(gl)

        // Draw the scene
        drawScene(gl, programInfo, buffers)
      })
      return {
        glcanvas
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gl-wrap {
    margin: 20px auto;
    .glcanvas {
      width: 100%;
      height: 600px;
    }
  }
</style>
