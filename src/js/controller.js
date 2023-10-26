import * as model from "./model.js";
import findTotal from "./views/findTotal.js";
import percentageOfNumber from "./views/percentageOfNumber.js";
import whatPercentage from "./views/whatPercentage.js";

const renderCalculators = function () {
  percentageOfNumber.render();
  whatPercentage.render();
  findTotal.render();
};

/**
 * @description Calculates the percentage of a number
 */
const calculatePercentageOfNumber = function (data, calculationType, caller) {
  const result = (data.number1 / 100) * data.number2;
  controlResults(result, calculationType, caller);
};

/**
 * @description Calculates what percentage a number represents out of total
 */
const calculateWhatPercentage = function (data, calculationType, caller) {
  const result = (data.number1 / data.number2) * 100 + "%";
  controlResults(result, calculationType, caller);
};

/**
 * @description Calculates what the total is given a part and a percentage
 */
const calculateFindTotal = function (data, calculationType, caller) {
  const result = (data.number1 * 100) / data.number2;
  controlResults(result, calculationType, caller);
};

const controlResults = function (result, calculationType, caller) {
  model.updateState(calculationType, result);
  caller.update(result);
};

const controlStorage = function () {
  const storedState = JSON.parse(localStorage.getItem("results"));
  console.log(storedState);
  percentageOfNumber.update(storedState.percentageOfNumber);
  whatPercentage.update(storedState.whatPercentage);
  findTotal.update(storedState.findTotal);
};

const init = function () {
  renderCalculators();
  percentageOfNumber.addHandlerCalculate(calculatePercentageOfNumber);
  whatPercentage.addHandlerCalculate(calculateWhatPercentage);
  findTotal.addHandlerCalculate(calculateFindTotal);
  controlStorage();
};
init();
