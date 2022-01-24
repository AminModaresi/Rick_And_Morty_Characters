import { createRouter, createWebHistory } from 'vue-router'
import CharacterList from "../views/CharacterList.vue";
import CharacterDetail from "../views/CharacterDetail.vue"
const router = createRouter({
  history: createWebHistory(),
  routes : [
    {path : "/" , redirect : '/character-list'},
    {name : "character-list" , path : '/character-list' , component : CharacterList},
    {name : "character-item" , path : "/character/:id" , props : true , component : CharacterDetail}
  ]
})

export default router
