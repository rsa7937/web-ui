$(function () {
  // 대상을 변수에 저장
  const $body = $('body');
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');

  // 배경 이미지를 배열에 저장
  const imgArr = [
    'https://res.heraldm.com/content/image/2023/04/25/20230425000549_0.jpg',
    'https://image.musinsa.com/mfile_s01/2021/05/13/3fb5ed13afe8714a7e5d13ee506003dd120913.jpg',
    'https://img.wkorea.com/w/2021/11/style_6189ebb2d3726.jpg',
    'http://image.yes24.com/images/chyes24/froala/0/48248/58165.jpg',
  ];
  // 여러 대상에 동일한 동작을 적용하고자할 때 사용
  // javascript forEach()
  // imgArr.forEach(function (item, index) {
  //   console.log(item, index);
  // });

  // jQuery each()
  // 배열에 사용하는 것이 아니라 유사배열에 사용함
  $selectVideo.each(function (index, item) {
    // console.log(index, item);
    $(item).css('background', `url(${imgArr[index]}) no-repeat 0 0 / cover`);
  });

  // console.log(imgArr[2], $selectVideo);
  // $body.css('background', `url(${imgArr[2]}) no-repeat 0 0 / cover`);

  // 비디오 리스트를 클릭(선택)했을 때

  $body.css('background', 'black');

  $selectVideo.on('click', function () {
    // 선택한 비디오 링크를 받아서 변수에 저장
    let videoLink = $(this).data('link'); /* data-link를 가지고 옴 */
    console.log(videoLink);

    // videoLink = videoLink + '?autoplay=1'
    videoLink += '?autoplay=1';
    // $video의 src값으로 비디오 링크를 저장
    $video.attr('src', videoLink);

    // 선택한 비디오의 텍스트를 변수에 저장
    const $videoText = $(this).text();
    // .caption에 세팅
    $('.caption').text($videoText);

    // $dim을 보이게
    $dim.fadeIn();
    // $videoWrap을 보이게
    $videoWrap.addClass('active');

    // 선택한 li의 인덱스를 구해서 변수에 저장 : videoIdx
    // index를 가져올때는 index 가져온 index를 사용할 때는 eq
    let videoIdx = $(this).index();

    // 배경이미지 배열에서 해당 인덱스의 이미지를 가져와서 : imgArr[인덱스]
    let imgLink = imgArr[videoIdx];
    // $body의 배경으로 지정 : $body.css()
    $body.css('background', `url(${imgLink}) no-repeat 0 0 / cover`);
    $body.addClass('active');
    // $body.css('backdrop-filter', `blur(10px)`);
  });

  $btnClose.add($dim).on('click', function () {
    // dim 사라지게
    $dim.fadeOut();
    // videowrap을 보이지 않게
    $videoWrap.removeClass('active');

    // $video의 src 값을 없애자 --> 동영상 삭제 / 소리가 들리지 않게 하기 위함
    $video.attr('src', '');

    $body.removeClass('active');
  });
});
