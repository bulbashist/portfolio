export default class Portfolio {
    constructor() {
        this.seasons = ['winter', 'spring', 'summer', 'autumn'];
    }
};

Portfolio.prototype.changeImg = function(season) {
    const elems = document.querySelectorAll('.portfolio-photos__img');
    elems.forEach((elem, index) => {
        const img = new Image();
        img.src = require(`../assets/portfolio/${season}/${index + 1}.jpg`);
        img.onload = () => elem.src = img.src;
    });
}

Portfolio.prototype.addListeners = function() {
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
            this.changeImg(this.seasons[index]);
        });
    });
}