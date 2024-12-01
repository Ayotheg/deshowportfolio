document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    window.addEventListener("scroll", function() {
        if (sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
        }
    });

    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    const textWrapper = document.getElementById('text-wrapper');
    
    // Scroll step size
    const scrollAmount = 300; // Adjust based on the width of your text container

    scrollLeftBtn.addEventListener('click', function() {
        textWrapper.scrollBy({
            left: -scrollAmount, // Scroll left by the specified amount
            behavior: 'smooth' // Smooth scrolling
        });
    });

    scrollRightBtn.addEventListener('click', function() {
        textWrapper.scrollBy({
            left: scrollAmount, // Scroll right by the specified amount
            behavior: 'smooth'
        });
    });
});

ument.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Close other accordion items
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.maxHeight = null;
            }
        });

        // Toggle the current accordion content
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Close if already open
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // Expand
        }
    });
});





