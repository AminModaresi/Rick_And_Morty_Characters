<template>
  <router-link class="character__item" :to="routerAddres">
      <div class="character__item_img">
        <img :src="image" class="w-100" alt="" />
      </div>
      <div class="character__item_body">
        <p class="character__item_body_title">name : {{ name }}</p>
        <p class="character__item_body_text">created date : {{ created }}</p>
      </div>
  </router-link>
</template>
<script>
export default {
    props : ['image' , 'name' , 'created' , 'id'],
  computed: {
    routerAddres() {
      return {name : "character-item" , params: {id : this.id}};
    },
  },
};
</script>
<style lang="scss" scoped>
  @import "../assets/sass/character-item.scss";
</style>