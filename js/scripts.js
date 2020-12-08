$(document).ready(function(){
    $('#header'). fadeOut(1);
    $('#info').fadeOut(1);
    $('#containment').fadeOut(1);
    $('#header').fadeIn(1000,function (){
        $('.dropdown-divider').fadeIn(1000,function () {
            $('#info').fadeIn(1000,function (){
                $('#containment').fadeIn(1000)
            })
        })
    });
});

$(document).ready(function (){
    $('.card-elem').hover(
        function(){$(this).animate({marginTop: '-=2%'}, 100);},
        function(){$(this).animate({marginTop: '0'}, 100);}
    );
});
