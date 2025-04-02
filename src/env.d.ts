/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FTP_URL: string
  readonly VITE_FTP_USER: string
  readonly VITE_FTP_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}