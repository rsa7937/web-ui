$(function () {
  // 대상을 변수에 저장
  const tabMenu = $('.tab-menu > li');
  const tabContent = $('.tab-con-item');

  console.log(tabMenu, tabContent);

  // 초기 세팅 - 함수의 실행
  // 공통 동작이 2번 일어나기 때문에 tabAction이라는 함수로 정의
  tabAction(0);

  // 탭메뉴를 클릭했을 때,
  tabMenu.on('click', function (e) {
    // a의 기본 동작(링크 이동)을 막자
    e.preventDefault();
    // 클릭한 놈의 인덱스를 구해서 변수에 담고
    const tabIdx = $(this).index();
    console.log(tabIdx);

    // 함수의 실행
    // tabLdx의 값이 tabAction의 개구멍(index)를 통해서 input되고, output으로 return 됨
    tabAction(tabIdx);
  });

  // 공통의 동작을 함수로 정의
  // 여기에서 index는 변수의 이름이기 때문에 어떤 이름이어도 상관이 없음
  function tabAction(index) {
    // 탭메뉴 활성화
    tabMenu.removeClass('on');
    // 탭 메뉴 활성화되기 전에, on 클래스가 들어간 모든 tabMenu에서 on 클래스 삭제
    // 클릭한 탭 메뉴에게만 on 클래스 부여
    tabMenu.eq(index).addClass('on');

    // 탭 콘텐츠 중에서 인덱스에 해당하는 내용을 보여지게
    // 먼저 다 숨기고
    tabContent.hide();
    // 활성화된 탭 콘텐츠를 보여주기
    tabContent.eq(index).show();
  }
});
