$(function () {
  // menu表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 520) {
      // $(window).height() 
      $('#logo, #menu-btn').fadeIn();
      } else {
      $('#logo, #menu-btn').fadeOut();
      }
  });


  //menuボタンをクリックしたら表示
  $('.openbtn').click(function () {
    $('#navigation').slideToggle();
  });

  $(".openbtn").click(function () {
    $(this).toggleClass('active');
  });

    //ナビのリンクを押したらmenuを非表示
    $('div a').click(function () {
      $('#navigation').slideUp();
    });

  // スクロールでメインビジュアル拡大
  $(window).scroll(function () {
    var factor = $(':root').css('--factor');
    const ST = $(this).scrollTop() ;
    if(window.innerWidth  > 900) {
      var width =  100 / 3 + ST / 10 + "%";
      // var marginleft = 50 - (100 + ST / factor) / 2  + "%";
      $('#mainvisual img').css('width',width);
      // $('#mainvisual').css('margin-left',marginleft);
    } else {
      var width =  100 - ST / 10 + "%";
      // var marginleft = 50 - (100 + ST / factor) / 2  + "%";
      $('#mainvisual img').css('width',width);
      // $('#mainvisual').css('margin-left',marginleft);
    }

  });
  // var width =  100 - ST / 3.35 + "%";
  // var marginleft = 50 - (100 - ST / 3.35) / 2  + "%";

  // スクロールがACCESSに来たら背景画像を表示
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop() + $(window).height() ;
    var position1  = $('#access').offset().top ;
    var position2  = $('#contact').offset().top ;
    if ( scrollPosition > position1 && scrollPosition < position2 ) {
      $('.bg').fadeIn();
    } else {
      $('.bg').fadeOut();
    };
  }); 

  // スクロールがGALLERYの時にサイドメニューを表示
  if ($(':root').css('--mode') == 1) {
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop() + $(window).height() ;
    var position1  = $('#gallery').offset().top ;
    var position2  = $('#access').offset().top ;
    if ( scrollPosition > position1 && scrollPosition < position2 ) {
      $('#sidemenu').addClass('active');
    } else {
      $('#sidemenu').removeClass('active');
    };  
  }); 
  }

  //ページ内リンクのなめらかなスクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top ;
    $('body, html').animate({ scrollTop: position}, 500);
    return false;
  });
  
  // スクロールして表示領域に入ったらclass付与
  $(function () {
    $(".js-fadeUp").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });
  // スクロールして表示領域に入ったらclass付与
  $(function () {
    $(".js-fadeUp-info").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });  
  // スクロールして表示領域に入ったらclass付与
  $(function () {
    $(".js-fadeUp-gal").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });
});