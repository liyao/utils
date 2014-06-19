/**
 * @desc 获取随机数
 * @param 整数n
 * 返回 1～n之间的随机整数
 */

function getRandom (n) {
    return Math.floor(Math.random()*n+1)
}

/**
 * @desc 判断是不是低版本手机浏览器
 */
function isMobileLow() {
    return /(Mobile\ Safari\/533|AppleWebKit533)/.test(navigator.userAgent);
}

/**
 * @desc 格式化消息显示时间
 * @param {int} Date时间戳
 * @return {string} 显示格式
 */
function formatMsgTime(stamp) {
    var time, retstr;

    time = new Date(stamp * 1000);
    retstr = (time.getMonth() + 1) + '月' + time.getDate() + '日 ' +
        (time.getHours() > 9 ? time.getHours() : '0' + time.getHours()) + ':' +
        (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()) + ':' +
        (time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds());
    return retstr;
}

/* lower-ie style change @buji 2014-02-24 */
(function($, window, document) {
    // 判断浏览器是否支持media query （ie6～8使用resize）
    // ie9支持media query，但是不支持matchMedia，所以用addEventListener方法判断
    if (window.addEventListener) return;

    var $win = $(window),
        $body = $('body'),

        deadWidth = 1212;

    /* 节流函数 */
    var throttle = function(fn, delay, mustRunDelay) {
        var timer = null,
            t_start;

        return function() {
            var context = this, args = arguments, t_curr = +new Date;
            clearTimeout(timer);
            if (!t_start) {
                t_start = t_curr;
            }
            if (t_curr - t_start >= mustRunDelay) {
                fn.apply(context, args);
                t_start = t_curr;
            } else {
                timer = setTimeout(function(){
                    fn.apply(context, args);
                }, delay);
            }
        };
    };

    $win
        .on('resize.lower-ie', throttle(function() {
            var width = $win.outerWidth();

            if (width < deadWidth) {
                $body.addClass('media_screen_960');
            } else {
                $body.removeClass('media_screen_960');
            }
        }, 100, 500))
        .trigger('resize.lower-ie');
}(jQuery, window, document));



/*
 * @desc 获取图片原始尺寸
 * TODO 低版本IE上面可以优化一下
 */
function getImgNaturalDimensions(img, callback) {
    var nWidth, nHeight
    if (img.naturalWidth) { // 现代浏览器
        nWidth = img.naturalWidth
        nHeight = img.naturalHeight
    } else { // IE6/7/8
        var imgae = new Image()
        image.src = img.src
        image.onload = function() {
            callback(image.width, image.height)
        }
    }
    return [nWidth, nHeight]
}


/**
 * ajax 提交
 */
 $.ajax({
    url: '/open/shop/apply/apply',
    type:"POST",
    dataType:"json",
    success:function(json){
        if(json.status.code == 1001){
            $.alert('您的申请已经收到')
        } else {
            $.alert(json.result.msg);
        }
    },
    error:function( jqXHR,  textStatus, errorThrown ){
        $.alert('未知错误');
    }
});

/**
 * 解析href
 */
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null; 
} 

var catName = getQueryString("cateName");

if (catName) {
    $('#imagewall').data("catname", catName);
}


/**
 * 锚点滚动
 */

anchor: function(){
    var url = window.location.toString();
    var id = url.split("#")[1];

    if(id){
        var t = $("#"+id).offset().top;
        console.log(t);

        setTimeout(
            function(){
                var t = $("#"+id).offset().top;
                $("html,body").animate({scrollTop: t}, 500);
            }, 500);
    }
}

/**
 * 判断一个对象是否是数组
 */

var isArray = function(arr) {
    return toString.apply(subName) === '[object Array]';
};

/**
 * for 循环遍历
 */
// 遍历键值对
for(var i in newData.category[j].subName) {
    if(i>0) subId.push(i);
}

/**
 * @desc 替换文本特殊字符
 * @param {string} text 待替换的文本
 * @return {string} text 替换后的文本
 */
var escapeHtml = function(text) {
  return text
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");
};
