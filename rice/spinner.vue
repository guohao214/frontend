<template>
  <div class="spinner-wrapper" v-show="visible" ref="spinnerWrapper">
    <div class="spinner">
      <div class="center"></div>
    </div>
  </div>

</template>

<style lang="stylus" scoped>
  .spinner-wrapper
    width 100px
    height 100px
    display flex
    justify-content center
    align-items center
    border-radius 6px
    position fixed
    top:50%
    left 50%
    margin-left -50px
    margin-top: -50px
    background-color rgba(0,0,0,0.8)
    .spinner
      border 6px dotted #00A5E0
      width 50px
      height 50px
      border-radius 50%
      position relative
      animation circle 1s linear infinite
      animation-fill-mode both
      animation-direction:alternate
      display flex
      justify-content center
      align-items center
      .center
        width 20px;
        height 20px;
        /*border 2px solid #00A5E0*/
        border-radius 50%
        box-shadow 0px 0px 2px 6px #00A5E0
        animation shadow 1s ease-in-out infinite
        animation-fill-mode both
        animation-direction:alternate

  @keyframes circle {
    0% {
      transform rotate(-180deg)
    }

    100% {
      transform rotate(180deg)
    }
  }

  @keyframes shadow {
    0% {
      width 10px;
      height 10px;
      box-shadow 0px 0px 1px 3px rgba(#00A5E0, 0.5)
    }

    100% {
      width 20px;
      height 20px;
      box-shadow 0px 0px 2px 6px rgba(#00A5E0, 0.9)
    }
  }
</style>

<script>
  export default {
    name: 'spinner',
    data(){
      return {
        visible: true
      }
    }
  }
</script>
