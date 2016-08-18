<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-if="notice">{{ noticeMessage }} </h1>
    <ul>
      <li v-for="(index, item) in todoList" v-bind:class="{finised: item.isFinised}" @click="doSome"> {{ index }} - {{ item.title }}</li>
    </ul>

    <a v-bind:href="goBaidu">baidu</a>
    <a href="{{ goBaidu }}">百度</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      notice: true,
      noticeMessage: '这是什么东西',
      goBaidu: 'http://www.baidu.com',
      todoList: [{ title: 'one', isFinised: false }, { title: 'two', isFinised: true }]
    }
  },
  methods: {
    doSome: function (e) {
      console.log(e)
      window.alert(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}

.finised {
  color:red
}
</style>
