<template>
  <section style="background-color: #f2f2f2">
    <!-- <template v-for="(dzl,index) in dataContent"> -->
      <div class="pic-item">
        <h3>{{dataTitle}}</h3>
        <img :src="dataContent" alt="">
      </div>
    <!-- </template> -->
  </section>
</template>

<style lang="scss">
  .pic-item{
    padding: 10px;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    img{
      width: 100%;
      max-width: 100%; 
    }
  }
  .pic-item:not(:first-child){
    margin-top: 10px;
  }
</style>
<script>
export default {
  props: ['dataTitle', 'dataContent']
}
</script>