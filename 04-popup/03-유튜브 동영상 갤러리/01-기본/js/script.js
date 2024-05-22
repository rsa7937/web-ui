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
    const videoLink = $(this).data('link'); /* data-link를 가지고 옴 */
    console.log(videoLink);
    // $video의 src값으로 비디오 링크를 저장
    $video.attr('src', videoLink);

    // $dim을 보이게
    $dim.fadeIn();
    // $videoWrap을 보이게
    $videoWrap.addClass('active');

    // 선택한 비디오의 텍스트를 변수에 저장
    const $videoText = $(this).text();
    // .caption에 세팅
    // 클릭하면 선택한 li의 텍스트를 가져오고 대체함
    $('.caption').text($videoText);
  });

  $btnClose.add($dim).on('click', function () {
    $dim.fadeOut();
    $videoWrap.removeClass('active');
  });
});
