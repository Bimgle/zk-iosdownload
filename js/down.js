!(function() {
  download();
  function download() {
    if (PLIST_URL) {
      var link = "itms-services://?action=download-manifest&url=" + PLIST_URL;
      location.href = link;
      // 提示正在安装
      setTimeout(function() {
        var eleTip = document.querySelector(".js-tip");
        if (eleTip) {
          eleTip.innerHTML = "正在安装，请按 Home 键在桌面查看";
        }
      }, 3500);
    }
  }

  function clickEvent() {
    document.onclick = function(e) {
      if (e.target.className.indexOf("js-down") > -1) {
        e.preventDefault();
        download();

        return false;
      }
    };
  }

  // dom解析完
  document.ready =
    document.ready ||
    function(callback) {
      document.addEventListener(
        "DOMContentLoaded",
        function() {
          document.removeEventListener(
            "DOMContentLoaded",
            arguments.callee,
            false
          );
          callback();
        },
        false
      );
    };

  document.ready(function() {
    clickEvent();
  });
})();
