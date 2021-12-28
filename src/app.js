import '../styles/style.scss';
import Portfolio from './setPortfolio';
import Translator from './translator';

const portfolio = new Portfolio();
new Translator();

portfolio.addListeners();