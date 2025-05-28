import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  // server:{
  //   proxy:{
  //     '/api':{
  //       target:'http://localhost:8080',
  //       changeOrigin:true,
  //       secure:false
  //     }
  //   }
  // }
})

//     "scripts": {
//   "full:build": "npm run build --prefix client && mkdir -p server/client/dist && xcopy client\\dist\\* server\\client\\dist /E /Y"
// }