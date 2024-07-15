
// const settings = {
//     db: {
//         urlReviews: 'https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews',
//     }
// }

const pageApp = {

    initAll: function() {

        const thisPageApp = this;

        // thisPageApp.initReviews();
        thisPageApp.initSlider();


    },

    initSlider: function() {

        const sliderBoxContainer = document.querySelector('.sliderBox');
        // console.log('sliderBoxContainer', sliderBoxContainer);


        document.querySelector('.slider').addEventListener('input', (e) => {
            e.preventDefault();
            console.log('e.target.value', e.target.value);
            sliderBoxContainer.style.setProperty('--position', `${e.target.value}`);

            

        });

    },

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