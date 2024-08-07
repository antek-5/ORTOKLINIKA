
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