var isTop = true;
$(window).on('scroll',function(e){
    if($(this).scrollTop()>=200){
        if(isTop) {
            isTop=!isTop;
            $('html').addClass('small-height');
        }
    } 
    else {
        if(!isTop){
            isTop=!isTop;
            $('html').removeClass('small-height');
        }
    }
});

function appendDots() {
    setTimeout(function(){
        $('#activateacard-carousel .owl-dots').appendTo('#activateacard');
        $('#payyourbill-carousel .owl-dots').appendTo('#payyourbill');
        $('#activateyourapp-carousel .owl-dots').appendTo('#activateyourapp');
        $('#transferfunds-carousel .owl-dots').appendTo('#transferfunds');
        $('#blockacard-carousel .owl-dots').appendTo('#blockacard');
        $('#testacard-carousel .owl-dots').appendTo('#testacard');
    },150); 
}
appendDots();

function addOpacity1() {
    setTimeout(function(){
        $('.active-carousel #activateacard-carousel .owl-item.active:eq(0)').addClass("Current");
        $('.active-carousel #activateacard-carousel .owl-item.active:eq(1)').addClass("Next");
    },15); 
}

function addOpacity2() {
    setTimeout(function(){
        $('.active-carousel #payyourbill-carousel .owl-item.active:eq(0)').addClass("Current");
        $('.active-carousel #payyourbill-carousel .owl-item.active:eq(1)').addClass("Next");
    },15); 
}

function addOpacity3() {
    setTimeout(function(){
        $('.active-carousel #activateyourapp-carousel .owl-item.active:eq(0)').addClass("Current");
        $('.active-carousel #activateyourapp-carousel .owl-item.active:eq(1)').addClass("Next");
    },15); 
}

function addOpacity4() {
    setTimeout(function(){
        $('.active-carousel #transferfunds-carousel .owl-item.active:eq(0)').addClass("Current");
        $('.active-carousel #transferfunds-carousel .owl-item.active:eq(1)').addClass("Next");
    },15); 
}

function addOpacity5() {
    setTimeout(function(){
        $('.active-carousel #blockacard-carousel .owl-item.active:eq(0)').addClass("Current");
        $('.active-carousel #blockacard-carousel .owl-item.active:eq(1)').addClass("Next");
    },15); 
}

function addOpacity6() {
    setTimeout(function(){
        $('.active-carousel #testacard-carousel .owl-item.active:eq(0)').addClass("Current");
        $('.active-carousel #testacard-carousel .owl-item.active:eq(1)').addClass("Next");
    },15); 
}

addOpacity1();
addOpacity2();
addOpacity3();
addOpacity4();
addOpacity5();
addOpacity6();

setTimeout(function(){
    $('.tab-pane.active .tabpanelayer').hide();
},300);

$(document).ready(function()    {   
    $("#Div2").append('<link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/Mobile.owl.carousel.min.css" />\
                        <link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/Mobile.owl.theme.default.min.css" />\
                        <link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/mainmobile.css" />\
                        <link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/responsivemobile.css" />\
                        <script src="/en/Style%20Library/NBO3/js/Mobile.owl.carousel.js"></script>\
                        <!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/mobileIE.css" /><![endif]-->\
                        ');
    mobileApp();
    $('#tabcarousel .item a, #tabcarousel .owl-prev span, #tabcarousel .owl-next span').click(function(){
        addOpacity1();
        addOpacity2();
        addOpacity3();
        addOpacity4();
        addOpacity5();
        addOpacity6();
        setTimeout(function(){
            $('.tab-pane.active .tabpanelayer').hide();
        },600);
    });
});

$(window).bind("load", function() {
    $('#tabcarousel .item a, #tabcarousel .owl-prev span, #tabcarousel .owl-next span').click(function(){
        if(!$(this).hasClass('disabled') && !$("#tabcarousel button").hasClass('disabled'))
        {
            $(this).disabled=true;
            $('.backgroundtop').show();
            setTimeout(function(){
                $('.backgroundtop').hide();
                $(this).disabled=false;
            },650);
        }
    });
});

function mobileApp(){
$('#nbo-mobile-banking').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    mouseDrag : false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplaySpeed : 750,
    fluidSpeed: 500,
    smartSpeed: 1000,
    nav: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.playvideo').click(function(){
    $(this).hide();
    $('.video-overlay').hide();
});

/*Section-4 App-Watch Carousel*/
$('#app-watch').owlCarousel({
    items: 1,
    autoPlay : false,
    smartSpeed: 1700,
    nav: true,
    loop: true,
    dots: false
});

/*Section-5 Tab-Heading Carousel*/
$('#tabcarousel').children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});
var centerval=true;
var responsiveval={"0":{"items":"1"},"769":{"items":"3","nav":"true"},"770":{"items":"5","nav":"true"},"1600":{"items":"5","nav":"true"}};
var loopval=false; 
$('#tabcarousel').addClass("nav-enable");
if ($('#tabcarousel .item').length==1)
{
    centerval=true;
    loopval=false;
    responsiveval={"0":{"items":"1"},"769":{"items":"1"},"770":{"items":"1"},"1600":{"items":"1"}};   
    $('#tabcarousel').removeClass("nav-enable");
}
else if ($('#tabcarousel .item').length==2)
{
    centerval=true;
    loopval=false;
    responsiveval={"0":{"items":"1"},"769":{"items":"2"},"770":{"items":"2"},"1600":{"items":"2"}};   
    width=200;
    $('#tabcarousel').addClass("non-center");
}
else if ($('#tabcarousel .item').length==4 || $('#tabcarousel .item').length==3)
{
    centerval=true;
    loopval=true;
    responsiveval={"0":{"items":"1"},"769":{"items":"3"},"770":{"items":"3"},"1600":{"items":"3"}};
    $('#tabcarousel').addClass("nav-enable");
}

$('#tabcarousel').owlCarousel({
    center: centerval,
    loop: true,
    fluidSpeed: 700,
    autoPlay : false,
    nav: true,
    mouseDrag : false,
    dots: false,
    responsive:responsiveval
});

$('#tabcarousel').on('click', '.owl-item>div', function() {
    $('#tabcarousel').trigger('to.owl.carousel', $(this).data( 'position' ) );
});
 
 $('#tabcarousel').on('click', 'button', function() {  
    $('#tabcarousel .owl-item.active.center').find("a").click();
    $.each($('#tabcarousel .owl-item'), function (index, value) {
        if($(this).hasClass('center'))
        {
            var match=$(this).find('a').attr('href');
            $.each($('#tabcarousel .owl-item'), function (index, value) {
                if($(this).find('a').attr('href')==match)
                {
                    $(this).addClass("active center");
                }
            });
        }
    });
});

/*Section-5 Tab - Content Carousel*/

$('.active-carousel .owl-carousel').owlCarousel({
    items:2,
    autoPlay : true,
    nav: true,
    mouseDrag : true,
    // animateOut: 'bounce',
    // animateIn: 'bounce',
    loop : true,
    smartSpeed: 1000,
    dotsEach : true,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        }    
    }
});



var tabcontentowl=$('.active-carousel .owl-carousel').owlCarousel({
    items:2,
    autoPlay : true,
    nav: true,
    mouseDrag : true,
    // animateOut: 'bounce',
    // animateIn: 'bounce',
    loop : true,
    smartSpeed: 1000,
    dotsEach : true,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        }    
    }
});

$('.banking-instruction .owl-carousel').owlCarousel({
    items:1,
    autoPlay : false,
    nav: true,
    loop: true,
    smartSpeed: 1000,
    mouseDrag : false,
    navText: ['Prev','Next'],
    dots: false
});

$('#activateacard-banking-instruction .owl-next').bind('click',function(e,type){
    if(type == undefined)
    {
        $('.active-carousel #activateacard-carousel .owl-next').trigger('click');
    }
});

$('#payyourbill-banking-instruction .owl-next').bind('click',function(e,type){
    if(type == undefined)
    {
        $('.active-carousel #payyourbill-carousel .owl-next').trigger('click');
    }
});

$('#activateyourapp-banking-instruction .owl-next').bind('click',function(e,type){
    if(type == undefined)
    {
        $('.active-carousel #activateyourapp-carousel .owl-next').trigger('click');
    }
});

$('#transferfunds-banking-instruction .owl-next').bind('click',function(e,type){
    if(type == undefined)
    {
        $('.active-carousel #transferfunds-carousel .owl-next').trigger('click');
    }
});

$('#blockacard-banking-instruction .owl-next').bind('click',function(e,type){
    if(type == undefined)
    {
        $('.active-carousel #blockacard-carousel .owl-next').trigger('click');
    }
});

$('#testacard-banking-instruction .owl-next').bind('click',function(e,type){
    if(type == undefined)
    {
        $('.active-carousel #testacard-carousel .owl-next').trigger('click');
    }
});

$('.active-carousel #activateacard-carousel').on('changed.owl.carousel', function(event) {
    setTimeout(function(){
        $(".active-carousel #activateacard-carousel .owl-item").removeClass("Current");
        $(".active-carousel #activateacard-carousel .owl-item").removeClass("Next");
        var current='.active-carousel #activateacard-carousel .owl-item:eq('+event.relatedTarget._current+')';
        var next='.active-carousel #activateacard-carousel .owl-item:eq('+((event.relatedTarget._current)+1)+')';
        $(current).addClass("Current");
        $(next).addClass("Next");
    },150);
    $("#activateacard-banking-instruction.owl-carousel").trigger('to.owl.carousel', event.page.index);
 });

 $('.active-carousel #payyourbill-carousel').on('changed.owl.carousel', function(event) {
    setTimeout(function(){
        $(".active-carousel #payyourbill-carousel .owl-item").removeClass("Current");
        $(".active-carousel #payyourbill-carousel .owl-item").removeClass("Next");
        var current='.active-carousel #payyourbill-carousel .owl-item:eq('+event.relatedTarget._current+')';
        var next='.active-carousel #payyourbill-carousel .owl-item:eq('+((event.relatedTarget._current)+1)+')';
        $(current).addClass("Current");
        $(next).addClass("Next");
    },150);
    $("#payyourbill-banking-instruction.owl-carousel").trigger('to.owl.carousel', event.page.index);
 });
 
 $('.active-carousel #activateyourapp-carousel').on('changed.owl.carousel', function(event) {
    setTimeout(function(){
        $(".active-carousel #activateyourapp-carousel .owl-item").removeClass("Current");
        $(".active-carousel #activateyourapp-carousel .owl-item").removeClass("Next");
        var current='.active-carousel #activateyourapp-carousel .owl-item:eq('+event.relatedTarget._current+')';
        var next='.active-carousel #activateyourapp-carousel .owl-item:eq('+((event.relatedTarget._current)+1)+')';
        $(current).addClass("Current");
        $(next).addClass("Next");
    },150);
    $("#activateyourapp-banking-instruction.owl-carousel").trigger('to.owl.carousel', event.page.index);
 });

 $('.active-carousel #transferfunds-carousel').on('changed.owl.carousel', function(event) {
    setTimeout(function(){
        $(".active-carousel #transferfunds-carousel .owl-item").removeClass("Current");
        $(".active-carousel #transferfunds-carousel .owl-item").removeClass("Next");
        var current='.active-carousel #transferfunds-carousel .owl-item:eq('+event.relatedTarget._current+')';
        var next='.active-carousel #transferfunds-carousel .owl-item:eq('+((event.relatedTarget._current)+1)+')';
        $(current).addClass("Current");
        $(next).addClass("Next");
    },150);
    $("#transferfunds-banking-instruction.owl-carousel").trigger('to.owl.carousel', event.page.index);
 });

 $('.active-carousel #blockacard-carousel').on('changed.owl.carousel', function(event) {
    setTimeout(function(){
        $(".active-carousel #blockacard-carousel .owl-item").removeClass("Current");
        $(".active-carousel #blockacard-carousel .owl-item").removeClass("Next");
        var current='.active-carousel #blockacard-carousel .owl-item:eq('+event.relatedTarget._current+')';
        var next='.active-carousel #blockacard-carousel .owl-item:eq('+((event.relatedTarget._current)+1)+')';
        $(current).addClass("Current");
        $(next).addClass("Next");
    },150);
    $("#blockacard-banking-instruction.owl-carousel").trigger('to.owl.carousel', event.page.index);
 });

 $('.active-carousel #testacard-carousel').on('changed.owl.carousel', function(event) {
    setTimeout(function(){
        $(".active-carousel #testacard-carousel .owl-item").removeClass("Current");
        $(".active-carousel #testacard-carousel .owl-item").removeClass("Next");
        var current='.active-carousel #testacard-carousel .owl-item:eq('+event.relatedTarget._current+')';
        var next='.active-carousel #testacard-carousel .owl-item:eq('+((event.relatedTarget._current)+1)+')';
        $(current).addClass("Current");
        $(next).addClass("Next");
    },150);
    $("#testacard-banking-instruction.owl-carousel").trigger('to.owl.carousel', event.page.index);
 });


$('.tab-pane .owl-carousel .owl-next').click(function(){
    if($(this).hasClass('disabled')){
        $(this).hide();
        $(this).prev().show();
    }
});

$('.tab-pane .owl-carousel .owl-prev').click(function(){
    if($(this).hasClass('disabled')){
        $(this).hide();
        $(this).next().show();
    }
});

/*Section-5 Tab - Content Carousel in mobile*/
$('.owl-carousel').on('changed.owl.carousel', function(event) {    
    if($('.tab-pane.active .owl-prev').hasClass('disabled')){
        $('.tab-pane.active .owl-carousel .owl-nav .owl-prev').hide();
        $('.tab-pane.active .owl-carousel .owl-nav .owl-next').show();        
                            
    }
    if($('.tab-pane.active .owl-next').hasClass('disabled')){
        $('.tab-pane.active .owl-carousel .owl-nav .owl-prev').show();
        $('.tab-pane.active .owl-carousel .owl-nav .owl-next').hide();
    }	   
});
        
navtextHeight =$('.tab-pane.active').find('.owl-item.active .col-sm-4.banking-instruction').height() + 20;			    
if(navtextHeight < 400)
{
    $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('top',navtextHeight);	
    $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('bottom','inherit');
}
else
{
    $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('top','435px');
    $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('bottom','inherit');
}

tabcontentowl.on('changed.owl.carousel', function(event) {
    setTimeout(function(){
        var navtextHeight;
        navtextHeight =$('.tab-pane.active').find('.owl-item.active .col-sm-4.banking-instruction').height() + 20;			    
            if(navtextHeight < 400)
        {
            $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('top',navtextHeight);	
            $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('bottom','inherit');
        }
        else
        {
            $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('top','435px');
            $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('bottom','inherit');
        }
    },300);
});

}

var windowHeight = $(window).height();
var windowWidth = $(window).width();
var fixedHeight = 0;
var videoHeight = 0;
fixedHeight = $('.navbar-fixed-top.menuDesktop').outerHeight();
bannerHeight = windowHeight - fixedHeight;  
videoHeight = windowHeight - fixedHeight + 52;
function sectionHeight()  {
    if ( windowWidth > 1340 )
    {
        //$('.banner').css('height',bannerHeight);    
    }
    // else
    // {
    //     fixedHeight = $('.menuMobile').outerHeight();		
    //     videoHeight = windowHeight - fixedHeight;
    // }  
       
    //$('.video-container').css('height',videoHeight);

    if( windowHeight > 500)
    {
        if(bannerHeight > 500 && windowWidth > 1280 )   {
            
        }
         else   {
            //$('.banner').css('padding-bottom','60px');
        }
    }
    else
    {		
        //$('.banner').addClass("landscape");
        //$('.video-container').addClass("landscape");    
    }
}

$(window).on('scroll',function(e)  {
    if($(this).scrollTop()>=200 && windowWidth > 1400)    {
        //$('.video-container').css('height',videoHeight)
    }
});

sectionHeight();


function carouselWidth() {
    if(windowWidth > 768) {
        $('.digital-phone-preview').width($('.active-carousel').width() / 2);

     }
     else {
        $('.digital-phone-preview').css('width','100%');
     }
}
carouselWidth()

$(window).resize(function() {
    sectionHeight();
    carouselWidth()
});

$( window ).on( "orientationchange", function( event ) {
    carouselWidth()
});

