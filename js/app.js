document.addEventListener('DOMContentLoaded', () => {
  let quantity = 1;

  const increaseBtn = document.getElementById('increase-btn');
  const decreaseBtn = document.getElementById('decrease-btn');
  const quantityDisplay = document.getElementById('quantity');
  
  increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const allContents = document.querySelectorAll('.accordion-content');
      const allIcons = document.querySelectorAll('.toggle-icon');

      // Close all accordion contents and reset icons
      allContents.forEach(content => content.style.display = 'none');
      allIcons.forEach(icon => icon.textContent = '+');

      const content = header.nextElementSibling;
      const icon = header.querySelector('.toggle-icon');

      if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.textContent = '+';
      } else {
        content.style.display = 'block';
        icon.textContent = '-';
      }
    });
  });

  let currentIndex = 0;
  const carousel = document.querySelector('.carousel');
  const products = document.querySelectorAll('.carousel .product');
  const itemWidth = products[0].offsetWidth + parseInt(getComputedStyle(products[0]).marginRight);
  const visibleItems = 3;
  const itemCount = products.length;

  // Update carousel transform
  const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = itemCount - visibleItems;
    }
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < itemCount - visibleItems) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });
});
