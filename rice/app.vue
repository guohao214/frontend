<template>
  <div id="app">
    <!--<circle-progress :value="value" v-bind:circleProgressStyle="{margin:'50px'}"></circle-progress>-->
    <!--<circle-progress :value="value1" v-bind:circleProgressStyle="{margin:'50px'}"></circle-progress>-->

    <div class="header-banner">
      <img src="static/img/banner.jpg" alt="">
    </div>
    <transition name="fade">
      <div class="item-list" v-if="show">
        <item v-for="item in items" :item="item"></item>
      </div>
    </transition>
    <div class="t" v-clickoutside="notice">
      - RISO精选食材，轻松开启“米食“之旅 -
    </div>
    <div class="goods-list">
      <goods v-for="good in goods" :good="good"></goods>
    </div>

    <div class="riso-divide"><label class="footer">RISO</label></div>
  </div>
</template>

<script>
  import vue from 'vue'
  import item from './component/item/index.vue'
  import goods from './component/goods/index.vue'
  import circle from './component/cirleProgess.vue'
  import spinner from './spinner.vue'
  import outside from './clickOutside.js'

  vue.use(outside)

  vue.component('item', item)
  vue.component('goods', goods)
  vue.component('circleProgress', circle)
  vue.component('spinner', spinner)



  export default {
    methods: {
      notice() {
        alert('外面')
      },
      notice1() {
        alert(2)
      }
    },
    created: function () {
      var self = this
      var c = setInterval(function () {
        var rand = Math.ceil(Math.random() * 10)
        self.value += 1
        if (self.value>100) {
          self.value = 100
          clearInterval(c)
        }
      }, 100)
    },
    mounted: function () {
      this.$request.get('xx')
      setTimeout(() => this.show=!this.show, 1000)
      setTimeout(() => this.show=!this.show, 6000)
    },
    data() {
      return {
        show: false,
        value: 1,
        value1: 20,
        items: [
          {
            text: '米，日常生活中最常见的主食之一。略带香甜的味道，滑糯的口感，使得外表并不起眼的大米成为了千家万户饭桌上的主角，从不缺席。一碗热气腾腾的米饭，散发着淡淡的米香，总能完美融合不同的菜色，即使是简单的食材，也能让人为之惊艳。',
            pic: require('./static/img/p1.jpg')
          },
          {
            text: '两只鸡蛋，一碗米饭，便是日式鸡蛋盖饭的灵魂。爽滑的蛋汁搭配米饭的松软口感，最大程度保留了鸡蛋的香气，淋上几滴酱油，品尝一口便会让你欲罢不能。',
            pic: require('./static/img/p2.jpg')
          },
          {
            text: '除了盖饭，寿司也同样以米饭为基础，醋饭和鱼生的组合，简单的制作，却能在厨师的手中搭配出无限的可能，呈现出最自然的美味。这种简约美食哲学，或许是米饭最好的诠释。',
            pic: require('./static/img/p3.jpg')
          },
          {
            text: '除了米饭，大米还被人们通过不同形态的演变，制作成不同的美食。慵懒的早晨，一杯香味扑鼻的米浆，顺滑的口感，丰富的营养，能够为一天注入满满的活力。',
            pic: require('./static/img/p4.jpg')
          },
          {
            text: '此时的最佳搭配，非一份香醇酥脆的米饼莫属。一口米浆，一口米饼，两者在口中水乳交融，战斗值瞬间爆表，美好的一天从一顿早餐开始。',
            pic: require('./static/img/p5.jpg')
          },
          {
            text: '相比于元气满满的早餐，以米为原料酿酒，又彰显出大米“风韵犹存”的另一面。通透蒸煮、发酵、蒸馏等多重工序，酿制而成的白酒散发出一丝幽香，入口绵甜，回味无穷。',
            pic: require('./static/img/p6.jpg')
          },
          {
            text: '正所谓“大道至简，大味至淡”。以米为本，却不喧宾夺主，最终衬托出的是食材本味。搭配最新鲜的食材，选择最简单的烹饪方式，收获一份最自然的美味，才是米粒的魅力所在。',
            pic: ''
          }
        ],
        goods: [
          {
            pic: require('./static/img/p7.jpg'),
            name: 'RISO五常大米',
            desc: 'RISO CEO跨越2千公里只为寻得一粒米',
            skuId: 'c1f29f43740a4246b75caa1679608aea',
            productId: '719da716dba14e91b2b44616ef3d1dff'
          },
          {
            pic: require('./static/img/p8.jpg'),
            name: '兰皇鸡蛋',
            desc: '源自日本，可生食的鸡蛋',
            skuId: '239476ef3c3f48f2922d954534bcb196',
            productId: '0044b4f8270b4ebfb2b9a4421e50a6aa'
          },
          {
            pic: require('./static/img/p9.jpg'),
            name: '维瑞滋有机原味稻米饮料1L',
            desc: '美味无添加 素食主义的健康之选',
            skuId: '85f813c714b642f1b3145ce4186983c5',
            productId: '3c941fa3a1fc449fa122212b77e168be'
          },
          {
            pic: require('./static/img/p10.jpg'),
            name: '鳗鱼卷',
            desc: '米粒的香与生鱼片的鲜完美融合，满足你的味蕾',
            skuId: '',
            productId: ''
          },
//          {
//            pic: require('./static/img/p11.jpg'),
//            name: '川蒲米花糖 300g/袋',
//            desc: '香浓酥脆，一口下去满嘴留香',
//            skuId: '13',
//            productId: '999'
//          },
          {
            pic: require('./static/img/p12.jpg'),
            name: '李锦记天成一味特级鲜酱油150ml ',
            desc: '双重发酵，提炼出极致鲜香',
            skuId: '1649798b9b6e488399d06ebcd68299f9',
            productId: '383ad35298d944b7af1d0f4489df7270'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
html, body
  padding:0
  margin:0

  html
    100%
  body
    100%
 #app
  font-family: Helvetica, Tahoma, Arial, STXihei, SimSun, Heiti, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch
  -webkit-user-select none

.fade-enter-active, .fade-leave-active {
  transform translate(0, 0px)
  transition: all 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  transform translate(-1000px, 0px)
}
</style>

<style lang="stylus" scoped>
  @import "./index.styl"
</style>
