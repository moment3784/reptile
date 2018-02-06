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
    } catch (error) {
      console.error('日报数据获取报错：' + error)
    }
    if (!ribao || ribao.data.length === 0) {
      console.log('源数据获取失败！')
    }
    return {
      ribao: ribao.data
    }
  },
  components: {
    TplRibao
  }
}
</script>

