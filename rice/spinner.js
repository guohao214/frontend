import Vue from 'vue'
import spinner from './spinner.vue'
let spinnerClass = Vue.extend(spinner)
let instance

export default {
  open() {
    if (!instance) {
      instance = new spinnerClass({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el);

      Vue.nextTick(() => {
        instance.visible = true;
      });
    }
  },
  close() {
    if (instance) {
      instance.visible = false;
    }
  }
}
