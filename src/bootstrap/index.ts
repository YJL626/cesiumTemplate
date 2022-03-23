import { App } from 'vue'
import { initVuePlugins } from './initVuePlugins'

import './initGlobalCss'
import { initCesiumBaseEnv } from './initCesiumBaseEnv'
export const init = (app: App<Element>): void => {
  initVuePlugins(app)
  initCesiumBaseEnv()
}
