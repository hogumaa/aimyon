$(document).ready(function(){

    // 실행문
    // 트레일러의 ul안에 li의 순번을 클릭했을때, 이미지박스안의 해당 순번의 P가 보여라.
$('.trailer ul').children().click(function(){
    var i = $(this).index();
    console.log(i)

$('.imgBox').children('p').css({"display":"none"})
$('.imgBox').children('p').eq(i).css({"display":"block"})



})



})
