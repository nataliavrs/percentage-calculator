import calculatorView from "./views/calculatorView.js";

if (module.hot) {
  module.hot.accept();
}

const controlCalculation = function () {
  calculatorView.render();
};

const init = function () {
  controlCalculation();
};
init();
