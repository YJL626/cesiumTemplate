import { envs } from '@/env/envs'
import { Ion } from 'cesium'

export const initCesiumBaseEnv = () => {
  window.CESIUM_BASE_URL = '/cesium'
  Ion.defaultAccessToken = envs.CESIUM_TOKEN
}
