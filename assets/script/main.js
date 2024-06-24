// ============ メイン３用 =================
$('.l-main6__slick__items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  centerMode: true,
  dots: true,
  
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 600,
      centerPadding:"8%",
    }
  }]
});
