import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faClose} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)
library.add(faClose)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router).mount('#app')
