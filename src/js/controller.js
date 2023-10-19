import * as model from "./model.js";
import findTotal from "./views/findTotal.js";
import percentageOfNumber from "./views/percentageOfNumber.js";
import percentageFromTotal from "./views/percentageFromTotal.js";
import resultsView from "./views/resultsView.js";

const renderCalculators = function () {
  percentageOfNumber.render();
  findTotal.render();
  percentageFromTotal.render();
};

/**
 * @description Find the percentage of a number
 * @param data Percentage that we want to find of a number and number itself
 */
const calculatePercentageOfNumber = function (data) {
  const result = (data.number1 / 100) * data.number2;
  controlResults(result);
};

const calculateFindTotal = function (data) {
  console.log("find total");
};
const calculatePercentageFromTotal = function (data) {
  console.log("from total");
};

const controlResults = function (result) {
  model.updateState("percentageOfNumber", result);
  resultsView.render(result);
};

const init = function () {
  renderCalculators();

  percentageOfNumber.addHandlerCalculate(calculatePercentageOfNumber);
  findTotal.addHandlerCalculate(calculateFindTotal);
  percentageFromTotal.addHandlerCalculate(calculatePercentageFromTotal);
};
init();
