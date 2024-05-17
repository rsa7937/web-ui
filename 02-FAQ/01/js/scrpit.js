$(function () {
  // 대상을 변수에 저장
  const $faqQ = $('.faq-wrap > ul > li');
  const $faqA = $('.answer-wrap');
  const duration = 300;

  // 질문을 클릭했을 떄
  $faqQ.on('click', function () {
    // console.log($faqQ, $(this));
    // 클릭한 질문의 답변이 보여지게
    $(this).find($faqA).stop().slideToggle(duration);

    $(this).toggleClass('on');
    // 클릭한 놈한테 on클래스 부여
  });
});
