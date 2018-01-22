<!-- 前端日报渲染的模板 -->
<template>
  <nuxt-link class="rbcell" :to="'/ribao/' + dataId">
    <div class="rb-main">
      <h3>{{dataTitle}}</h3>
      <p>{{dataContent}}</p>
    </div>
    <i class="rb-des"></i>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['dataId', 'dataTitle', 'dataContent']
  }
</script>

<style lang="scss">
  .rbcell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
    position: relative;
    .rb-main{
      flex: 1;
      padding-right: 15px;
    }
    i:after{
      border: 2px solid #c8c8cd;
      border-bottom-width: 0;
      border-left-width: 0;
      content: " ";
      top: 50%;
      right: 15px;
      position: absolute;
      width: 5px;
      height: 5px;
      -webkit-transform: translateY(-50%) rotate(45deg);
      transform: translateY(-50%) rotate(45deg);
    }
  }
</style>
