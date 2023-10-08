import calculatorView from "./views/calculatorView.js";
import resultsView from "./views/resultsView.js";
import * as model from "./model.js";

if (module.hot) {
  module.hot.accept();
}

const controlCalculation = function () {
  calculatorView.render();
};

const controlResults = function () {
  console.log(model.state);
  const result = model?.state?.results?.quantityKnowingTotal;
  resultsView.render(result);
};

/**
 * @description Find the percentage of a number
 * @param data Percentage that we want to find of a number and number itself
 */
const calculateOne = function (data) {
  return (data.number1 / 100) * data.number2;
};

const init = function () {
  controlCalculation();
  calculatorView.addHandlerCalculate(calculateOne);
  controlResults();
};
init();
