$(document).ready(function(){

    $('.slider-head').owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        dots:false,
        nav: true,
        items: 1,
        navText: [" <i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
      


    });

    $('.poslo-sell').owlCarousel({
        autoplay: false,
        rtl: true,
        margin:30,
        loop:false,
        nav: true,
        dots:true,
        items: 1,
        navText: [" <i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        
        
        
    });
    $('.brand_slider').owlCarousel({
		items:7,
		autoplay:true,
		rtl:true,
		loop: true,
		margin:18,
		nav:true,
        navText: [" <i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:5
			},
			1200:{
				items:6
			}
		}
    }); 
    $('.side-sell').owlCarousel({
        autoplay: false,
        rtl: true,
        margin:15,
        loop: true,
        nav: true,
        items: 1,
        navText:[" <i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
       
    });
    $('.pos-sell').owlCarousel({
        autoplay: false,
        rtl: true,
        margin:0,
        loop: true,
        nav: true,
        dots:true,
        items: 1,
        navText: [" <i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
       
       
    });
    $('.pos-1-sell').owlCarousel({
        autoplay: false,
        rtl: true,
        margin:0,
        loop: true,
        nav: true,
        dots:true,
     
        navText: [" <i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        responsive:{
			0:{
				items:1
			},
			768:{
				items:4
			},
			991:{
				items:4
			}
		}
       
    });
//  if(document.dir=="rtl"){
//         var dir_d=true;
//     }
//     else{
//         var dir_d=false;
//     }
    $('.prods').each(function(){
        
        //grid borders
        var windowWidth = $(this).width(),
        boxWidth = $(this).find('> div')[0].getBoundingClientRect().width,
        boxesPerRow = Math.floor(windowWidth / boxWidth),
        boxesNum = $(this).find('> div').length,
        rowsNum = Math.ceil(boxesNum / boxesPerRow);

        $(this).find('> div').each(function(){

            var i = $(this).index();
    
            if ((i+1) % boxesPerRow == 0 || i == boxesNum - 1) {
                $(this).addClass('lastcol');
            }
    
            if (i >= (rowsNum-1) * boxesPerRow) {
                $(this).addClass('lastrow');
            }
    
        });

    });

    $("h5[data-toggle='collapse']").on('click', function() {
        $(this).parent().children('.collapse').collapse('toggle');
        $(this).parent().parent().siblings().find('.collapse.in').collapse('hide');
    });
    

    $("#openNav").click( function() {
        $('.sidenav').addClass('open');
        $('.overlay').fadeIn();
        $('body').addClass('ovh');
    });

    $(".closebtn,.overlay").click( function() {
        $('.sidenav').removeClass('open');
        $('.overlay').fadeOut();
        $('body').removeClass('ovh');
    });


});

$('.se_on').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
});

$('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
    }
});

if ($(window).width() <= 425){ 
    $(".wow").removeClass("wow");
}
    
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.top').addClass('fixedheader');
  } else {
    $('.top').removeClass('fixedheader');
  }
}

