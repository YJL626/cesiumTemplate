<script setup lang="ts">
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted, watchEffect } from 'vue'

import { envs } from '@/env/envs'
import { CesiumController } from '@/controller/cesiumController'

import { Matrix4, Transforms, Cartesian3, HeadingPitchRoll, Model } from 'cesium'
import * as Cesium from 'cesium'
let url = '/assets/SampleData/models/CesiumAir/Cesium_Air.glb'
const initCesium = () => {
  const ctr = new CesiumController('cesiumContainer'),
    v = ctr.viewer,
    scene = v.scene,
    context = (v as any).context,
    camera = v.camera
  let count = 2000,
    space = 0.0005,
    centerLongitude = 40.008949,
    centerLatitude = 116.312857,
    height = 500,
    instances = [] as any,
    position1 = null as any
  console.log((Cesium as any).ModelInstanceCollection)

  const reset = () => {
    const gridSize = Math.sqrt(count)
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const longitude = centerLatitude + space * (x - gridSize / 2),
          latitude = centerLongitude + space * (y - gridSize / 2),
          hpr = new HeadingPitchRoll(Math.random(), Math.random(), Math.random()),
          scale = Math.random() + 0.5,
          position = (position1 = Cartesian3.fromDegrees(longitude, latitude, height)),
          modelMatrix = Transforms.headingPitchRollToFixedFrame(position, hpr)
        console.log(JSON.stringify(modelMatrix))

        Matrix4.multiplyByUniformScale(modelMatrix, 2, modelMatrix)
        console.log(JSON.stringify(modelMatrix))

        instances.push({ modelMatrix })
      }
    }
  }

  reset()
  console.log('instances', instances)
  scene.primitives.add(
    new (Cesium as any).ModelInstanceCollection({
      url: url,
      instances: instances
    })
  )
  /*  instances.forEach((item: any) => {
    scene.primitives.add(Model.fromGltf({ url, ...item }))
  }) */
  camera.flyTo({
    destination: position1
  })
  scene.debugShowFramesPerSecond = true
}
onMounted(initCesium)
</script>
<template>
  <div id="cesiumContainer"></div>
</template>
<style lang="scss" scope></style>
