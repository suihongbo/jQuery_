/**
 * Created by mac on 2017/12/3.
 */
//文本框
$(function () {
    $('#inputSearch').on('focus',function () {
        if($(this).val() == this.defaultValue) {
            $(this).val('');
        }
    }).on('blur',function () {
        if($(this).val() == ''){
            $(this).val(this.defaultValue)
        }
    }).keyup(function (e) {
        if(e.which == 13){
            alert('表单提交成功！');
        }
    })
});

//网页换肤
$(function () {
    $('#skin li').on('click',function () {
        var  $skin = $(this).attr('id');
        $(this).attr('class','selected').siblings().removeClass('selected');
        $('#cssfile').attr('href','styles/skin/'+$skin+'.css');
    })
})
//导航划过显示
$(function () {
    $('.nav li').hover(function () {
        $(this).find('div').show();
    },function () {
        $(this).find('div').hide();
    })
})
//hot显示
$(function () {
    $(".promoted").append('<s class="hot"></s>');
})
//轮播图
$(function () {
    var $oll = $('#jnImageroll div a');
    $oll.on('mouseover',function () {
        var $index = $(this).index();
        $oll.css('opacity','0.7').eq($index).addClass('chos').css('opacity','1').siblings().removeClass('chos');
        $('#JS_imgWrap img').eq($index).stop(true,true).fadeIn().siblings().stop().fadeOut();
    })
    $oll.eq(0).trigger('mouseover');
})














