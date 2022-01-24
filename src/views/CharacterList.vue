<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="character_list__header">
          <h1 class="mb-4">Rick And Morty Character</h1>
          <p>Search character Name :</p>
          <input v-model.trim="searchName" type="text" class="form-control search-input" />
        </div>
      </div>
    </div>
    <div class="row" v-for="i in Math.ceil(showCharacter.length / 4)" :key="i">
      <div
        class="col-xl-3 mb-3"
        :key="idx"
        v-for="(character, idx) in showCharacter.slice((i - 1) * 4, i * 4)"
      >
        <CharacterItem
          :id="character.id"
          :name="character.name"
          :created="character.created"
          :image="character.image"
        />
      </div>
    </div>
    <button class="btn show_more" @click="showMore()">
      <span v-if="!loaded">
        Show More
      </span>
      <div v-else class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </button>
  </div>
</template>

<script>
import CharacterItem from "../components/CharacterItem.vue";
export default {
  data : () => ({
    loaded : false,
    searchName : ""
  }),
  components: {
    CharacterItem,
  },
  methods : {
    async showMore(){
      this.loaded = true;
      await this.$store.dispatch("showMore")
      this.loaded = false;
    }
  },
  computed: {
    showCharacter() {
      let itemList = this.$store.getters["showCharacter"];
      return itemList.filter(item => {
        return item.name.toLowerCase().includes(this.searchName.toLowerCase())
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/character-list.scss";
</style>