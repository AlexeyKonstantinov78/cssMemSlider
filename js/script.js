'use strict';

const sliderControlPanelIndicators = document.querySelector('.slider-control__panel-indicators');

// получение активного слайдера
const activSlider = () => {
    const sliderWrapperItem = document.querySelectorAll('.slider-wrapper__item');
    let altText = '',
        ind = 0;

    sliderWrapperItem.forEach((sliderItem, index) => {
        if (sliderItem.classList.contains('img-activ')) {
            altText = sliderItem.childNodes[1].alt;
            ind = index;
        }
    });
    return [sliderWrapperItem, altText, ind];
}

const activLi = () => {
    const sliderControlPanelIndicatorsLi = document.querySelectorAll('.slider-control__panel-indicators-li');
    let ind = 0;

    sliderControlPanelIndicatorsLi.forEach((li, index) => {
        if (li.classList.contains('li-activ')) {
            ind = index;
        }
    });
    return [sliderControlPanelIndicatorsLi, ind];
}

//добавление подписи
const setTextContent = () => {
    const sliderControlPanelInfoP = document.querySelector('.slider-control__panel-info-p');

    let [arr, altText, ind] = activSlider();

    sliderControlPanelInfoP.style.opacity = 0;

    setTimeout(() => {
        sliderControlPanelInfoP.textContent = altText;
        sliderControlPanelInfoP.style.opacity = 1;
    }, 500);
};

// изменение активного слайдера
const changingActiveSlider = (item) => {
    let [arr, altText, ind] = activSlider();

    if (ind !== item) {
        arr[ind].classList.remove('img-activ');
        arr[item].classList.add('img-activ');
        setTextContent();
    }

}

// изменение активного индикатора
const changingActiveIndicators = (index) => {

    let [arr, ind] = activLi();

    if (ind !== index) {
        arr[ind].classList.remove('li-activ');
        arr[index].classList.add('li-activ');
    }

};

sliderControlPanelIndicators.addEventListener('click', (event) => {
    let target = event.target;


    if (target.closest('.slider-control__panel-indicators-li')) {
        if (target.dataset.slide === undefined) {
            changingActiveSlider(target.parentNode.dataset.slide);
            changingActiveIndicators(target.parentNode.dataset.slide);
        } else {
            changingActiveSlider(target.dataset.slide);
            changingActiveIndicators(target.dataset.slide);
        }
    }

});

setTextContent();