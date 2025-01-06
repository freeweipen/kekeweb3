// https://vitejs.dev/config/
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


export default defineConfig(({ command, mode }) => {
  //获取各种环境下的对应的变量
  let env = loadEnv(mode, process.cwd());
  return {
    publicPath: 'http://www.kekechat.com/',
    base: 'http://www.kekechat.com/',
    plugins: [vue(),


    ],
    resolve: {
      alias: {
        "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    //代理跨域
    server: {
      host: 'www.kekechat.com', // 将 'your-domain.com' 替换为您要使用的域名  
      port: 80, // 可以根据需要更改端口  
      strictPort: true, // 如果端口被占用，则不会随机选择空闲端口  
      open: true, // 启动时自动打开浏览器  
      proxy: {
        '/api': {
          //获取数据的服务器地址设置 
          target: 'http://service.kekechat.com:8080',
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path) => path.replace(/^\/api/, '/api'),
           // 这里可以添加跨域的额外配置，例如 headers  
        configure: (proxy) => {  
          proxy.on('proxyReq', (proxyReq, req, res) => {  
            // 添加特定域的 CORS 规则  
            proxyReq.setHeader('Access-Control-Allow-Origin', 'http://www.kekechat.com'); // 允许的域名  
            proxyReq.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  
            proxyReq.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  
          });  
        }  



        }
      }
    }
  }
})
