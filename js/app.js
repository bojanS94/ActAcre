$(document).ready(function () {

  //Increase decrease function
  let quantity = 1;

  // Increase quantity
  $('#increase-btn').click(function () {
    quantity++;
    $('#quantity').text(quantity);
  });

  // Decrease quantity
  $('#decrease-btn').click(function () {
    if (quantity > 1) {
      quantity--;
      $('#quantity').text(quantity);
    }
  });

  //Accordion logic
  $('.accordion-header').click(function () {
    // Close all other accordions
    $('.accordion-content').slideUp();
    $('.toggle-icon').text('+');

    // Toggle the current one
    if ($(this).next('.accordion-content').is(':visible')) {
      $(this).next('.accordion-content').slideUp();
      $(this).find('.toggle-icon').text('+');
    } else {
      $(this).next('.accordion-content').slideDown();
      $(this).find('.toggle-icon').text('-');
    }
  });

  let currentIndex = 0;
  let itemWidth = $('.carousel .product').outerWidth(true);
  let visibleItems = 3;
  let itemCount = $('.carousel .product').length;

  // Prev button
  $('.prev-btn').click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = itemCount - visibleItems;
    }
    $('.carousel').css('transform', 'translateX(' + (-currentIndex * itemWidth) + 'px)');
  });

  // Next button
  $('.next-btn').click(function () {
    if (currentIndex < itemCount - visibleItems) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    $('.carousel').css('transform', 'translateX(' + (-currentIndex * itemWidth) + 'px)');
  });
});
