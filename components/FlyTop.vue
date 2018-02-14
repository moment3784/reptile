<template>
  <div class="iconWrap" @click="handleClick">
    <div class="arrow-up icon"></div>  
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick () {
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    }
  }
</script>

<style>
.iconWrap{
  position: fixed;
  bottom: 40px;
  right: 25px;
  background-color: #f2f2f2;
  display: inline-block;
  width: 21px;
  height: 21px;
  padding: 8px;
  border: solid 1px #ccc;
  z-index: 999;
  opacity: .5;
}
.iconWrap:active {
  opacity: 1;
}
.arrow-up.icon {
  color: #000;
  position: absolute;
  margin-left: 10px;
  margin-top: 3px;
  width: 1px;
  height: 16px;
  background-color: currentColor;
}
.arrow-up.icon:before {
  content: '';
  position: absolute;
  left: -5px;
  top: 1px;
  width: 10px;
  height: 10px;
  border-top: solid 1px currentColor;
  border-right: solid 1px currentColor;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
</style>
