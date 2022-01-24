import { createStore } from 'vuex'

export default createStore({
  state: {
    charactersList : [],
    page : 1,
    charactersId : ""
  },
  mutations: {
    getCharacters(state , payload){
      for(let i in payload){
        state.charactersList.push(payload[i])
      }
    },
    getCharactersId(state , payload){
      state.charactersId = payload
    }
  },
  actions: {
    async getCharacters(context){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${context.state.page}`)
      const responseData = await response.json()
      context.commit("getCharacters" , responseData.results)
    },
    async getCharactersId(context , payload){
      context.state.charactersId = ''
      const response = await fetch(`https://rickandmortyapi.com/api/character/${payload}`)
      const responseData = await response.json()
      console.log(responseData);
      context.commit("getCharactersId" , responseData)
    },
    async showMore(context){
      if(context.state.page < 42){
        context.state.page++
      }
      await context.dispatch("getCharacters")
    }
  },
  getters : {
    showCharacter(state){
      return state.charactersList
    },
    showCharactersId(state){
      return state.charactersId
    }
  },
  modules: {
  }
})
