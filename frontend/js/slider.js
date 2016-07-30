function initSlider(slider){
    var ul = $(slider);
    var liItems = ul.children();
    var imageNumber = liItems.length;
    var imageWidth = $('.container').width();
    var prev, next;
    liItems.width(imageWidth);
    ul.width(imageWidth * imageNumber);

    prev = ul.parent().find('.prev');
    next = ul.parent().find('.next');

    prev.on('click',function(){
        if(ul.position().left == 0){
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
        if(ul.position().left == -ul.width() + imageWidth){
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