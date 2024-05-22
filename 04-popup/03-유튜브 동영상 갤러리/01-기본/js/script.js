$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');

  // 비디오 리스트를 클릭(선택)했을 때
  $selectVideo.on('click', function () {
    // 선택한 비디오 링크를 받아서 변수에 저장
    let videoLink = $(this).data('link'); /* data-link를 가지고 옴 */
    console.log(videoLink);

    // videoLink = videoLink + '?autoplay=1'
    videoLink += '?autoplay=1';
    // $video의 src값으로 비디오 링크를 저장
    $video.attr('src', videoLink);

    // $dim을 보이게
    $dim.fadeIn();
    // $videoWrap을 보이게
    $videoWrap.addClass('active');

    // 선택한 비디오의 텍스트를 변수에 저장
    const $videoText = $(this).text();
    // .caption에 세팅
    $('.caption').text($videoText);
  });

  $btnClose.add($dim).on('click', function () {
    // dim 사라지게
    $dim.fadeOut();
    // videowrap을 보이지 않게
    $videoWrap.removeClass('active');

    // $video의 src 값을 없애자 --> 동영상 삭제 / 소리가 들리지 않게 하기 위함
    $video.attr('src', '');
  });
});
