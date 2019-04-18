$(function () {
  function getUrlParam (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = null
    if (location.href.indexOf('?') > -1) {
      r = location.href.split('?')[1].match(reg)
    }

    if (r != null) return r[2]
    return null
  };

  var ogameId = getUrlParam('id') || 5002

  $.get(
    'http://webapi.zkyouxi.com/game/' + ogameId + '/ios/config',
    function (res) {
      if (res.code === '200') {
        var data = res.data
        $('.js-icon').attr('src', data.icon)
        $('.js-title').text(data.game_name)
        $('.js-remark').text(data.remark)
        $('.js-score').text(data.score)
        $('.js-phone').text(data.service.phone)
        $('.js-qq').text(data.service.qq)
        $('.js-time').text(data.service.time)
      } else {
        return false
      }
    },
    'json'
  )
})
