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

const init = function () {
  controlCalculation();
  controlResults();
};
init();
