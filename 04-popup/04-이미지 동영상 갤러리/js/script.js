$(function () {
  // 대상을 변수에 저장
  const $gallery = $('.gallery-list > li');
  const $dim = $('.dim');
  const $popup = $('.popup');
  const $btnClose = $('.btn-close');
  const $galleryContent = $('.gallery-content');

  const duration = 300;

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

    // 뿌려지는 이미지를 테스트
    // $galleryContent.text(`<img src="${imgSrc}">`);
    // $galleryContent.html(`<img src="${imgSrc}">`);
    // $galleryContent.html(`<p>${imgTitle}</p>`);

    // data-link의 값이 있는 상태 --> 블랙핑크 이미지를 클릭했다. --> 동영상을 뿌려야 한다.
    if (videoSrc !== undefined) {
      $galleryContent.html(`<iframe src="${videoSrc}">`);
    } else {
      // 티셔츠 이미지를 클릭한 상태
      $galleryContent.html(`<img src="${imgSrc}">`);
    }
  });

  // 닫기 버튼을 클릭하면, 팝업창과 dim이 사라지게
  $btnClose.add($dim).on('click', function () {
    $dim.fadeOut();
    $popup.removeClass('active');
  });
});
