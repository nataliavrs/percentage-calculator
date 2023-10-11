import findTotal from "./views/findTotal.js";
import percentageOfNumber from "./views/percentageOfNumber.js";
import percentageFromTotal from "./views/percentageFromTotal.js";
import resultsView from "./views/resultsView.js";
import * as model from "./model.js";

// if (module.hot) {
//   module.hot.accept();
// }

const controlCalculation = function () {
  percentageOfNumber.render();
  findTotal.render();
  percentageFromTotal.render();
};

const controlResults = function (result) {
  model.updateState("percentageOfNumber", result);
  resultsView.render(result);
};

/**
 * @description Find the percentage of a number
 * @param data Percentage that we want to find of a number and number itself
 */
const calculatePercentageOfNumber = function (data) {
  const result = (data.number1 / 100) * data.number2;
  controlResults(result);
};

const init = function () {
  controlCalculation();
  percentageOfNumber.addHandlerCalculate(calculatePercentageOfNumber);
};
init();
