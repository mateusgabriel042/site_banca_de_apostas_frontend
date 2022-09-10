import { createApp } from 'vue'
//import { Vue } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faSearch, faClose, faUser, faPhone,
	faKey, faLock, faBarChart, faArrowRight,
	faClock, faCaretRight, faRefresh, faUserCircle,
	faHome, faNavicon, faCreditCard, faEdit,
	faMoneyBillWave, faSignOut,
	faGlobeAmericas, faIdCard, faMobileScreen
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import store from "./store";
library.add(faSearch)
library.add(faClose)
library.add(faUser)
library.add(faPhone)
library.add(faKey)
library.add(faLock)
library.add(faBarChart)
library.add(faArrowRight)
library.add(faFacebook)
library.add(faInstagram)
library.add(faClock)
library.add(faCaretRight)
library.add(faRefresh)
library.add(faUserCircle)
library.add(faHome)
library.add(faNavicon)
library.add(faCreditCard)
library.add(faEdit)
library.add(faMoneyBillWave)
library.add(faSignOut)
library.add(faGlobeAmericas)
library.add(faIdCard)
library.add(faMobileScreen)

/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { FontAwesomeIcon, App }
})*/

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router).mount('#app')
