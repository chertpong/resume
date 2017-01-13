/**
 * Created by krit on 1/13/2017.
 */
import Home from './components/Home.vue'
import ContactMe from './components/ContactMe.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/contact-me', component: ContactMe }
]

export default routes
