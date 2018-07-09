$(function(){
    // Codes Here
    $('.sidenav').sidenav();
    $('.degree-desc').css({
        'height' : $('.degree-container').height()
    });
    if($(window).width() <= 600){
        $('.degree-desc').css({
            'width' : '100%'
        });
        $('.degree-container').css({
            'margin-top' : '-14px'
        });
        $('.degree-desc').css({
            'height' : 'auto'
        });
    };
    $(window).resize(() => {
        $('.degree-desc').css({
            'height' : $('.degree-container').height()
        });
        if($(window).width() <= 600){
            $('.degree-desc').css({
                'width' : '100%'
            });
            $('.degree-container').css({
                'margin-top' : '-14px'
            });
            $('.degree-desc').css({
                'height' : 'auto'
            });
        };
    });
})