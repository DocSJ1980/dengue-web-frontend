import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api/v1': "https://local.dharawalpindi.tk"
  //   }
  // },
  plugins: [react()],
  env: {
    file: '/config/.env'
  }
  // server: {
  //   /* https option must be turned on,so that you can use h2 */
  //   https: {
  //     key: "./config/cert/local-client-key.pem",
  //     cert: "./config/cert/local-client-csr.pem",
  //   },
  // }
})
