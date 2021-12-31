import Image1 from '../assets/header/burger-visited.svg';
import Image2 from '../assets/header/burger-unvisited.svg';


export default class BurgerMenu {
    constructor() {
        const btn = document.querySelector('.burger-menu-btn');
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
        menu.addEventListener('click', () => this.changeState(menu, btn));
        menu.innerHTML = items;
        parent.appendChild(menu);

        btn.addEventListener('click', () => {
            this.changeState(menu, btn);
        });
    }
};

BurgerMenu.prototype.changeState = function(menu, btn) {
    menu.classList.toggle('burger-menu_opened');
    btn.style.backgroundImage = menu.classList.contains('burger-menu_opened') ? `url(${Image1})` : `url(${Image2})`;
};
