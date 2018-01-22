<template>
  <header class="head">
    <nuxt-link class="head-turn" to="/ribao">技术</nuxt-link>
    <nuxt-link class="head-turn" to="/duanzi">段子</nuxt-link>
    <nuxt-link class="head-turn" to="/music">音乐</nuxt-link>
  </header>
</template>

<style lang="scss">
  .head {
    display: flex;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    .head-turn {
      flex: auto;
      text-align: center;
      text-decoration: none;
      background-color: #fff;
      &:hover{
        color: #f00;
        box-shadow: 0 0 30px #d5d5d5 inset;
      }
    }
  }
</style>

<script>
export default {
  fetch ({ store }) {
    store.commit('tabView', 1)
  },
  data () {
    return {
      tabId: '1'
    }
  },
  watch: {
    tabId (val) {
      console.log('watch:' + val)
      this.$store.commit('tabView', val)
    }
  }
}
</script>
