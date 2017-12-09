/**
 * Created by mac on 2017/12/3.
 */
$(function () {
    $('.color_change img').on('click',function () {
        $(this).addClass('hover').parent().siblings().find('img').removeClass('hover');
        var $src = $(this).attr('src');
        //imagesMyshop/pro_img/green.jpg --> imagesMyshop/pro_img/green_one_small.jpg
        var i = $src.indexOf('.');
        var $path = $src.substring(0,i);
        var $format = $src.substring(i);
        $('#bigImg').attr('src',$path+'_one_small'+$format);

        //imagesMyshop/pro_img/green.jpg --> imagesMyshop/pro_img/green_one_small.jpg
        var $pathImg = $path.replace('imagesMyshop/pro_img/','');//提取颜色
        $('.imgList li').addClass('hide');
        $('.imgList_'+$pathImg).removeClass('hide');
    })
});

$(function () {
    $('.imgList li img').on('click',function () {
        var $src = $(this).attr('src');
        //imagesMyshop/pro_img/green.jpg --> imagesMyshop/pro_img/green_one_small.jpg
        var i = $src.indexOf('.');
        var $path = $src.substring(0,i);
        var $format = $src.substring(i);
        $('#bigImg').attr('src',$path+'_small'+$format);
    })
})