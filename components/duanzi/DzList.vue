<template>
  <section style="background-color: #f2f2f2">
    <div class="list-item">{{dataContent}}</div>
  </section>
</template>

<style lang="scss">
  .list-item{
    padding: 10px;
    background-color: #fff;
  }
  .list-item:not(:first-child){
    margin-top: 10px;
  }
</style>
<script>
export default {
  props: ['dataContent']
}
</script>
