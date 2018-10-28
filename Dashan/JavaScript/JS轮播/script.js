window.onload = function () {
    function $(id) {
        return document.getElementById(id);
    }
    var pic_top = 0;//控制图片的top
    var timer = null;//定时器

    //查询up元素 定义onmouseover事件时执行的方法
    $('picUp').onmouseover = function () {
        //打开计时器 每秒修改top属性 图片顶部时停止
        clearInterval(timer);
        timer = setInterval(function () {
            pic_top--;
            pic_top >= -1070 ? $('pic').style.top = pic_top + "px" : clearInterval(timer);
        }, 100);
    }



    //up onmouseover 打开计时器 每秒修改top属性 图片顶部时停止
    $('picDown').onmouseover = function () {
        //打开计时器 每秒修改top属性 图片顶部时停止
        clearInterval(timer);
        timer = setInterval(function () {
            pic_top++;
            pic_top >= -1070 ? $('pic').style.top = pic_top + "px" : clearInterval(timer);
        }, 100);
    }
    $("notmi").onmouseout = function () {
        clearInterval(timer);
    }
}
