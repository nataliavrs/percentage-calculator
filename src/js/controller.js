import * as model from "./model.js";
import findTotal from "./views/findTotal.js";
import percentageOfNumber from "./views/percentageOfNumber.js";
import whatPercentage from "./views/whatPercentage.js";
import resultsView from "./views/resultsView.js";

const renderCalculators = function () {
  percentageOfNumber.render();
  whatPercentage.render();
  findTotal.render();
};

/**
 * @description Calculates the percentage of a number
 */
const calculatePercentageOfNumber = function (data, calculationType) {
  const result = (data.number1 / 100) * data.number2;
  controlResults(result, calculationType);
};

/**
 * @description Calculates what percentage a number represents out of total
 */
const calculateWhatPercentage = function (data, calculationType) {
  const result = (data.number1 / data.number2) * 100 + "%";
  controlResults(result, calculationType);
};

/**
 * @description Calculates what the total is given a part and a percentage
 */
const calculateFindTotal = function (data, calculationType) {
  const result = (data.number1 * 100) / data.number2;
  controlResults(result, calculationType);
};

const controlResults = function (result, calculationType) {
  model.updateState(calculationType, result);
  resultsView.render({ result, calculationType });
};

const init = function () {
  renderCalculators();

  percentageOfNumber.addHandlerCalculate(calculatePercentageOfNumber);
  whatPercentage.addHandlerCalculate(calculateWhatPercentage);
  findTotal.addHandlerCalculate(calculateFindTotal);
};
init();
