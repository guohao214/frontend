/**
 * 请求
 */
import axios from "axios";
import spinner from './spinner.js';
import jsonpP from 'jsonp-p';

let trim = function ($str) {
  if (!$str)
    return $str;

  try {
    if (typeof $str != 'string')
      $str = $str.toString();
  } catch (e) {
    $str = ''
  }

  return $str.replace(/(^\s*)|(\s*$)/g, '')
}

let jsonDecode = function ($str) {
  try {
    return JSON.parse($str)
  } catch (e) {
    return {}
  }
}

let jsonEncode = function ($jsonObj) {
  try {
    return JSON.stringify($jsonObj)
  } catch (e) {
    return "{}"
  }
}

function _before() {
  spinner.open()
}

function _after() {
  setTimeout(function () {
    spinner.close()
  }, 2000)
}

function handlerSuccess(response) {
  _after()
  response.obj = trim(response.obj);
  console.log(response)
  if (response.resCode !== '1000000') {
    return Promise.reject((response.obj && response.obj != '' && response.obj != 'null')
      ? jsonDecode(response.obj) : response.msg)
  }
  else
    return Promise.resolve((response.obj != '') ? jsonDecode(response.obj) : {})
}

function handlerError(error) {
  _after()
  console.log(error)
  return Promise.reject((error.response && error.response.data) || error)
}

export default {
  install: function (Vue, options) {
    if (this.installed)
      return;

    if (!options)
      options = {};

    this.request = axios.create(options);
    this.options = options;
    this._init();

    Vue.prototype.$request = this;
  },
  _init: function () {
    this.request.interceptors.request.use(
      config => {
        _before()
        return config
      },
      error => Promise.reject(error)
    );

    this.request.interceptors.response.use(
      response => {
        response = response.data
        return handlerSuccess(response)
      },
      error => {
        return handlerError(error)
      }
    );
  },
  get: function (url, data) {
    return this.request.get(url, data)
  },
  post: function (url, data) {
    return this.request.post(url, data)
  },
  jsonp: function (url, data) {
    _before()
    let params = this.options._addQueryString(data)
    let requestUrl = this.options.baseURL + url + '?data=' + jsonEncode(params);
    let cbPrefix = 'risoCB' + (new Date()).getTime();

    return jsonpP(requestUrl, {prefix: cbPrefix, timeout: 10000}).promise
      .then((data) => {
          let _data = this.options.transformResponse(data)
          return handlerSuccess(_data)
        }
      )
      .catch((error) => handlerError(error))
  }
}

export let interruptHandingFun = {
  '1000000666': ''
}
