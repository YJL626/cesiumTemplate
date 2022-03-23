interface ImportMetaEnv {
  readonly VITE_APP_CESIUM_TOKEN: string
  readonly VITE_APP_CESIUM_ASSETS_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
