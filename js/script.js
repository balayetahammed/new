$('.slider_part').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<span class="prev"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:'<span class="next"><i class="fa-solid fa-arrow-right"></i></span>',
  });
  new VenoBox({
    selector: '.venobox'
  });
  $('.service_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode:true,
    centerPadding:0,
    prevArrow:'<span class="prev"><i class="fa-solid fa-angle-up"></i></span>',
    nextArrow:'<span class="next"><i class="fa-solid fa-angle-down"></i></span>',
  });
  $('.slider_1').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode:true,
    centerPadding:0,
    prevArrow:'<span class="prev"><i class="fa-solid fa-angle-up"></i></span>',
    nextArrow:'<span class="next"><i class="fa-solid fa-angle-down"></i></span>',
    asNavFor: '.slider_2'
  });
  $('.slider_2').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    centerMode:true,
    centerPadding:0,
    arrows:false,
  });