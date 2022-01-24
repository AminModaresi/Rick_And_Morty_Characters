<template>
  <div class="item-center" v-if="showItem">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-xl-8">
          <div class="character__detail">
            <h1 class="text-center mb-5">
              {{ showItem.name }}
            </h1>
            <div class="row justify-content-center align-items-center">
              <div class="col-md-6 col-lg-5">
                <img
                  class="character__detail_img w-md-100"
                  :src="showItem.image"
                  alt=""
                />
              </div>
              <div class="col-md-5 col-lg-5">
                <div class="character__detail_content">
                  <p>name : {{ showItem.name }}</p>
                  <p>gender : {{ showItem.gender }}</p>
                  <p>species : {{ showItem.species }}</p>
                  <p>status : {{ showItem.status }}</p>
                </div>
              </div>
            </div>
            <router-link to="/character-list">Back To List</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  methods: {
    findCharacter() {
      this.$store.dispatch("getCharactersId", this.id);
    },
  },
  computed: {
    showItem() {
      return this.$store.getters["showCharactersId"];
    },
  },
  created() {
    this.findCharacter();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/character-detail.scss";
</style>