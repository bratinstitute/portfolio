document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "./images/thesis/scans/02-03.webp",
        "./images/thesis/scans/04-05.webp",
        "./images/thesis/scans/06-07.webp",
        "./images/thesis/scans/08-09.webp",
        "./images/thesis/scans/10-11.webp",
        "./images/thesis/scans/12-13.webp",
        "./images/thesis/scans/14-15.webp",
        "./images/thesis/scans/16-17.webp",
        "./images/thesis/scans/18-19.webp",
        "./images/thesis/scans/20-21.webp",
        "./images/thesis/scans/22-23.webp",
        "./images/thesis/scans/24-25.webp",
        "./images/thesis/scans/26-27.webp",
        "./images/thesis/scans/28-29.webp",
        "./images/thesis/scans/30-31.webp",
        "./images/thesis/scans/32-33.webp",
        "./images/thesis/scans/34-35.webp",
        "./images/thesis/scans/36-37.webp",
        "./images/thesis/scans/38-39.webp",
        "./images/thesis/scans/40-41.webp",
        "./images/thesis/scans/42-43.webp",
        "./images/thesis/scans/44-45.webp",
        "./images/thesis/scans/46-47.webp",
        "./images/thesis/scans/48-49.webp",
        "./images/thesis/scans/50-51.webp",
        "./images/thesis/scans/52-53.webp",
        "./images/thesis/scans/54-55.webp",
        "./images/thesis/scans/56-57.webp",
        "./images/thesis/scans/58-59.webp",
        "./images/thesis/scans/60-61.webp",
        "./images/thesis/scans/62-63.webp",
        "./images/thesis/scans/64-back.webp"
    ];

    let current = 0;
    const img = document.getElementById('carousel-image');
    const prev = document.getElementById('carousel-prev');
    const next = document.getElementById('carousel-next');

    function updateCarousel() {
        img.src = images[current];
        prev.disabled = current === 0;
        next.disabled = current === images.length - 1;
    }

    prev.addEventListener('click', () => {
        if (current > 0) {
            current--;
            updateCarousel();
        }
    });

    next.addEventListener('click', () => {
        if (current < images.length - 1) {
            current++;
            updateCarousel();
        }
    });

    updateCarousel();

    // Mobile carousel images (01-cover.webp as first image)
    const mobileImages = [
        "./images/thesis/scans/01-cover.webp",
        "./images/thesis/scans/02-03.webp",
        "./images/thesis/scans/04-05.webp",
        "./images/thesis/scans/06-07.webp",
        "./images/thesis/scans/08-09.webp",
        "./images/thesis/scans/10-11.webp",
        "./images/thesis/scans/12-13.webp",
        "./images/thesis/scans/14-15.webp",
        "./images/thesis/scans/16-17.webp",
        "./images/thesis/scans/18-19.webp",
        "./images/thesis/scans/20-21.webp",
        "./images/thesis/scans/22-23.webp",
        "./images/thesis/scans/24-25.webp",
        "./images/thesis/scans/26-27.webp",
        "./images/thesis/scans/28-29.webp",
        "./images/thesis/scans/30-31.webp",
        "./images/thesis/scans/32-33.webp",
        "./images/thesis/scans/34-35.webp",
        "./images/thesis/scans/36-37.webp",
        "./images/thesis/scans/38-39.webp",
        "./images/thesis/scans/40-41.webp",
        "./images/thesis/scans/42-43.webp",
        "./images/thesis/scans/44-45.webp",
        "./images/thesis/scans/46-47.webp",
        "./images/thesis/scans/48-49.webp",
        "./images/thesis/scans/50-51.webp",
        "./images/thesis/scans/52-53.webp",
        "./images/thesis/scans/54-55.webp",
        "./images/thesis/scans/56-57.webp",
        "./images/thesis/scans/58-59.webp",
        "./images/thesis/scans/60-61.webp",
        "./images/thesis/scans/62-63.webp",
        "./images/thesis/scans/64-back.webp"
    ];

    const mobileImg = document.getElementById('mobile-carousel-image');
    const mobilePrev = document.getElementById('mobile-carousel-prev');
    const mobileNext = document.getElementById('mobile-carousel-next');
    let mobileCurrent = 0;

    function updateMobileCarousel() {
        if (!mobileImg) return;
        mobileImg.src = mobileImages[mobileCurrent];
        mobilePrev.disabled = mobileCurrent === 0;
        mobileNext.disabled = mobileCurrent === mobileImages.length - 1;
    }

    if (mobilePrev && mobileNext && mobileImg) {
        mobilePrev.addEventListener('click', () => {
            if (mobileCurrent > 0) {
                mobileCurrent--;
                updateMobileCarousel();
            }
        });

        mobileNext.addEventListener('click', () => {
            if (mobileCurrent < mobileImages.length - 1) {
                mobileCurrent++;
                updateMobileCarousel();
            }
        });

        updateMobileCarousel();
    }
});

$(document).ready(function(){
	setMarqueeContents();
});

$(window).resize(function(){
	setMarqueeContents();
});

function setMarqueeContents(){
	let windowWidth = $(window).innerWidth(); // Width of the window
	let textWidth = $('.marquee__content > .marquee__text').outerWidth(); // Width of the text
	let numberOfCopies = Math.ceil(windowWidth / textWidth) + 1; // enough copies to fill the window plus one
	
	$('.marquee').css('--textWidth', textWidth); // Assign the text width as a CSS variable to compute the animation
	
	$('.marquee__copies').html(""); // Clear the marquee copies container
	
	for(var i = 0; i < numberOfCopies; i++){ // Fill the copies container with extra copies of the text
    $('.marquee__content > .marquee__text').clone().appendTo('.marquee__copies');
	}
}

         function getCategories(item) {
            return (item.getAttribute('data-category') || '')
               .split(/\s*,\s*|\s+/)
               .filter(Boolean);
         }

         function itemMatchesCategory(item, category) {
            return getCategories(item).includes(category);
         }

         function showItem(item) {
            item.classList.remove('hidden-by-filter');
            requestAnimationFrame(() => {
               item.classList.remove('filter-hidden');
            });
         }

         function hideItem(item) {
            if (item.classList.contains('hidden-by-filter') || item.classList.contains('filter-hidden')) return;
            item.classList.add('filter-hidden');

            function handleTransitionEnd(event) {
               if (event.propertyName !== 'opacity') return;
               item.removeEventListener('transitionend', handleTransitionEnd);
               if (item.classList.contains('filter-hidden')) {
                  item.classList.add('hidden-by-filter');
               }
            }

            item.addEventListener('transitionend', handleTransitionEnd);
         }

         function filterItems(category) {
            const items = document.querySelectorAll('.wrapper');
            const links = document.querySelectorAll('.filter-link[data-category]');

            items.forEach(item => {
               if (category === 'all' || itemMatchesCategory(item, category)) {
                  showItem(item);
               } else {
                  hideItem(item);
               }
            });

            links.forEach(link => {
               link.classList.toggle('selected', link.dataset.category === category);
            });
         }

         function getCategoryFromURL() {
            const params = new URLSearchParams(window.location.search);
            return params.get('category') || 'all';
         }

         function bindFilterLinks() {
            const links = document.querySelectorAll('.filter-link[data-category]');
            links.forEach(link => {
               link.addEventListener('click', event => {
                  event.preventDefault();
                  const category = link.dataset.category || 'all';
                  history.pushState(null, '', `?category=${category}`);
                  filterItems(category);
               });
            });
         }

         window.addEventListener('popstate', () => {
            const category = getCategoryFromURL();
            filterItems(category);
         });

         document.addEventListener('DOMContentLoaded', () => {
            bindFilterLinks();
            const category = getCategoryFromURL();
            if (category === 'all') {
               filterItems(category);
            } else {
               window.requestAnimationFrame(() => {
                  window.requestAnimationFrame(() => filterItems(category));
               });
            }
         });