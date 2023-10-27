export const updateState = function (num1, num2, calculationType, result) {
  // console.log(
  //   "Updating state, state before update:",
  //   JSON.parse(JSON.stringify(state))
  // );
  state.calculations[calculationType] = {
    num1,
    num2,
    result,
  };

  // state.hasOwnProperty(property)
  //   ? (state[property] = value)
  //   : (state.results[property] = value);
  // console.log("State updated, new state", state);
  cacheState();
};

export const cacheState = function () {
  const storedState = localStorage.setItem(
    "calculations",
    JSON.stringify(state.calculations)
  );
  // BUG
  storedState ? (this.state = JSON.parse(storedState)) : { ...this.state };
};

export const initState = function () {
  return {
    calculations: {
      percentageOfNumber: {
        num1: 0,
        num2: 0,
        result: 0,
      },
      whatPercentage: {
        num1: 0,
        num2: 0,
        result: 0,
      },
      findTotal: {
        num1: 0,
        num2: 0,
        result: 0,
      },
    },
  };
};

initState();
