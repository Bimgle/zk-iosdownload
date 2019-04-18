!(function() {
  download();
  function download() {
    if (PLIST_URL) {
      var link = "itms-services://?action=download-manifest&url=" + PLIST_URL;
      location.href = link;
    }
  }

  function clickEvent() {
    var btn = document.querySelector(".js-down");
    if (btn) {
      btn.addEventListener("touchstart", function(e) {
        e.stopPropagation();
        download();
        // 提示正在安装
        setTimeout(function() {
          var eleTip = document.querySelector(".js-tip");
          if (eleTip) {
            eleTip.innerHTML = "正在安装，请按 Home 键在桌面查看";
          }
        }, 3000);
      });
    }
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
