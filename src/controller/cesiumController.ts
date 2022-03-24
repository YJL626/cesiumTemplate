import { createWorldTerrain, HeadingPitchRoll, Model, Transforms, Viewer, Cartesian3 } from 'cesium'

export class CesiumController {
  #viewer: Viewer
  #scene: Viewer['scene']
  get viewer() {
    return this.#viewer
  }
  constructor(elem: string) {
    this.#viewer = this.#init(elem)
    this.#scene = this.#viewer.scene
    // this.#createModel('/assets/SampleData/models/CesiumAir/Cesium_Air.glb')
  }
  #init(elem: string) {
    return new Viewer(elem, {
      terrainProvider: createWorldTerrain()
    })
  }
  #createModel(url: string, height = 1500) {
    const v = this.#viewer,
      scene = this.#scene,
      hpr = new HeadingPitchRoll(0, 0, 0),
      origin = Cartesian3.fromDegrees(116.399957, 39.925228, height),
      modelMatrix = Transforms.headingPitchRollToFixedFrame(origin, hpr),
      model = Model.fromGltf({
        url,
        modelMatrix,
        minimumPixelSize: 200
      })
    const model1 = scene.primitives.add(model)

    v.camera.flyTo({
      destination: origin
    })
  }
}
