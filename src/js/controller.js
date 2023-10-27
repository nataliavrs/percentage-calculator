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
const calculatePercentageOfNumber = function (
  { percentage, total },
  calculationType,
  caller
) {
  const result = (percentage / 100) * total;
  controlResults(percentage, total, result, calculationType, caller);
};

/**
 * @description Calculates what percentage a number represents out of total
 */
const calculateWhatPercentage = function (
  { part, total },
  calculationType,
  caller
) {
  const result = (part / total) * 100 + "%";
  controlResults(part, total, result, calculationType, caller);
};

/**
 * @description Calculates what the total is given a part and a percentage
 */
const calculateFindTotal = function (
  { part, percentage },
  calculationType,
  caller
) {
  const result = (part * 100) / percentage;
  controlResults(part, percentage, result, calculationType, caller);
};

const controlResults = function (num1, num2, result, calculationType, caller) {
  model.updateState(num1, num2, calculationType, result);
  if (+model.state.calculations[calculationType].result === result) {
    caller.update({
      num1: model.state.calculations[calculationType].num1,
      num2: model.state.calculations[calculationType].num2,
      result,
    });
  } else {
    caller.update({ num1: "nubi", num2: "nubi", result });
  }
};

const controlStorage = function () {
  const storedState = JSON.parse(localStorage.getItem("calculations"));
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
