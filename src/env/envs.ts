const CESIUM_TOKEN = import.meta.env.VITE_APP_CESIUM_TOKEN || '',
  CESIUM_ASSETS_BASE_URL = import.meta.env.VITE_APP_CESIUM_ASSETS_BASE_URL,
  envs = {
    CESIUM_TOKEN,
    CESIUM_ASSETS_BASE_URL,
  }
console.log(envs)

export { envs }
