$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    // $('#carousel-play').click(function() {
    //     $('#mycarousel').carousel('cycle');
    // });
});


// <!-- Esto sirve para que funcionen los tooltips
//     "wherever thre's an attribute of this kind, turn on the tooltip"
//     $(document).ready () significa: cuando el doc este listo para render, do: .... -->
//     <!-- <script>
//         $(document).ready(function(){
//             $('[data-toggle="tooltip"]').tooltip();
//         });
//     </script> -->