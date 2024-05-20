$(function () {
  // 대상을 변수에 저장
  const tabMenu = $('.tab-menu > li');
  const tabContent = $('.tab-con-item');
  const body = $('body');
  const tabTitle = $('.tab-con-item > h2');

  // 배경이미지와 텍스트 정보를 배열에 저장
  const bgArr = [
    {
      bg: 'blackpink01.jpg',
      title: '지수가 제일 예뻐요',
    },
    {
      bg: 'blackpink02.jpg',
      title: '지수가 정말 예뻐요',
    },
    {
      bg: 'blackpink03.jpg',
      title: '지수는 언제나 제일 예뻐요',
    },
  ];
  console.log(bgArr[1].title);

  // 초기세팅
  tabAction(0);

  // 클릭 이벤트
  tabMenu.on('click', function (e) {
    e.preventDefault;

    const tabIdx = $(this).index();
    tabAction(tabIdx);
  });

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 메서드 체인
    tabMenu.removeClass('on').eq(index).addClass('on');
    tabContent.hide().eq(index).show();

    // 배경 이미지 변경
    body.css('background', `url(./img/${bgArr[index].bg}) no-repeat 0 0 / cover`);

    // 타이틀 변경
    // tabTitle.text(bgArr[index].title);
    // 변수를 또 따로 잡는 것(tabTitle) 보다 find(tabContent.find('h2'))로 자손을 잡아주는 것이 더 편함
    tabContent.find('h2').text(bgArr[index].title);

    // $('.tab-con-item > h2').text(bgArr[index].title);
    // $('.tab-con-item > h2').text('zz');
  }
});
