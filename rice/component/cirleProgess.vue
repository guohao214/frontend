<template>
  <div class="circle-progress" v-bind:style="circleProgressStyle">
    <div class="circle-progress-text" v-bind:style="circleProgressTextStyle"
         ref="circleProgressText">{{ value }}%</div>
    <svg v-bind:width="width" v-bind:height="width">
      <circle v-bind:cx="circleWidth" v-bind:cy="circleWidth" v-bind:r="circleWidth-circleStrokeWidth"
              v-bind:stroke-width="circleStrokeWidth" stroke="#D1D3D7"
              fill="none"></circle>
      <circle v-bind:cx="circleWidth" v-bind:cy="circleWidth" v-bind:r="circleWidth-circleStrokeWidth "
              v-bind:stroke-width="circleStrokeWidth" stroke="#00A5E0"
              fill="none"
              v-bind:transform="circleTransform" stroke-dasharray="0 0" ref="subCircle"></circle>
    </svg>
  </div>
</template>

<style lang="stylus" scoped>
  .circle-progress {
    position: relative;
    margin: 10px;
  }

  .circle-progress-text {
    position: absolute;
    width: 100px;
    left: 0;
    top: 37.5px;
    display: block;
    font-size: 25px;
    text-align: center;
    color black
  }
</style>

<script>




  export default {
    name: 'circleProgress',
    computed: {
      circleWidth: function () {
        return this.width / 2
      },
      circleTransform: function () {
        return `matrix(0,-1,1,0,0,${this.width})`
      },
      circleProgressTextStyle: function () {
        return {
          width: this.width + 'px',
          top: (this.width - 25) / 2 + 'px'
        }
      }
    },
    props: {
      value: {
        type: Number,
        default: 0
      },
      width: {
        type: Number,
        default: 100
      },
      circleProgressStyle: {
        default: function () {
          return {}
        },
        type: Object
      },
      circleStrokeWidth: {
        default: 5,
        type: Number
      }
    },
    mounted: function () {
      this.start()
    },
    methods: {
      start: function () {
        let subCircle = this.$refs.subCircle
        let percent = this.value / 100, perimeter = Math.PI * 2 * this.width / 4;
        subCircle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1 - percent));
      }
    },
    watch: {
      value() {
        this.start()
      }
    }
  }
</script>
