<template>
  <div class="item">
    <div class="text">{{ item.text }}</div>
    <div class="pic">
      <img v-bind:src="item.pic" alt="" v-if="item.pic.length>0">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../../../../../../util/mixin.styl"
  .item
    width 100%
    .text
      letter-spacing px2rem(2.28)
      font-size: px2rem(32)
      color: #151515;
      line-height: px2rem(56)
      margin-top px2rem(50)
    .pic
      margin-top px2rem(50)
      width 100%
      img
        width 100%
</style>

<script>
  export default {
    name: 'item',
    props: ['item']
  }
</script>
