<template>
  <div class="goods">
    <div class="pic" @click="jumpToDetail(good.productId)">
      <img v-bind:src="good.pic" alt="" v-bind:ref="good.productId">
    </div>
    <div class="container">
      <div class="name"> {{ good.name }}</div>
      <div class="desc">{{ good.desc }}</div>
      <div class="add-to-cart" v-if="good.skuId" @click="addToCart(good.skuId,good.productId, $event)"></div>
      <div class="offline" v-else="!good.skuId"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../../../../../../util/mixin.styl"
  .goods
    background-color #FAFAFA;
    height px2rem(380)
    margin px2rem(30) 0
    position relative
    .pic
      width px2rem(320)
      position absolute
      left px2rem(30)
      top px2rem(30)
      img
        width 100%
    .container
      position absolute
      height px2rem(320)
      width px2rem(350)
      left px2rem(370)
      top px2rem(30)
      .name
        font-size: px2rem(28)
        color: #333333;
        font-weight bold
        line-height px2rem(40)
        margin-top px2rem(10)
      .desc
        font-size px2rem(28)
        color #000
        line-height px2rem(40)
        margin-top px2rem(25)
      .add-to-cart
        width px2rem(80)
        height px2rem(40)
        bg-image('../../asset/addCart')
        position absolute
        bottom 0
        right 0
      .offline
        font-size: px2rem(28)
        color: #666666;
        letter-spacing: 0;
        position absolute
        bottom px2rem(30)
        left 0
        &:before
          content '请至线下门店品尝'
</style>

<script>
  import {RISOBridge, RISOBridgeInit} from '../../../../../lib/bridge/RISOBridge'
  export default {
    name: 'good',
    props: ['good'],
    created: function () {
      RISOBridgeInit(function () {
        console.log('bridge init complete')

        // 设置标题
        RISOBridge.setToolBarTitle('简单的米粒 戒不掉的美味')
        RISOBridge.showShareShoppingCar(1)
      })
    },
    methods: {
      addToCart: function (skuId, ref, event) {
        // 创建一个div
        //IMG
        var img = this.$refs[ref];
        var imgP = img.cloneNode()
        var imgParent = img.parentNode

        console.log(window.getComputedStyle(imgParent))


        var top = imgParent.getBoundingClientRect().top
        if (top > 0)
          top = -(top) + -100 + 'px'

        var right = imgParent.getBoundingClientRect().right
        if (right > 0)
          right = -(right) + 'px'

        var cc = imgParent.cloneNode()
        cc.appendChild(imgP)
        cc.className = 'clonePic'
        cc.style.position = 'absolute'
        cc.style.right = '0px'
        cc.style.top = '0px'
        cc.style.transition = 'all 0.8s ease-out'
        cc.style.width = window.getComputedStyle(imgParent).width
        cc.style.height = window.getComputedStyle(imgParent).height
        cc.style.border = '3px solid red'

        imgParent.appendChild(cc)

        setTimeout(function () {
          cc.style.top = top
          cc.style.right = right
          cc.style.width = '1rem'
          cc.style.height = '1rem'
          cc.style.opacity = '0'

          setTimeout(function () {
            imgParent.removeChild(cc)
          }, 1000)
        }, 500)


        let goods = document.createElement('div');
        goods.style.position = 'fixed'

        let target = event.target

//        alert(target.parentElement.innerHTML)


        RISOBridge.addCommodityInShoppingCar(skuId)
      },
      jumpToDetail: function (productId) {
        if (!productId)
          return

        RISOBridge.jumpCommodityDetails('BL0301', productId)
      }
    }
  }
</script>
