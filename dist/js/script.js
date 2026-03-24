
// const settings = {
//     db: {
//         urlReviews: 'https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews',
//     }
// }

const pageApp = {

    initAll: function() {

        const thisPageApp = this;

        // thisPageApp.initReviews();
        // thisPageApp.initSlider();
        thisPageApp.initSlideShow();
        thisPageApp.initManualSlideShow();
        thisPageApp.initAccordion();


    },

    initSlider: function() {

        const sliderBoxContainer = document.querySelector('.sliderBox');
        // console.log('sliderBoxContainer', sliderBoxContainer);


        document.querySelector('.slider').addEventListener('input', (e) => {
            e.preventDefault();
            console.log('e.target.value', e.target.value);
            sliderBoxContainer.style.setProperty('--position', `${e.target.value}%`);

            

        });

    },

    initSlideShow: function() {

        const slideShowTrack = document.querySelector('.slide-show-track');


        if (!slideShowTrack) {
            return;
        }

        const slideShowPages = slideShowTrack.querySelectorAll('.slide-show-page');

        if (slideShowPages.length <= 2) {
            return;
        }

        // Last slide is a copy of the first slide added in HTML.
        const copiedFirstSlideIndex = slideShowPages.length - 1;
        const slideDurationMs = 7000;
        const slideTransition = 'transform 0.8s ease';
        let currentPage = 0;

        slideShowTrack.style.transition = slideTransition;

        setInterval(() => {
            currentPage += 1;
            slideShowTrack.style.transform = `translateX(-${currentPage * 100}%)`;
        }, slideDurationMs);

        slideShowTrack.addEventListener('transitionend', () => {
            if (currentPage !== copiedFirstSlideIndex) {
                return;
            }

            // After animating to copied first slide, jump to real first slide with no animation.
            slideShowTrack.style.transition = 'none';
            currentPage = 0;
            slideShowTrack.style.transform = 'translateX(0%)';

            // Force reflow so the browser applies the non-animated position before restoring transition.
            slideShowTrack.offsetHeight;
            slideShowTrack.style.transition = slideTransition;
        });
    },

    initManualSlideShow: function() {

        const manualSlideShow = document.querySelector('.manual-slide-show');

        if (!manualSlideShow) {
            return;
        }

        const slideShowTrack = manualSlideShow.querySelector('.manual-slide-show-track');
        const slideShowPages = manualSlideShow.querySelectorAll('.manual-slide-show-page');
        const previousButton = manualSlideShow.querySelector('.manual-slide-show-prev');
        const nextButton = manualSlideShow.querySelector('.manual-slide-show-next');

        if (!slideShowTrack || slideShowPages.length <= 1 || !previousButton || !nextButton) {
            return;
        }

        const pageCount = slideShowPages.length;
        const transitionValue = 'transform 0.5s ease';
        const firstClone = slideShowPages[0].cloneNode(true);
        const lastClone = slideShowPages[pageCount - 1].cloneNode(true);
        let currentPage = 1;
        let isAnimating = false;

        slideShowTrack.insertBefore(lastClone, slideShowPages[0]);
        slideShowTrack.appendChild(firstClone);
        slideShowTrack.style.transition = 'none';
        slideShowTrack.style.transform = `translateX(-${currentPage * 100}%)`;
        slideShowTrack.offsetHeight;
        slideShowTrack.style.transition = transitionValue;

        const showCurrentPage = () => {
            slideShowTrack.style.transform = `translateX(-${currentPage * 100}%)`;
        };

        previousButton.addEventListener('click', () => {
            if (isAnimating) {
                return;
            }

            isAnimating = true;
            currentPage -= 1;
            showCurrentPage();
        });

        nextButton.addEventListener('click', () => {
            if (isAnimating) {
                return;
            }

            isAnimating = true;
            currentPage += 1;
            showCurrentPage();
        });

        slideShowTrack.addEventListener('transitionend', () => {
            if (currentPage === 0) {
                slideShowTrack.style.transition = 'none';
                currentPage = pageCount;
                showCurrentPage();
                slideShowTrack.offsetHeight;
                slideShowTrack.style.transition = transitionValue;
            }

            if (currentPage === pageCount + 1) {
                slideShowTrack.style.transition = 'none';
                currentPage = 1;
                showCurrentPage();
                slideShowTrack.offsetHeight;
                slideShowTrack.style.transition = transitionValue;
            }

            isAnimating = false;
        });
    },

    initAccordion: function() {
    
        /* find the clickable trigger (the element that should react to clicking) */
        const clickableTriggers = document.querySelectorAll(".accordion");
    
        for (let accordion of clickableTriggers) {
            /* START: add event listener to clickable trigger on event click */
            accordion.addEventListener('click', function(event) {
            /* prevent default action for event */
            event.preventDefault();

            /* find active product (product that has active class) */
            const activeProduct = document.querySelector(".accordion.active");

            if(activeProduct){

            /* if there is active product and it's not thisProduct.element, remove class active from it */
            if(activeProduct != accordion){
                activeProduct.classList.remove("active");
            }

            }

            /* toggle active class on thisProduct.element */
            accordion.classList.toggle("active");

        });
        }

        
    }

    //     initReviews: function() {

    //         const thisPageApp = this;

    //         const url = settings.db.url + '/' + settings.db.products;
    //         this.data = {};

    //         fetch(url)
    //             .then((rawResponse) => {
    //                 return rawResponse.json();
    //             })
    //             .then((parsedResponse) => {
    //                 this.data.reviewsData = parsedResponse;
    //                 thisPageApp.data = {
    //                     reviewsData: parsedResponse
    //                 }
    //                 //thisPageApp.initProductsPage();
    //             });

    //         // rest of init..
    //         setTimeout(() => {

    //             //console.log('thisPageApp.data.products', thisPageApp.data.products)
                
    //             thisPageApp.initAboutUsPage();
    //             thisPageApp.initContactUsPage();

    //             pageApp.initPages();

    //         }, 20);
            
            
    //     }
}

pageApp.initAll();