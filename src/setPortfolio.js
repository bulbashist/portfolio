export default class Portfolio {
    constructor() {

    }
};

Portfolio.prototype.changeImg = function(season) {
    const elems = document.querySelectorAll('.portfolio-photos__img');
    elems.forEach((elem, index) => {
        elem.src = require(`../assets/portfolio/seasons/${season}/${index + 1}.jpg`);
    });
}

Portfolio.prototype.addListeners = function() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    const elems = document.querySelectorAll('.portfolio-panel__btn');
    const goldColor = '#bdae82';

    elems.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            elems.forEach((elem) => {
                elem.style.backgroundColor = 'black';
                elem.style.color = goldColor;
            });
            elem.style.backgroundColor = goldColor;
            elem.style.color = 'black';
            this.changeImg(seasons[index]);
        });
    });
}