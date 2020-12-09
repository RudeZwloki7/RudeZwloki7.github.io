$(document).ready(function(){
    $('#header'). fadeOut(1);
    $('#info').fadeOut(1);
    $('#secondary').fadeOut(1);
    $('#header').fadeIn(1000,function (){
            $('#info').fadeIn(1000,function (){
                $('#secondary').fadeIn(1000)
            });
    });
});

$(document).ready(function (){
    $('.card-elem').hover(
        function(){$(this).animate({marginTop: '-=2%'}, 100);},
        function(){$(this).animate({marginTop: '0'}, 100);}
    );
});
