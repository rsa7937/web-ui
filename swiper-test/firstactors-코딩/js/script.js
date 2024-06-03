$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li'); // gnb 클래스의 하위 li 요소 선택
  const $submenu = $('.submenu');
  const duration = 300;

  // 메뉴에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);

    // 활성화된 메뉴 표시 : on 클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });

  // 마우스 휠을 조작할 때
  $window.on('wheel', function (e) {
    // console.log(e);

    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올렸을 때
      $header.removeClass('hide');
    } else {
      // 휠을 내렸을 때
      $header.addClass('hide');
    }
  });

  // onAir slider
  const onairSlider = new Swiper('.onair-slider', {
    autoplay: {
      delay: 1000,
    },
    loop: true,
    speed: 1000,
    slidesPerView: 4,

    // 슬라이드 간의 간격
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 반응형 분기 설정 : min-width() --> 최소 이상으로 작성
    // breakpoints: {
    //   //브라우저 창 크기가 768px 이상일때
    //   768: {
    //     slidesPerView: 2,
    //   },
    //   //브라우저 창 크기가 1200px 이상일때
    //   1200: {
    //     slidesPerView: 4,
    //     spaceBetween: 30,
    //   },
    // },
  });

  // 특정 화면 크기에서 동작하지 않게 설정
  $(window).on('resize', function () {
    if ($(this).width() < 768) {
      onairSlider.disable();
    } else {
      onairSlider.enable();
    }
  });
});
