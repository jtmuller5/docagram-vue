import { createApp } from 'vue'
import App from './Sidepanel.vue'
import { setupApp } from '~/shared/logic/common-setup'
import '../../app/styles'

const app = createApp(App)
setupApp(app)
app.mount('#app')
