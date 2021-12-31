export default class BurgerMenu {
    constructor() {
        const elem = document.querySelector('.burger-menu-btn');
        const parent = document.querySelector('.header');
        
        const items = `
            <ul class = "burger-menu-list">
                <li class = "burger-menu-list__item">
                    <a href="#skills-link" id="skills">Skills</a>
                </li>
                <li class = "burger-menu-list__item">
                    <a href="#portfolio-link" id="portfolio">Portfolio</a>
                </li>
                <li class = "burger-menu-list__item">
                    <a href="#video-link" id="video">Video</a>
                </li>
                <li class = "burger-menu-list__item">
                    <a href="#price-link" id="price">Price</a>
                </li>
                <li class = "burger-menu-list__item">
                    <a href="#contacts-link" id="contacts">Contacts</a>
                </li>
            </ul>
        `;

        const menu = document.createElement('div');
        menu.classList.add('burger-menu');
        menu.innerHTML = items;
        parent.appendChild(menu);

        elem.addEventListener('click', () => menu.classList.toggle('burger-menu_opened'));
    }
};

BurgerMenu.prototype.changeState = function() {

};
