$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_close = $('#close');

    envelope.click(function(){
        open();
    });

    btn_open.click(function(){
        open();
    });

    btn_close.click(function(){
        close();
    });

    function open(){
        envelope.addClass('open')
        .removeClass('close');
    }

    function close(){
        envelope.addClass('close')
        .removeClass('open');
    }

})

