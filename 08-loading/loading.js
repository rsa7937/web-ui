$(function () {
  const $window = $(window);
  const $body = $('body');

  // const가 아니라 let으로 만들어 변할 가능성 부여
  let $loading = `<div class="loading">
                        <p>loading...</p>
                      </div>`;

  // loading 구조 삽입
  // body의 막내에 삽입
  $body.append($loading);

  // jQuery 객체로 만들기
  $loading = $('.loading');

  // $body.find('img').hide();
  $window.on('load', function () {
    // 로딩 완료 후 1초 뒤에 사라지게
    setTimeout(function () {
      $loading.fadeOut();
      // $body.find('img').fadeIn();
      $('html').scrollTop(0);
    }, 1000);
  });
});
