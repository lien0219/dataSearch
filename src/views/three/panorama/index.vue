<template>
  <div v-loading="loading" style="position: relative">
    <div
      style="
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.5;
        height: 35px;
        width: 100%;
        z-index: 9999;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 20px;
      "
    >
      <!-- <el-button size="mini" @click="changeName('indoor')">室内</el-button> -->
      <el-button size="mini" @click="loadModel">加载模型</el-button>
    </div>
    <div ref="environment"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGL1Renderer,
  AmbientLight,
  CubeTextureLoader,
  Mesh,
  PlaneGeometry,
  MeshLambertMaterial,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loading = ref(true)

let scene: any = new Scene()

const environment = ref<HTMLDivElement>()

//   默认场景
const nameDefault = ref<string>('indoor')

// 切换场景事件
const changeName = (environmentName: string) => {
  if (nameDefault.value === environmentName) {
    return
  }
  if (environmentName === '') {
    environmentName = nameDefault.value
  }
  loading.value = true
  scene.background = new CubeTextureLoader()
    .setPath(`/ambient/${environmentName}/`)
    .load(
      ['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg'],
      function () {
        loading.value = false
        nameDefault.value = environmentName
      },
    )
}

//  初始化
const init = () => {
  loading.value = true

  //  相机 PerspectiveCamera(视野大小, 视图的长宽比, 近景， 远景)

  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000,
  )
  camera.position.set(0, 0, 300)
  camera.lookAt(scene.position)

  const renderer = new WebGL1Renderer({ antialias: true })
  // 背景颜色
  renderer.setClearColor(0xffffff)
  // 设置设备像素比
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  // 添加环境灯光

  scene.add(new AmbientLight(0xffffff, 2))

  environment.value?.appendChild(renderer.domElement)

  const planeGeometry = new PlaneGeometry(60, 20)
  // 材质 MeshBasicMaterial和MeshLambertMaterial的区别 MeshLambertMaterial它不会自己发光,而是需要一个光源照射
  const planeMaterial = new MeshLambertMaterial({ color: 0xcccccc })
  // 用来定位音源的网格模型
  const audioMesh = new Mesh(planeGeometry, planeMaterial)
  // 设置网格模型的位置
  audioMesh.position.set(0, 0, 300)
  scene.add(audioMesh)

  window.addEventListener('resize', () => onWindowResize())

  // 轨道控制器 鼠标转动

  let orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.autoRotateSpeed = 1
  orbitControls.minDistance = 50

  renderScene()
  function renderScene() {
    requestAnimationFrame(renderScene)
    renderer.render(scene, camera)
  }

  const onWindowResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  }
}

// 加载模型
const loadModel = () => {
  const loader = new GLTFLoader()
  loader.load(
    'model/littlegriffons_sparrowzosterops/scene.gltf',
    (gltf: any) => {
      // console.log(gltf)
      const model = gltf.scene
      model.position.set(0, 0, 0)
      model.rotation.set(0, 0, 0)
      model.scale.set(500, 500, 500)
      scene.add(model)
    },
    undefined,
    (error: any) => {
      // 模型加载失败后的回调函数
      console.error('Failed to load model', error)
    },
  )
}

onMounted(() => {
  // loadModel()
  init()
  changeName('')
})
</script>

<style scoped></style>
