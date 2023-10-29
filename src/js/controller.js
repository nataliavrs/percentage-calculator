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
const calculatePercentageOfNumber = function ({ percentage, total }, caller) {
  const result = (percentage / 100) * total;
  controlResults(percentage, total, result, caller);
};

/**
 * @description Calculates what percentage a number represents out of total
 */
const calculateWhatPercentage = function ({ part, total }, caller) {
  const result = total === 0 ? "Cannot divide by zero" : (part / total) * 100;
  controlResults(part, total, result, caller);
};

/**
 * @description Calculates what the total is given a part and a percentage
 */
const calculateFindTotal = function ({ part, percentage }, caller) {
  const result =
    percentage === 0 ? "Cannot divide by zero" : (part * 100) / percentage;
  controlResults(part, percentage, result, caller);
};

const controlResults = function (num1, num2, result, caller) {
  console.log(caller);
  if (
    isCalculationDifferent(
      {
        num1,
        num2,
        result,
      },
      caller.calculationType
    )
  ) {
    model.updateState(num1, num2, caller.calculationType, result);
    caller.updateUI({
      num1,
      num2,
      result,
    });
  }
};

const isCalculationDifferent = function (calculationObj, calculationType) {
  const newCalcKeys = Object.keys(calculationObj);
  return newCalcKeys.some(
    (key) =>
      calculationObj[key] !== model.state.calculations[calculationType][key]
  );
};

const controlStorage = function () {
  percentageOfNumber.updateUI(model.state.calculations.percentageOfNumber);
  whatPercentage.updateUI(model.state.calculations.whatPercentage);
  findTotal.updateUI(model.state.calculations.findTotal);
};

const init = function () {
  renderCalculators();
  percentageOfNumber.addHandlerCalculate(calculatePercentageOfNumber);
  whatPercentage.addHandlerCalculate(calculateWhatPercentage);
  findTotal.addHandlerCalculate(calculateFindTotal);
  controlStorage();
};
init();
