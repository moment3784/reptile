<template>
  <section>
    <template v-for="(ritem, rindex) in ribao.data">
      <tpl-ribao :dataId="ritem.id" :dataTitle="ritem.title" :dataContent="ritem.description" />
    </template>
  </section>
</template>

<script>
import axios from 'axios'
import TplRibao from '~/components/TplRibao'
export default {
  name: 'ribao',
  layout: 'default',
  cache: {
    max: 1000,
    maxAge: 900000
  },
  async asyncData ({ params, error }) {
    let ribao
    try {
      ribao = await axios.get('http://localhost:3000/api/daily_list')
      // ribao = await axios.get('http://localhost:3000/test')
    } catch (error) {
      console.error('日报数据获取报错：' + error)
    }
    // if (ribao.code !== '200') return
    return {
      ribao: ribao.data
    }
  },
  components: {
    TplRibao
  }
}
</script>

