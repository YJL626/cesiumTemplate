import { createWorldTerrain, Viewer } from 'cesium'

export class CesiumController {
  #viewer: Viewer
  constructor(elem: string) {
    this.#viewer = this.#init(elem)
  }
  #init(elem: string) {
    const v = new Viewer(elem, {
      terrainProvider: createWorldTerrain()
    })
    return v
  }
  // #createModel(url: string, height = 1000) {}
}
