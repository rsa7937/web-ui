$(function () {
  // 대상을 변수에 저장
  const $faqQ = $('.faq-wrap > ul > li');
  const $faqA = $('.answer-wrap');
  const duration = 300;

  // 질문을 클릭했을 떄
  $faqQ.on('click', function () {
    // ✅ $(this)를 통해서 구별
    // 선택되지 않은 질문에  on클래스 삭제
    $(this).siblings().removeClass('on');
    // 선택한 질문에 on클래스 부여
    $(this).toggleClass('on');
    // 선택한 놈을 기준, 형제요소의 하위에 있는 답변 모두 올리고
    // li($this, $this.siblings)하위 요소 faqA -> find($faqA)
    // ->  $(this).siblings().find($faqA) / $(this).find($faqA)
    $(this).siblings().find($faqA).stop().slideUp(duration);
    // 선택한 놈을 기준, 하위에 있는 답변만 내리기
    $(this).find($faqA).stop().slideToggle(duration);
  });
});
