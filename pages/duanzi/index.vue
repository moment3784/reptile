<!-- 段子 3g.163.com -->
<template>
  <section>
    <div class="nav">
      <mt-button type="default" size="small" @click="tab('dz-list1')">段子列表</mt-button>
      <mt-button type="default" size="small" @click="tab('dz-list2')">段子图片</mt-button>
      <mt-button type="default" size="small" @click="tab('dz-list3')">搞笑图片</mt-button>
    </div>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="dz-list1">
        <template v-for="(dzl, index) in dzList">
          <dz-list :dataContent="dzl.digest"></dz-list>
        </template>
      </mt-tab-container-item>
      <mt-tab-container-item id="dz-list2">
        <template v-for="(dzp, index) in dzPic">
          <dz-picture :dataTitle="dzp.title" :dataContent="dzp.thumburl" ></dz-picture>
        </template>
      </mt-tab-container-item>
      <mt-tab-container-item id="dz-list3">
        <template v-for="(dzf, index) in dzFun">
          <dz-picture :dataTitle="dzf.title" :dataContent="dzf.img" ></dz-picture>
        </template>
      </mt-tab-container-item>
    </mt-tab-container>
  </section>
</template>

<script>
import DzList from '~/components/duanzi/DzList'
import DzPicture from '~/components/duanzi/DzPicture'
import DzFun from '~/components/duanzi/DzFun'
import axios from 'axios'

export default {
  async asyncData ({ params, error }) {
    try {
      let [dzList, dzPic, dzFun] = await Promise.all([
        axios.get('http://localhost:3000/api/joke_list/1'),
        axios.get('http://localhost:3000/api/joke_img'),
        axios.get('http://localhost:3000/api/joke_photo/1')
      ])
      return {
        dzList: dzList.data.data,
        dzPic: dzPic.data.data,
        dzFun: dzFun.data.data
      }
    } catch (error) {
      console.error('日报数据获取报错：' + error)
    }
  },
  data () {
    return {
      active: 'dz-list3'
    }
  },
  methods: {
    tab (list) {
      this.active = list
    }
  },
  components: {
    DzList,
    DzPicture,
    DzFun
  }
}
</script>
<style lang="scss">
  .nav{
    padding: 10px;
    button:not(:first-child){
      margin-left: 5px;
    }
  }
</style>
