import i18Obj from "./translation-data";

export default class Translator {
    constructor () {
        this.elems = [];
        this.currLang = 'en';

        const keys = Object.keys(i18Obj['en']);
        keys.forEach((key) => {
            const elems = document.querySelectorAll(`#${key}`);
            elems.forEach((elem) => this.elems.push(elem));
        });
        
        const btns = document.querySelectorAll('.lang-switch');
        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                console.log(btns, btn);
                btns.forEach((btn) => btn.style.color = 'white');
                btn.style.color = '#bdae82';
                this.changeLang(btn.textContent);
            });
        });
    }
};

Translator.prototype.changeLang = function(lang) {
    this.currLang = lang;
    this.setText();
};

Translator.prototype.setText = function() {
    this.elems.forEach((elem) => {
        elem.textContent = i18Obj[this.currLang][elem.id];
    });  
};