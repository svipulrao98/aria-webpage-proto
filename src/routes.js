import homePage from './components/homePage.vue'
import ourProjects from './components/ourProjects.vue'

export default[
  {path: '/', component: homePage},
  {path: '/projects/:id', component: ourProjects}
]
