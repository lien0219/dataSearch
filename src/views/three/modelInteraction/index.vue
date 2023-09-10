<template>
  <div>
    <div id="three"></div>
  </div>
</template>
<script setup lang="ts">
import * as TWEEN from '@tweenjs/tween.js'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ref, onMounted } from 'vue'

// 存储模型对象
const model = ref<THREE.Object3D | null>(null)
const modelScale = ref(1) // 模型缩放比例
const modelPosition = ref(new THREE.Vector3()) // 模型位置
const modelRotation = ref(new THREE.Euler()) // 模型旋转角度

onMounted(() => {
  // 给模型添加点击事件监听器
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  document.addEventListener('click', onMouseClick)

  function onMouseClick(event: MouseEvent) {
    // 将鼠标点击位置的屏幕坐标转换为Three.js中的标准坐标
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    // 通过射线检测鼠标点击位置是否与模型相交
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects([model.value], true)

    if (intersects.length > 0) {
      // 当点击到模型时执行的操作
      console.log('点击了模型')

      // 更新模型的缩放、位置和旋转信息
      modelScale.value = 2 // 放大2倍
      modelPosition.value = intersects[0].point // 设置模型位置为点击位置
      modelRotation.value.y += Math.PI / 4 // y轴旋转增加45度

      // 添加动画效果
      const targetPosition = modelPosition.value
        .clone()
        .add(new THREE.Vector3(0, 0, -5)) // 相机的目标位置
      const targetRotation = modelRotation.value.clone() // 相机的目标旋转角度

      // 动画的持续时间和缓动函数
      const duration = 2000 // 1秒
      const easing = TWEEN.Easing.Quadratic.Out

      // 创建一个Tween动画对象来控制相机的位置和旋转
      new TWEEN.Tween(camera.position)
        .to(targetPosition, duration)
        .easing(easing)
        .start()
      new TWEEN.Tween(camera.rotation)
        .to(targetRotation, duration)
        .easing(easing)
        .start()
    }
  }

  // 创建场景、相机和渲染器
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000,
  )
  const renderer = new THREE.WebGLRenderer()
  // 设置渲染器的大小，并将其添加到页面上的容器元素中
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('three')?.appendChild(renderer.domElement)
  // 创建GLTFLoader实例
  const loader = new GLTFLoader()
  // 加载gltf模型文件
  loader.load(
    'model/littlegriffons_sparrowzosterops/scene.gltf',
    (gltf) => {
      gltf.scene.scale.set(15, 15, 15) // 增大模型的大小
      gltf.scene.position.set(0, 0, 0) // 模型位置
      gltf.scene.rotation.y = Math.PI / 2 // y轴旋转
      gltf.scene.rotation.z = -Math.PI / 8 // z轴旋转
      // 加载完成后，将模型添加到场景中
      scene.add(gltf.scene)
      // 将模型对象赋值给变量
      model.value = gltf.scene
    },
    (xhr) => {
      // 加载进度的回调函数
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
      // 加载出错的回调函数
      console.error('An error happened', error)
    },
  )
  // 设置相机的位置
  camera.position.z = 5

  // 创建一个OrbitControls实例
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.rotateSpeed = 0.5
  controls.zoomSpeed = 1.2
  controls.minDistance = 1
  controls.maxDistance = 100

  // 创建坐标轴辅助对象
  const axesHelper = new THREE.AxesHelper(5) // 参数是轴的长度

  // 将坐标轴添加到场景中
  scene.add(axesHelper)

  // 创建一个动画循环函数
  function animate() {
    requestAnimationFrame(animate)
    // controls.update() // 更新轨道控制器
    // axesHelper.rotation.x += 0.01 // 沿X轴旋转
    // 更新TWEEN动画
    TWEEN.update()
    // axesHelper.rotation.y += 0.01 // 沿Y轴旋转
    renderer.render(scene, camera)
  }
  animate()
})
</script>
<style scoped>
#three {
  width: 100%;
  height: 100vh;
}
</style>
