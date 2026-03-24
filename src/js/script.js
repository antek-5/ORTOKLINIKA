
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

        if (slideShowPages.length <= 1) {
            return;
        }

        const firstSlideClone = slideShowPages[0].cloneNode(true);
        slideShowTrack.appendChild(firstSlideClone);

        const slideCount = slideShowPages.length;
        const slideDurationMs = 7000;
        const slideTransition = 'transform 0.8s ease';
        let currentPage = 0;

        slideShowTrack.style.transition = slideTransition;

        setInterval(() => {
            currentPage += 1;
            slideShowTrack.style.transform = `translateX(-${currentPage * 100}%)`;
        }, slideDurationMs);

        slideShowTrack.addEventListener('transitionend', () => {
            if (currentPage !== slideCount) {
                return;
            }

            // After animating to the cloned first slide, jump back to real first slide without animation.
            slideShowTrack.style.transition = 'none';
            currentPage = 0;
            slideShowTrack.style.transform = 'translateX(0%)';

            // Force reflow so the browser applies the non-animated position before restoring transition.
            slideShowTrack.offsetHeight;
            slideShowTrack.style.transition = slideTransition;
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