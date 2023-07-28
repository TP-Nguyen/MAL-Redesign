import { APIConfig } from './src/api/APIconfig';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/ 
export default defineConfig({
  plugins: [vue()],
  css: { preprocessorOptions: {
     scss: {
       additionalData: `@import "./src/scss/_index.scss";`, 
      }, 
    }, 
  },
  server: {  
    proxy: {
      '/anime': {
        target: APIConfig.URL,
        headers:{'X-MAL-CLIENT-ID' : APIConfig.TOKEN_VALUE},
        changeOrigin: true,
        secure: false,      
        ws: true,
      }, 
      '/manga': {
        target: APIConfig.URL,
        headers:{'X-MAL-CLIENT-ID' : APIConfig.TOKEN_VALUE},
        changeOrigin: true,
        secure: false,      
        ws: true,
      }
    }
  }
})
