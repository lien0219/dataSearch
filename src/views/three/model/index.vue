<template>
  <div class="canvas-container" ref="screenDom"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let screenDom = ref(null)

// 存放模型事件
let clickableModel = ref(null)

// 跟踪模型
// let modelPosition = { x: 0, y: 1, z: 5 }
// let modelScale = ref<number>(1)
// let isAnimating = false

onMounted(() => {
  //创建场景
  let scene = new THREE.Scene()
  //创建相机
  let camera = new THREE.PerspectiveCamera(
    100,
    screenDom.value.clientWidth / screenDom.value.clientHeight,
    0.1,
    1000,
  )
  camera.position.set(0, 1, 5)

  //创建渲染器
  let renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(screenDom.value.clientWidth, screenDom.value.clientHeight)
  screenDom.value.appendChild(renderer.domElement)

  //添加控制器
  let control = new OrbitControls(camera, renderer.domElement)
  // control.enableRotate = true // 启用旋转
  // control.enableZoom = true // 启用缩放
  // control.enablePan = true // 启用平移

  // 创建天空盒
  // 相应面对应相应图片
  const imgUrl = [
    'bak1/right.jpg',
    'bak1/left.jpg',
    'bak1/top.jpg',
    'bak1/down.jpg',
    'bak1/back.jpg',
    'bak1/front.jpg',
  ]
  // 调用getTexturesFromAtlasFile() 给每个材质加上相应的图片
  const textures = getTexturesFromAtlasFile(imgUrl, 6)
  const materials = []

  for (let i = 0; i < 6; i++) {
    // 创造六个面的材质
    materials.push(new THREE.MeshBasicMaterial({ map: textures[i] }))
  }
  //创造包围盒
  const skyBox = new THREE.Mesh(
    new THREE.BoxGeometry(1024, 1024, 1024),
    materials,
  )
  // skyBox.position.set(0, 0, 0);
  skyBox.geometry.scale(1, 1, -1)
  scene.add(skyBox)
  // 六个面添加图片
  function getTexturesFromAtlasFile(atlasImgUrl: any, tilesNum: any) {
    const textures: any = []

    for (let i = 0; i < tilesNum; i++) {
      textures[i] = new THREE.Texture()
    }

    for (let i = 0; i < textures.length; i++) {
      const imageObj = new Image()
      imageObj.src = atlasImgUrl[i]
      imageObj.onload = () => {
        let context = ''
        // let tileWidth = imageObj.height;
        // let tileWidth = 5000;

        const canvas = document.createElement('canvas')
        // const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;  // 得到canvas 元素
        context = canvas.getContext('2d')
        const canvasHeight = 720
        canvas.height = canvasHeight
        canvas.width = canvasHeight
        // context.drawImage( imageObj, canvasHeight * i, 0, canvasHeight, canvasHeight, 0, 0, canvasHeight, canvasHeight );
        context.drawImage(imageObj, 0, 0, canvasHeight, canvasHeight)
        textures[i].image = canvas
        textures[i].needsUpdate = true
      }
    }
    return textures
  }

  //添加模型
  const loader = new GLTFLoader()
  loader.load('model/littlegriffons_sparrowzosterops/scene.gltf', (gltf) => {
    gltf.scene.scale.set(15, 15, 15) // 增大模型的大小
    gltf.scene.position.set(0, 0, 0) // 模型位置
    gltf.scene.rotation.y = Math.PI / 2 // y轴旋转
    gltf.scene.rotation.z = -Math.PI / 8 // z轴旋转
    scene.add(gltf.scene) // 加入场景
    clickableModel = gltf.scene // 将加载的模型赋值给clickableModel变量
  })
  // loader.load('model/littlegriffons_sparrowzosterops/scene.gltf', (gltf) => {
  //   gltf.scene.scale.set(20, 20, 20) // 增大模型的大小
  //   gltf.scene.position.set(-6.2, -0.5, 0.8) // 模型位置
  //   gltf.scene.rotation.y = Math.PI / 2 // y轴旋转
  //   gltf.scene.rotation.z = -Math.PI / 8 // z轴旋转
  //   scene.add(gltf.scene) // 加入场景
  // })
  // loader.load('model/littlegriffons_sparrowzosterops/scene.gltf', (gltf) => {
  //   gltf.scene.scale.set(15, 15, 15) // 增大模型的大小
  //   gltf.scene.position.set(2.15, -0.5, 0.8)
  //   gltf.scene.rotation.y = Math.PI / 2
  //   gltf.scene.rotation.z = -Math.PI / 8
  //   scene.add(gltf.scene)
  // })

  //添加直线光
  let light1 = new THREE.DirectionalLight(0xffffff, 1)
  light1.position.set(0, 50, 50)
  let light2 = new THREE.DirectionalLight(0xffffff, 1)
  light2.position.set(0, 50, -50)
  let light3 = new THREE.DirectionalLight(0xffffff, 1)
  light3.position.set(50, 50, 50)
  let light4 = new THREE.DirectionalLight(0xffffff, 1)
  light4.position.set(-50, -10, 0)
  let light5 = new THREE.DirectionalLight(0xffffff, 1)
  light5.position.set(0, 0, 50)
  let light6 = new THREE.DirectionalLight(0xffffff, 1)
  light6.position.set(0, 0, -50)
  let light7 = new THREE.DirectionalLight(0xffffff, 1)
  light7.position.set(50, 0, 0)
  let light8 = new THREE.DirectionalLight(0xffffff, 1)
  light8.position.set(-50, 0, 0)
  scene.add(light1, light2, light3, light4, light5, light6, light7, light8)

  //绘制画布
  function render() {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
    // 更新相机位置
    // camera.position.set(modelPosition.x, modelPosition.y, modelPosition.z + 5)
    // control.update()
  }
  render()
  // 添加点击事件处理逻辑
  screenDom.value.addEventListener('click', (event) => {
    // 获取鼠标点击的位置
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

    // 创建射线投射器
    const raycaster = new THREE.Raycaster()
    const mouseVector = new THREE.Vector2(mouseX, mouseY)
    raycaster.setFromCamera(mouseVector, camera)

    // 检测射线和模型的交点
    const intersects = raycaster.intersectObject(clickableModel, true)

    // 如果有交点，执行相应的操作
    if (intersects.length > 0) {
      const clickedObject = intersects[0].object
      // 在这里执行你希望的点击模型后的操作
      console.log('点击了模型:', clickedObject)
      // 将模型移动到屏幕中央
      // const targetPosition = { x: 0, y: 1, z: 0 }
      // const targetScale = 20 // 放大模型

      // // 创建动画
      // const animationDuration = 1000 // 毫秒
      // const startPosition = clickableModel.position.clone()
      // const startScale = clickableModel.scale.clone()
      // const scaleStep = (targetScale - startScale.x) / animationDuration
      // const positionStep = new THREE.Vector3(
      //   (targetPosition.x - startPosition.x) / animationDuration,
      //   (targetPosition.y - startPosition.y) / animationDuration,
      //   (targetPosition.z - startPosition.z) / animationDuration,
      // )

      // let animationStartTime = ref(null)

      // const animateModel = (timestamp: any) => {
      //   if (!animationStartTime) {
      //     animationStartTime = timestamp
      //   }
      //   const elapsedTime = timestamp - animationStartTime
      //   if (elapsedTime < animationDuration) {
      //     // 更新模型位置和大小
      //     clickableModel.position.add(
      //       positionStep.clone().multiplyScalar(elapsedTime),
      //     )
      //     clickableModel.scale.set(
      //       startScale.x + scaleStep * elapsedTime,
      //       startScale.y + scaleStep * elapsedTime,
      //       startScale.z + scaleStep * elapsedTime,
      //     )
      //     requestAnimationFrame(animateModel)
      //   } else {
      //     // 动画结束
      //     isAnimating = false
      //     clickableModel.position.copy(targetPosition)
      //     clickableModel.scale.set(targetScale, targetScale, targetScale)
      //   }
      // }

      // // 开始动画
      // isAnimating = true
      // requestAnimationFrame(animateModel)
    }
  })
})
</script>

<style lang="scss" scoped>
.canvas-container {
  width: 100%;
  height: 100vh;
}
</style>
