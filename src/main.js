import './assets/main.css'
import { createApp } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faChartLine, faChevronRight, faEllipsisVertical, faMagnifyingGlass,
         faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

library.add(
    faCircleCheck, 
    faChartLine,
    faGear,
    faChevronRight,
    faEllipsisVertical,
    faMagnifyingGlass,
    faTrashCan,
    faPlus
);

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
