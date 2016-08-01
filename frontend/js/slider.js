function initSlider(slider){
    var ul = $(slider).find('#slider');
    var liItems = ul.children();
    var imageNumber = liItems.length;
    var imageWidth = $('.container').width();
    var prev, next;
    liItems.width(imageWidth);
    ul.width(imageWidth * imageNumber);

    $(window).resize(function(){
        imageWidth = $('.container').width();
        liItems.width(imageWidth);
        ul.width(imageWidth * imageNumber);
        console.log(imageWidth);
        console.log(liItems.width());
        console.log(ul.width());
    });

    prev = $(slider).find('.prev');
    next = $(slider).find('.next');

    prev.on('click',function(){
        if(ul.position().left >= 0){
            ul.animate({"left":-ul.width() + imageWidth},"slow", function()
            {
                ul.stop();
            });
        }else{
            ul.animate({"left":"+=" + imageWidth + "px"},"slow", function()
            {
                ul.stop();
            });
        }
    });
    next.on('click',function(){
        console.log(ul.position().left);
        console.log(-ul.width() + imageWidth);
        if(ul.position().left <= -ul.width() + imageWidth){
            ul.animate({"left":"0px"},"slow", function()
            {
                ul.stop();
            });
        }else{
            ul.animate({"left":"-=" + imageWidth + "px"},"slow", function()
            {
                ul.stop();
            });
        }
    });
}