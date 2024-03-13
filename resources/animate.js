function isInViewpoint(element) {
    var rect = element.getBoundingClientRect();
    var viewpointHeight = window.innerHeight || documentElement.clientHeight;
    return (
        rect.top >= -100 &&
        rect.left >= 0 &&
        rect.bottom <= (viewpointHeight + 150) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var elements = document.querySelectorAll('.horizon_img');

    elements.forEach(function(element) {
        if (isInViewpoint(element)) {
            element.classList.remove('normal');
            element.classList.add('animation_start');
        } else {
            element.classList.add('normal');
            element.classList.remove('animation_start');

        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check on page load
window.addEventListener('load', handleScroll);