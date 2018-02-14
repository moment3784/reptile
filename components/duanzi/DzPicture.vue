<template>
  <section style="background-color: #f2f2f2">
    <!-- <template v-for="(dzl,index) in dataContent"> -->
      <div class="pic-item">
        <h3>{{dataTitle}}</h3>
        <img v-lazy="dataContent" alt="">
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
      background-color: #f2f2f2;
    }
  }
  .pic-item:not(:first-child){
    margin-top: 10px;
  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>
<script>
export default {
  props: ['dataTitle', 'dataContent']
}
</script>