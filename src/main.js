import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Importamos el archivo de estilos de la carpeta de estilos
import './styles/styles.scss'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
