import jQuery from 'jquery'

const httpGet = function() {
  // 根据不同请求设置成功状态码
  const getStatusCode = function (type) {
    let code = 200
    switch (type) {
      case 'get':
      case 'put':
      case 'post':
        code = 200
        break
      case 'delete':
        code = 204
        break
    }
    return code
  }
  const jQueryAjax = function (urlKey, JsonParam, success, failed, type = 'post', contentType = 'x-www-form-urlencoded') {
    jQuery.ajax({
      url: '/api/' + urlKey,
      type,
      data: JsonParam,
      contentType: `application/${contentType};charset=UTF-8`,
      dataType: 'json',
      success: (data) => {
        success(data)
      },
      error: function (data) {
        failed(data)
      }
    })
  }
  return {
    $get (url, params) {
      return new Promise((resolve, reject) => {
        jQueryAjax(url, params, resolve, reject, 'get')
      })
    },
    $post (url, params, contentType = 'x-www-form-urlencoded') {
      return new Promise((resolve, reject) => {
        jQueryAjax(url, params, resolve, reject, 'post', contentType)
      })
    },
    $delete (url, params) {
      return new Promise((resolve, reject) => {
        jQueryAjax(url, params, resolve, reject, 'delete')
      })
    },
    $put (url, params, contentType = 'x-www-form-urlencoded') {
      return new Promise((resolve, reject) => {
        jQueryAjax(url, params, resolve, reject, 'put', contentType)
      })
    }
  }
}()

export {
  httpGet
}
