$(document).ready(function(){
    $('div[data-type="background"]').each(function(){
        var bgobj = $(this);
        $(window).scroll(function() {
            var window = $(document).scrollTop();
            var yPos = -(window / bgobj.data('speed'))+500;
            var coords = '50% '+ yPos + 'px';

            bgobj.css({ backgroundPosition: coords });
        });
    });
});