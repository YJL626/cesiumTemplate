<script setup lang="ts">
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted, watchEffect } from 'vue'

import { envs } from '@/env/envs'
import { CesiumController } from '@/controller/cesiumController'

const initCesium = () => {
  const cesiumCtr = new CesiumController('cesiumContainer')

  // Add Cesium OSM Buildings, a global 3D buildings layer.
  //  const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings())
  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  /* viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(112.17907, 34.51523, 200),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-15.0),
    },
  }) */
}
onMounted(initCesium)
</script>
<template>
  <div id="cesiumContainer"></div>
</template>
<style lang="scss" scope></style>
