<!-- 用于详细页面的layout -->
<template>
  <section>
    <mt-header title="">
      <router-link to="/ribao" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <nuxt/>
    <fly-top></fly-top>
  </section>
</template>
<script>
import FlyTop from '~/components/FlyTop.vue'

export default {
  components: {
    FlyTop
  }
}
</script>
