if ($(window).width() > 1393) {
  var slidesNeed = 3;
}
else if ($(window).width() <= 1393 && $(window).width() > 640) {
  var slidesNeed = 2;
}
else if ($(window).width() <= 640) {
  var slidesNeed = 1;
};

var swiper = new Swiper('.swiper-container', {
      slidesPerView: slidesNeed,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// $( window ).resize(function() {
//   var docWidth = $(window).width();
//   if (docWidth > 1393) {
//     var swiper = new Swiper('.swiper-container', {
//           slidesPerView: 3,
//           spaceBetween: 30,
//           slidesPerGroup: 1,
//           loop: true,
//           loopFillGroupWithBlank: true,
//           pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//           },
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
//         });
//   }
//   else if (docWidth <= 1393 && docWidth > 640) {
//     var swiper = new Swiper('.swiper-container', {
//           slidesPerView: 2,
//           spaceBetween: 30,
//           slidesPerGroup: 1,
//           loop: true,
//           loopFillGroupWithBlank: true,
//           pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//           },
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
//         });
//   }
//   else if (docWidth <= 640) {
//     var swiper = new Swiper('.swiper-container', {
//           slidesPerView: 1,
//           spaceBetween: 30,
//           slidesPerGroup: 1,
//           loop: true,
//           loopFillGroupWithBlank: true,
//           pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//           },
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
//         });
//   }
// });
