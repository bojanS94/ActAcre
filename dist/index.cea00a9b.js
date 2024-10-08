document.addEventListener("DOMContentLoaded", ()=>{
    let quantity = 1;
    let totalQuantity = 0;
    const increaseBtn = document.getElementById("increase-btn");
    const decreaseBtn = document.getElementById("decrease-btn");
    const quantityDisplay = document.getElementById("quantity");
    const addToCartBtn = document.querySelector(".add-to-cart");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCartBtn = document.getElementById("close-cart");
    const cartContent = document.querySelector(".cart-sidebar-content");
    const totalQuantityDisplay = document.getElementById("total-quantity");
    // Mobile menu elements
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");
    // Upravljanje količinom
    increaseBtn.addEventListener("click", ()=>updateQuantity(1));
    decreaseBtn.addEventListener("click", ()=>updateQuantity(-1));
    function updateQuantity(change) {
        quantity = quantity + change;
        if (quantity < 1) quantity = 1; // Sprečava negativne vrednosti
        quantityDisplay.textContent = quantity;
    }
    // Carousel functionality
    let currentIndex = 0;
    const carousel = document.querySelector(".carousel");
    const products = document.querySelectorAll(".carousel .product");
    const itemCount = products.length;
    // Funkcija koja određuje broj vidljivih elemenata na osnovu širine prozora
    const getVisibleItems = ()=>{
        const screenWidth = window.innerWidth;
        if (screenWidth <= 480) return 1; // Na ekranima do 480px prikazuje 1 stavku
        else if (screenWidth <= 771) return 2; // Na ekranima do 771px prikazuje 2 stavke
        return 3; // Na većim ekranima prikazuje 3 stavke
    };
    let visibleItems = getVisibleItems();
    // Prilagodi broj vidljivih stavki na promeni širine prozora
    window.addEventListener("resize", ()=>{
        visibleItems = getVisibleItems();
        updateCarousel();
    });
    const itemWidth = products[0].offsetWidth + parseInt(getComputedStyle(products[0]).marginRight);
    const updateCarousel = ()=>{
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };
    document.querySelector(".prev-btn").addEventListener("click", ()=>{
        if (currentIndex > 0) currentIndex--;
        else currentIndex = itemCount - visibleItems; // Idemo na poslednju stranicu
        updateCarousel();
    });
    document.querySelector(".next-btn").addEventListener("click", ()=>{
        if (currentIndex < itemCount - visibleItems) currentIndex++;
        else currentIndex = 0; // Vratimo se na početak
        updateCarousel();
    });
    // General open cart functionality for any element with class 'open-cart'
    document.querySelectorAll(".open-cart").forEach((element)=>{
        element.addEventListener("click", ()=>{
            cartSidebar.classList.add("open");
        });
    });
    // Add to cart functionality (updates cart content and opens cart)
    addToCartBtn.addEventListener("click", ()=>{
        totalQuantity += quantity;
        cartContent.innerHTML = `<p>${totalQuantity} item${totalQuantity > 1 ? "s" : ""} in your cart.</p>`;
        totalQuantityDisplay.textContent = totalQuantity;
        cartSidebar.classList.add("open");
    });
    // Close cart sidebar
    closeCartBtn.addEventListener("click", ()=>cartSidebar.classList.remove("open"));
    // Close sidebar when clicking outside
    document.addEventListener("click", (e)=>{
        if (!cartSidebar.contains(e.target) && !e.target.closest(".open-cart") && cartSidebar.classList.contains("open")) cartSidebar.classList.remove("open");
    });
    // Open/close mobile menu on hamburger click
    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("open");
        mobileNav.classList.toggle("open");
    });
});

//# sourceMappingURL=index.cea00a9b.js.map
