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
        <div
          v-infinite-scroll="listLoadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
          >
          <template 
            v-if="dzList != undefined" 
            v-for="(dzl, index) in dzList"
            >
            <dz-list :dataContent="dzl.digest"></dz-list>
          </template>
        </div>
        <div class="loading-bg">
          <mt-spinner color="#A52A2A" type="fading-circle"></mt-spinner>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="dz-list2">
        
          <template v-if="dzPic != undefined" v-for="(dzp, index) in dzPic">
            <dz-picture :dataTitle="dzp.title" :dataContent="dzp.thumburl" ></dz-picture>
          </template>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="dz-list3">
        <div
          v-infinite-scroll="funLoadMore"
          infinite-scroll-disabled="funLoading"
          infinite-scroll-distance="10"
          infinite-scroll-listen-for-event="checkLoad"
          >
          <template v-if="dzFun != undefined" v-for="(dzf, index) in dzFun">
            <dz-picture :dataTitle="dzf.title" :dataContent="dzf.img" ></dz-picture>
          </template>
        </div>
        <div class="loading-bg">
          <mt-spinner color="#A52A2A" type="fading-circle"></mt-spinner>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </section>
</template>

<script>
import DzList from '~/components/duanzi/DzList'
import DzPicture from '~/components/duanzi/DzPicture'
// import DzFun from '~/components/duanzi/DzFun'
import axios from 'axios'

export default {
  async asyncData ({ params, error }) {
    try {
      let [dzList, dzPic, dzFun] = await Promise.all([
        axios.get('http://localhost:3000/api/joke_list/1'),
        axios.get('http://localhost:3000/api/joke_img'),
        axios.get('http://localhost:3000/api/joke_photo/1')
      ])
      console.log(dzList)
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
      active: 'dz-list1',
      dzList: [],
      dzPic: [],
      dzFun: [],
      listId: 1,
      funId: 1,
      loading: false,
      funLoading: true
    }
  },
  watch: {
    active (val) {
      if (val === 'dz-list3') {
        this.funLoading = false
      } else {
        this.funLoading = true
      }
      if (val === 'dz-list1') {
        this.loading = false
      } else {
        this.loading = true
      }
    }
  },
  methods: {
    tab (list) {
      this.active = list
    },
    checkLoad (ev) {
      console.log('查看情况:::', ev)
    },
    listLoadMore () {
      console.log('loadMore')
      this.loading = true
      this.listId++
      axios.get('http://localhost:3000/api/joke_list/' + this.listId).then((res) => {
        this.dzList = this.dzList.concat(res.data.data)
        this.loading = false
      }).catch((e) => {
        console.error(e)
      })
    },
    funLoadMore () {
      console.log('funLoadMore')
      this.funLoading = true
      this.funId++
      axios.get('http://localhost:3000/api/joke_photo/' + this.funId).then((res) => {
        this.dzFun = this.dzFun.concat(res.data.data)
        this.funLoading = false
      }).catch((e) => {
        console.error(e)
      })
    }
  },
  components: {
    DzList,
    DzPicture
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
  .loading-bg{
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
</style>
