
const initSlider = {

    initSlider: function() {
        const container = document.querySelector('.sliderBox-container');
        document.querySelector('.slider').addEventListener('input', (e) => {
        container.style.setProperty('-position', `${e.target.value}`)
        })
    }

}

export default initSlider;