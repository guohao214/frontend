/**
 * Created by GuoHao on 2017/7/23.
 */
(function() {
  var jQuery = window.$ = window.jQuery = function (selector) {
   return new jQuery.prototype.init(selector)
  }

  jQuery.fn = jQuery.prototype = {
    init: function (selector) {
      var elements = document.querySelectorAll(selector);
      Array.prototype.push.apply(this, elements)
      return this;
    },
    version: '0.0.1',
    length: 0,
    size: function () {
      return this.length
    },
    get: function (index) {
      return this[index];
    },
    css: function (propertyName) {
      var styles = window.getComputedStyle(this.get(0))
      console.log(styles[propertyName])
    }
  }

  jQuery.fn.init.prototype = jQuery.fn;

  jQuery.extends = jQuery.fn.extends = function () {

  }

})()