function tabsInit(tab){
    var tabs = $(tab);
    tabs.find('.tab').on('click', function(){
        $('.tab').removeClass('active');
        $(this).addClass('active');
        var panel = $(this).attr('tab');
        $('.panel').removeClass('active');
        $('.panel[name='+ panel+']').attr('name', panel).addClass('active');
    })
}

tabsInit("#tabs");