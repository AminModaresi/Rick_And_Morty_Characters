<template>
    <router-view></router-view>
</template>
<script>
export default {
  methods : {
    getCharacters(){
      this.$store.dispatch("getCharacters")
    }
  },
  mounted() {
    this.getCharacters()
  }
}
</script>
<style lang="scss">
  @import "./assets/sass/app.scss";
</style>
