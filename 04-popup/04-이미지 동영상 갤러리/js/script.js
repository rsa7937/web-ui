$(function () {
  // 대상을 변수에 저장
  const $gallery = $('.gallery-list > li');
  const $dim = $('.dim');
  const $popup = $('.popup');
  const $btnClose = $('.btn-close');
  const $galleryContent = $('.gallery-content');

  const duration = 300;

  // 브라우저 창 크기 구하기
  const $window = $(window);
  // width() -> Content Box, 콘텐츠의 크기(1903)
  // innerWidth() -> padding까지 포함한 크기(1903)
  // outerWidth() -> border까지 포함한 크기(window로 치면 스크롤바까지 포함한 크기 (1920))
  console.log($window.innerWidth() / 2);

  // 선택해서 클릭하면 dim이 보이고, 팝업이 뜬다.
  $gallery.on('click', function () {
    $dim.fadeIn();
    $popup.addClass('active');

    // 선택한 이미지의 정보를 가져와서 변수에 담기
    const $imgEl = $(this).find('img');

    // 선택한 이미지의 속성별 정보를 가져와서 변수에 담기
    const imgSrc = $imgEl.attr('src');
    const imgTitle = $imgEl.attr('alt');
    // const videoSrc = $imgEl.attr('data-link');
    const videoSrc = $imgEl.data('link');

    console.log(imgSrc, imgTitle, videoSrc);

    // 선택한 상황에 따라서
    // videoSrc !== undefined 라고 길게 써주지 않아도 됨
    if (videoSrc) {
      // 블랙핑크 이미지를 클릭한 상태
      $galleryContent.html(`<iframe src="${videoSrc}?autoplay=1" allow="autoplay">`);

      // 브라우저 창크기의 절반을 팝업창의 가로크기로 세팅
      $popup.css('width', $window.innerWidth() / 2);
    } else {
      // 티셔츠 이미지를 클릭한 상태
      $galleryContent.html(`<img src="${imgSrc}">`);
      $popup.css('width', $window.innerWidth() / 3);
    }

    // alt에 담긴 텍스트 뿌리기
    // prepend -> 대상의 앞에
    // append -> 대상의 뒤에
    // $galleryContent.prepend(imgTitle);
    // $galleryContent.append(imgTitle);
    $galleryContent.prepend(`<div class="gallery-title">${imgTitle}</div>`);
  });

  // 닫기 버튼을 클릭하면, 팝업창과 dim이 사라지게
  $btnClose.add($dim).on('click', function () {
    $dim.fadeOut();
    $popup.removeClass('active');

    // 0.5초 후에 갤러리 콘텐츠를 초기화
    setTimeout(function () {
      $galleryContent.html('');
    }, 500);

    // $galleryContent.html(`<iframe src="">`);
  });
});
