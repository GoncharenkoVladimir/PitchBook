$(document).ready(function(){
    $('div[data-type="background"]').each(function(){
        var bgobj = $(this);
        $(window).scroll(function() {
            var window = $(document).scrollTop();
            var block = bgobj.offset().top;

            console.log(window);
            console.log(block);

            var yPos = -(window / bgobj.data('speed'))+500;
            console.log(yPos);
            var coords = '50% '+ yPos + 'px';

            bgobj.css({ backgroundPosition: coords });
        });
    });
});