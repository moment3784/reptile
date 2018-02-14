<template>
  <div class="list-item">
    {{dataContent}}
  </div>
</template>

<style lang="scss">
  .list-item{
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #ccc; 
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
