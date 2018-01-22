<template>
  <section class="ribao-content">
    <h1>{{detail.title}}</h1>
    <p>{{detail.description}}</p>
    <template v-for="(con, index) in detail.links">
      <a :href="con.url" class="detail-item">
        <b>{{con.title + '：'}}</b>{{con.description}}
      </a>
    </template>
  </section>
</template>

<style lang="scss">
  .ribao-content{
    padding: 0 15px;
    .detail-item{
      display: block;
      padding-bottom: 15px;
    }
  }
</style>

<script>
import axios from 'axios'

export default {
  layout: 'detail',
  async asyncData ({params, env, error}) {
    let {data} = await axios.get('http://localhost:3000/api/daily_info/' + params.id)
    return {detail: data.data}
  }
}
</script>
