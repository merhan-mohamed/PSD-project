jQuery(document).ready(function(){
    $("#videolink").magnificPopup({
        type:"inline",
        midClick:true
    })

});



$(function(){
    $("#progress-element").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                    width: $(this).attr('aria-valuenow') + "%"
                }, 2000);
            });
            this.destroy();
        },{
            offset:"bottom-in-view"
        }
    );
    });



    $(function(){
        $('#right').owlCarousel({
            items:2,
            autoplay:true,
            smartSpeed:700,
            loop:true,
            autoplayHoverPause:true,
            nav:false,
            dots:true,
            Responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                }
            }
        })
    })


    $(function(){
        $('#tab').responsiveTabs({
            animate:"slide"
        });


        $('.gallery').magnificPopup({
            delegate:'.popimg',
            type:'image',
            gallery:{
                enabled:true
            }

        });

        $('.gallery').isotope({
            itemSelector : '.items'
        });


       
        

        $(".filter").on('click', 'span', function(){
            var $filtervalue  = $(this).attr('data-filter');
            $('.gallery').isotope({filter: $filtervalue});
            
        });
       
    });

    $(".filtering").on('click', 'span', function(){
        $(this).addClass('active').siblings().removeClass('active')
    
    });

    $(function(){
        $('#testimonials-slider').owlCarousel({
            items:1,
            autoplay:true,
            smartSpeed:700,
            loop:true,
            autoplayHoverPause:true,
            nav:false,
            dots:true,
        })
    });


    $(function(){
        $('#happy-slider').owlCarousel({
            items:1,
            autoplay:true,
            smartSpeed:700,
            loop:true,
            autoplayHoverPause:true,
            nav:false,
            dots:true,
        })

    });

////////////counters//////////////////
const counters = document.querySelectorAll(".counter-heading");
const speed = 200;
counters.forEach(item =>{
    const UpdateCount = () => {
        const target = +item.getAttribute('data-target');
        const count = +item.innerText;

        const inc = target/speed;
        if(count < target) {
            item.innerText = Math.floor(count + inc)
            setTimeout(UpdateCount,1)
        }else{
            count.innerText = Math.floor(target)
        }
    }

    UpdateCount()
})


