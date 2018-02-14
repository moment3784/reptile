<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <mt-spinner type="fading-circle"></mt-spinner>
    <!-- <keep-alive include="ribao"> -->
    <!-- <ri-bao v-show="false"></ri-bao> -->
    <!-- <duan-zi></duan-zi> -->
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RiBao from './ribao'
import DuanZi from './duanzi'

export default {
  data () {
    return {
      list: [],
      allLoaded: true,
      loading: false
    }
  },
  computed: mapState([
    'counter'
    // viewId,
  ]),
  components: {
    RiBao,
    DuanZi
  },
  mounted () {
    for (var i = 0; i < 100; i++) {
      this.list.push(i)
    }
    // alert(this.$store.state.counter)
  },
  methods: {
    loadMore () {
      console.log('滚动加载！')
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2500)
    },
    loadTop () {
      console.log('loadTop')
      // 加载更多数据
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      console.log('loadBottom--------------------------')
      // 加载更多数据
      this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>
<!-- <template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
 -->