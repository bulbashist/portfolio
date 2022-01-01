/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/portfolio sync recursive ^\\.\\/.*\\/.*\\.jpg$":
/*!**************************************************!*\
  !*** ./assets/portfolio/ sync ^\.\/.*\/.*\.jpg$ ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./autumn/1.jpg\": \"./assets/portfolio/autumn/1.jpg\",\n\t\"./autumn/2.jpg\": \"./assets/portfolio/autumn/2.jpg\",\n\t\"./autumn/3.jpg\": \"./assets/portfolio/autumn/3.jpg\",\n\t\"./autumn/4.jpg\": \"./assets/portfolio/autumn/4.jpg\",\n\t\"./autumn/5.jpg\": \"./assets/portfolio/autumn/5.jpg\",\n\t\"./autumn/6.jpg\": \"./assets/portfolio/autumn/6.jpg\",\n\t\"./spring/1.jpg\": \"./assets/portfolio/spring/1.jpg\",\n\t\"./spring/2.jpg\": \"./assets/portfolio/spring/2.jpg\",\n\t\"./spring/3.jpg\": \"./assets/portfolio/spring/3.jpg\",\n\t\"./spring/4.jpg\": \"./assets/portfolio/spring/4.jpg\",\n\t\"./spring/5.jpg\": \"./assets/portfolio/spring/5.jpg\",\n\t\"./spring/6.jpg\": \"./assets/portfolio/spring/6.jpg\",\n\t\"./summer/1.jpg\": \"./assets/portfolio/summer/1.jpg\",\n\t\"./summer/2.jpg\": \"./assets/portfolio/summer/2.jpg\",\n\t\"./summer/3.jpg\": \"./assets/portfolio/summer/3.jpg\",\n\t\"./summer/4.jpg\": \"./assets/portfolio/summer/4.jpg\",\n\t\"./summer/5.jpg\": \"./assets/portfolio/summer/5.jpg\",\n\t\"./summer/6.jpg\": \"./assets/portfolio/summer/6.jpg\",\n\t\"./winter/1.jpg\": \"./assets/portfolio/winter/1.jpg\",\n\t\"./winter/2.jpg\": \"./assets/portfolio/winter/2.jpg\",\n\t\"./winter/3.jpg\": \"./assets/portfolio/winter/3.jpg\",\n\t\"./winter/4.jpg\": \"./assets/portfolio/winter/4.jpg\",\n\t\"./winter/5.jpg\": \"./assets/portfolio/winter/5.jpg\",\n\t\"./winter/6.jpg\": \"./assets/portfolio/winter/6.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./assets/portfolio sync recursive ^\\\\.\\\\/.*\\\\/.*\\\\.jpg$\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/_sync_^\\.\\/.*\\/.*\\.jpg$?");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./styles/style.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _set_portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-portfolio */ \"./src/set-portfolio.js\");\n/* harmony import */ var _translator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translator */ \"./src/translator.js\");\n/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burger-menu */ \"./src/burger-menu.js\");\n\r\n\r\n\r\n\r\n\r\nnew _burger_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nnew _set_portfolio__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nnew _translator__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n//# sourceURL=webpack://portfolio/./src/app.js?");

/***/ }),

/***/ "./src/burger-menu.js":
/*!****************************!*\
  !*** ./src/burger-menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BurgerMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_header_burger_visited_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/header/burger-visited.svg */ \"./assets/header/burger-visited.svg\");\n/* harmony import */ var _assets_header_burger_unvisited_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/header/burger-unvisited.svg */ \"./assets/header/burger-unvisited.svg\");\n\r\n\r\n\r\n\r\nclass BurgerMenu {\r\n    constructor() {\r\n        const btn = document.querySelector('.burger-menu-btn');\r\n        const parent = document.querySelector('.header');\r\n        \r\n        const items = `\r\n            <ul class = \"burger-menu-list\">\r\n                <li class = \"burger-menu-list__item\">\r\n                    <a href=\"#skills-link\" id=\"skills\">Skills</a>\r\n                </li>\r\n                <li class = \"burger-menu-list__item\">\r\n                    <a href=\"#portfolio-link\" id=\"portfolio\">Portfolio</a>\r\n                </li>\r\n                <li class = \"burger-menu-list__item\">\r\n                    <a href=\"#video-link\" id=\"video\">Video</a>\r\n                </li>\r\n                <li class = \"burger-menu-list__item\">\r\n                    <a href=\"#price-link\" id=\"price\">Price</a>\r\n                </li>\r\n                <li class = \"burger-menu-list__item\">\r\n                    <a href=\"#contacts-link\" id=\"contacts\">Contacts</a>\r\n                </li>\r\n            </ul>\r\n        `;\r\n\r\n        const menu = document.createElement('div');\r\n        menu.classList.add('burger-menu');\r\n        menu.addEventListener('click', () => this.changeState(menu, btn));\r\n        menu.innerHTML = items;\r\n        parent.appendChild(menu);\r\n\r\n        btn.addEventListener('click', () => {\r\n            this.changeState(menu, btn);\r\n        });\r\n    }\r\n};\r\n\r\nBurgerMenu.prototype.changeState = function(menu, btn) {\r\n    menu.classList.toggle('burger-menu_opened');\r\n    btn.style.backgroundImage = menu.classList.contains('burger-menu_opened') ? `url(${_assets_header_burger_visited_svg__WEBPACK_IMPORTED_MODULE_0__})` : `url(${_assets_header_burger_unvisited_svg__WEBPACK_IMPORTED_MODULE_1__})`;\r\n};\r\n\n\n//# sourceURL=webpack://portfolio/./src/burger-menu.js?");

/***/ }),

/***/ "./src/set-portfolio.js":
/*!******************************!*\
  !*** ./src/set-portfolio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Portfolio)\n/* harmony export */ });\nclass Portfolio {\r\n    constructor() {\r\n        this.seasons = ['winter', 'spring', 'summer', 'autumn'];\r\n        this.addListeners();\r\n    }\r\n};\r\n\r\nPortfolio.prototype.changeImg = function(season) {\r\n    const elems = document.querySelectorAll('.portfolio-photos__img');\r\n    elems.forEach((elem, index) => {\r\n        const img = new Image();\r\n        img.src = __webpack_require__(\"./assets/portfolio sync recursive ^\\\\.\\\\/.*\\\\/.*\\\\.jpg$\")(`./${season}/${index + 1}.jpg`);\r\n        img.onload = () => elem.src = img.src;\r\n    });\r\n}\r\n\r\nPortfolio.prototype.addListeners = function() {\r\n    const elems = document.querySelectorAll('.portfolio-panel__btn');\r\n    const goldColor = '#bdae82';\r\n\r\n    elems.forEach((elem, index) => {\r\n        elem.addEventListener('click', () => {\r\n            elems.forEach((elem) => {\r\n                elem.style.backgroundColor = 'black';\r\n                elem.style.color = goldColor;\r\n            });\r\n            elem.style.backgroundColor = goldColor;\r\n            elem.style.color = 'black';\r\n            this.changeImg(this.seasons[index]);\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://portfolio/./src/set-portfolio.js?");

/***/ }),

/***/ "./src/translation-data.js":
/*!*********************************!*\
  !*** ./src/translation-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst i18Obj = {\r\n    'en': {\r\n        'skills': 'Skills',\r\n        'portfolio': 'Portfolio',\r\n        'video': 'Video',\r\n        'price': 'Price',\r\n        'contacts': 'Contacts',\r\n        'hero-title': 'Alexa Rise',\r\n        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',\r\n        'hire': 'Hire me',\r\n        'skill-title-1': 'Digital photography',\r\n        'skill-text-1': 'High-quality photos in the studio and on the nature',\r\n        'skill-title-2': 'Video shooting',\r\n        'skill-text-2': 'Capture your moments so that they always stay with you',\r\n        'skill-title-3': 'Rotouch',\r\n        'skill-text-3': 'I strive to make photography surpass reality',\r\n        'skill-title-4': 'Audio',\r\n        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',\r\n        'winter': 'Winter',\r\n        'spring': 'Spring',\r\n        'summer': 'Summer',\r\n        'autumn': 'Autumn',\r\n        'price-descripton-1-span-1': 'One location',\r\n        'price-descripton-1-span-2': '120 photos in color',\r\n        'price-descripton-1-span-3': '12 photos in retouch',\r\n        'price-descripton-1-span-4': 'Readiness 2-3 weeks',\r\n        'price-descripton-1-span-5': 'Make up, visage',\r\n        'price-descripton-2-span-1': 'One or two locations',\r\n        'price-descripton-2-span-2': '200 photos in color',\r\n        'price-descripton-2-span-3': '20 photos in retouch',\r\n        'price-descripton-2-span-4': 'Readiness 1-2 weeks',\r\n        'price-descripton-2-span-5': 'Make up, visage',\r\n        'price-descripton-3-span-1': 'Tree locations or more',\r\n        'price-descripton-3-span-2': '300 photos in color',\r\n        'price-descripton-3-span-3': '50 photos in retouch',\r\n        'price-descripton-3-span-4': 'Readiness 1 weeks',\r\n        'price-descripton-3-span-5': 'Make up, visage, hairstyle',\r\n        'order': 'Order shooting',\r\n        'contact-me': 'Contact with me',\r\n        'send-message': 'Send message'\r\n    },\r\n    'ru': {\r\n        'skills': 'Навыки',\r\n        'portfolio': 'Портфолио',\r\n        'video': 'Видео',\r\n        'price': 'Цены',\r\n        'contacts': 'Контакты',\r\n        'hero-title': 'Алекса Райс',\r\n        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',\r\n        'hire': 'Пригласить',\r\n        'skill-title-1': 'Фотография',\r\n        'skill-text-1': 'Высококачественные фото в студии и на природе',\r\n        'skill-title-2': 'Видеосъемка',\r\n        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',\r\n        'skill-title-3': 'Ретушь',\r\n        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',\r\n        'skill-title-4': 'Звук',\r\n        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',\r\n        'winter': 'Зима',\r\n        'spring': 'Весна',\r\n        'summer': 'Лето',\r\n        'autumn': 'Осень',\r\n        'price-descripton-1-span-1': 'Одна локация',\r\n        'price-descripton-1-span-2': '120 цветных фото',\r\n        'price-descripton-1-span-3': '12 отретушированных фото',\r\n        'price-descripton-1-span-4': 'Готовность через 2-3 недели',\r\n        'price-descripton-1-span-5': 'Макияж, визаж',\r\n        'price-descripton-2-span-1': 'Одна-две локации',\r\n        'price-descripton-2-span-2': '200 цветных фото',\r\n        'price-descripton-2-span-3': '20 отретушированных фото',\r\n        'price-descripton-2-span-4': 'Готовность через 1-2 недели',\r\n        'price-descripton-2-span-5': 'Макияж, визаж',\r\n        'price-descripton-3-span-1': 'Три локации и больше',\r\n        'price-descripton-3-span-2': '300 цветных фото',\r\n        'price-descripton-3-span-3': '50 отретушированных фото',\r\n        'price-descripton-3-span-4': 'Готовность через 1 неделю',\r\n        'price-descripton-3-span-5': 'Макияж, визаж, прическа',\r\n        'order': 'Заказать съемку',\r\n        'contact-me': 'Свяжитесь со мной',\r\n        'send-message': 'Отправить'\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18Obj);\n\n//# sourceURL=webpack://portfolio/./src/translation-data.js?");

/***/ }),

/***/ "./src/translator.js":
/*!***************************!*\
  !*** ./src/translator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Translator)\n/* harmony export */ });\n/* harmony import */ var _translation_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation-data */ \"./src/translation-data.js\");\n\r\n\r\nclass Translator {\r\n    constructor () {\r\n        this.elems = [];\r\n        this.currLang = 'en';\r\n\r\n        const keys = Object.keys(_translation_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].en);\r\n        keys.forEach((key) => {\r\n            const elems = document.querySelectorAll(`#${key}`);\r\n            elems.forEach((elem) => this.elems.push(elem));\r\n        });\r\n        \r\n        const btns = document.querySelectorAll('.lang-switch');\r\n        btns.forEach((btn) => {\r\n            btn.addEventListener('click', () => {\r\n                btns.forEach((btn) => btn.style.color = 'white');\r\n                btn.style.color = '#bdae82';\r\n                this.changeLang(btn.textContent);\r\n            });\r\n        });\r\n    }\r\n};\r\n\r\nTranslator.prototype.changeLang = function(lang) {\r\n    this.currLang = lang;\r\n    this.setText();\r\n};\r\n\r\nTranslator.prototype.setText = function() {\r\n    this.elems.forEach((elem) => {\r\n        elem.textContent = _translation_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][this.currLang][elem.id];\r\n    });  \r\n};\n\n//# sourceURL=webpack://portfolio/./src/translator.js?");

/***/ }),

/***/ "./assets/header/burger-unvisited.svg":
/*!********************************************!*\
  !*** ./assets/header/burger-unvisited.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/5bbe000fdc77d5e18697.svg\";\n\n//# sourceURL=webpack://portfolio/./assets/header/burger-unvisited.svg?");

/***/ }),

/***/ "./assets/header/burger-visited.svg":
/*!******************************************!*\
  !*** ./assets/header/burger-visited.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/0a0c20f90104deb513c8.svg\";\n\n//# sourceURL=webpack://portfolio/./assets/header/burger-visited.svg?");

/***/ }),

/***/ "./assets/portfolio/autumn/1.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/autumn/1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ae080d0d830094380976.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/autumn/1.jpg?");

/***/ }),

/***/ "./assets/portfolio/autumn/2.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/autumn/2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bd62ceb226bd0719714f.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/autumn/2.jpg?");

/***/ }),

/***/ "./assets/portfolio/autumn/3.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/autumn/3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/b30fa9e217ce8daad4bb.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/autumn/3.jpg?");

/***/ }),

/***/ "./assets/portfolio/autumn/4.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/autumn/4.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/14cd7361b550b49e3ca6.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/autumn/4.jpg?");

/***/ }),

/***/ "./assets/portfolio/autumn/5.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/autumn/5.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/719dc056af42abf741d7.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/autumn/5.jpg?");

/***/ }),

/***/ "./assets/portfolio/autumn/6.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/autumn/6.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/16c20cdb397b7316c5ae.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/autumn/6.jpg?");

/***/ }),

/***/ "./assets/portfolio/spring/1.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/spring/1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/244e25552499ef67df63.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/spring/1.jpg?");

/***/ }),

/***/ "./assets/portfolio/spring/2.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/spring/2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/39ab86b330a27f7e46e4.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/spring/2.jpg?");

/***/ }),

/***/ "./assets/portfolio/spring/3.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/spring/3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/9e76c7fef3cb0f85b6ea.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/spring/3.jpg?");

/***/ }),

/***/ "./assets/portfolio/spring/4.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/spring/4.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/fc04f1c5bc0ffe0fc918.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/spring/4.jpg?");

/***/ }),

/***/ "./assets/portfolio/spring/5.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/spring/5.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/3116b7ea37aac40cd4be.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/spring/5.jpg?");

/***/ }),

/***/ "./assets/portfolio/spring/6.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/spring/6.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/775f43963c529f553444.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/spring/6.jpg?");

/***/ }),

/***/ "./assets/portfolio/summer/1.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/summer/1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/707575b82645a5cbfe88.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/summer/1.jpg?");

/***/ }),

/***/ "./assets/portfolio/summer/2.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/summer/2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/178273b1669482941c32.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/summer/2.jpg?");

/***/ }),

/***/ "./assets/portfolio/summer/3.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/summer/3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/62f114b930f0164803ef.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/summer/3.jpg?");

/***/ }),

/***/ "./assets/portfolio/summer/4.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/summer/4.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c3deaedaff259bfe6e03.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/summer/4.jpg?");

/***/ }),

/***/ "./assets/portfolio/summer/5.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/summer/5.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bfb29448e5a9f3535e98.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/summer/5.jpg?");

/***/ }),

/***/ "./assets/portfolio/summer/6.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/summer/6.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/6c0651e033ddbb8180f2.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/summer/6.jpg?");

/***/ }),

/***/ "./assets/portfolio/winter/1.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/winter/1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/31582533d48431b81d31.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/winter/1.jpg?");

/***/ }),

/***/ "./assets/portfolio/winter/2.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/winter/2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/703c964bc8ce568bd3d4.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/winter/2.jpg?");

/***/ }),

/***/ "./assets/portfolio/winter/3.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/winter/3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/95df0f80f7a7d49222b5.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/winter/3.jpg?");

/***/ }),

/***/ "./assets/portfolio/winter/4.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/winter/4.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/f64393fbce38150fad8d.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/winter/4.jpg?");

/***/ }),

/***/ "./assets/portfolio/winter/5.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/winter/5.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/a3cc864c1bfb5e7297e7.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/winter/5.jpg?");

/***/ }),

/***/ "./assets/portfolio/winter/6.jpg":
/*!***************************************!*\
  !*** ./assets/portfolio/winter/6.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/d50af039a2ad6437f950.jpg\";\n\n//# sourceURL=webpack://portfolio/./assets/portfolio/winter/6.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;