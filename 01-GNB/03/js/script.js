// DOM 구조가 파악 되면 실행
$(function () {
  // alert('준비완료!');

  // 대상을 변수에 저장
  // window는 특별한 친구라 문자열로 쓰면 안됨
  // $에 담는 이유는 jQuery Method를 사용하려면 jQuery의 객체가 되어야하기 때문에
  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $subMenu = $('.submenu');

  // 객체 대상이 아니라 값이기 때문에 $사인을 굳이 붙이지 않음
  const duration = 300;

  // 메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    // 개별적인 메뉴 선택  -> this
    // 한꺼번에 떨어트리기 -> ul 그자체
    $subMenu.stop().slideDown(duration);
    // 활성화된 메뉴 표시 : on클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    // 그 영역 하위의 $submenu를 slideUp()
    $subMenu.stop().slideUp(duration);
    $menu.removeClass('on');

    $header.removeClass('active');
  });

  // 마우스 휠을 조작할 때
  $window.on('wheel', function (e) {
    console.log(e);
    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올렸을 때
      $header.removeClass('hide');
    } else {
      // 휠을 내렸을 떄
      $header.addClass('hide');
    }
  });
});
