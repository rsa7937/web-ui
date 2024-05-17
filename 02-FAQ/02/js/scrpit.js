$(function () {
  // 대상을 변수에 저장
  const $faqQ = $('.faq-wrap > ul > li');
  const $faqA = $('.answer-wrap');
  const duration = 300;

  // 질문을 클릭했을 떄
  $faqQ.on('click', function () {
    // on클래스 부여하기전에 다 빼준다
    $faqQ.removeClass('on');
    // 선택한 질문에만 on 클래스 부여
    $(this).addClass('on');

    // 선택한 놈의 자손중에 $faqA를 찾아 내려라
    // 보기에는 동작하는 코드를 짜고 변수에만 담아 놓아 이게 작동되나 싶지만
    // 이건 동작에 대한 변수 정의 + 동작은 동작대로 실행되고 있음
    const sltItem = $(this).find($faqA).stop().slideDown(duration);

    // 선택되지 않은 $faqA는 올려라 (css의 :not과 비슷)
    $faqA.not(sltItem).stop().slideUp(duration);
  });
});
