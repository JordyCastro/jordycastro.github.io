
function Contador(selector){
    $(selector).each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 900,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });  
    });
}

  
$(document).ready(function(){

  const ContainerMenu = $('.menu-box');
  const ContainerLoginMenu = $('.navbar-login');
  let boxContainerViews = document.getElementById('boxNumberOfViews').offsetHeight;
  let heightScreen = window.innerHeight;
  heightScreen = (heightScreen - heightScreen) + (boxContainerViews / 2 )

  window.onscroll = () => {
      let windowScrollAction = window.pageYOffset;
      if(heightScreen < windowScrollAction){
          Contador(document.getElementById('valNumbOfViews'));
      }
  }

  $(".CarouselAmericanBullies").owlCarousel({
    responsive : {
      0:{
        items: 1,
        dots : true,
        nav: false
      },
      576:{
        items: 2,
        dots : true,
        nav: false
      },
      768:{
        items: 3,
        nav: true,
        dots : false
      }
    },
    margin: 15
  });

  $(".CarouselFutureProducts").owlCarousel({
    responsive : {
      0:{
        items: 1,
        dots : true,
        nav: false
      },
      576:{
        items: 2,
        dots : true,
        nav: false
      },
      768:{
        items: 3,
        nav: true,
        dots : false
      }
    },
    margin: 15
  });

  // Add smooth scrolling to all links
  $(".navbar-main > .nav-item > a.nav-link").on('click', function(event) {

    ContainerMenu.removeClass('active'); //Esconder el menuNav principal
    ContainerLoginMenu.show(); //Esconder el elemento Login del menuNav

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });


  $(".navbar-toggler").on('click',function(){
    if(ContainerMenu.hasClass('active')){
      ContainerMenu.removeClass('active');
    }else{
      ContainerMenu.addClass('active');
      ContainerLoginMenu.hide();
    }
  })

  $(".BtnCloseMenuNav").on('click',function(){
    ContainerLoginMenu.show();
    ContainerMenu.removeClass('active');
  })

  

});