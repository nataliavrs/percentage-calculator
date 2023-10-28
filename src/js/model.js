export let state = {};

export const initState = function () {
  const storedState = JSON.parse(localStorage.getItem("calculations"));

  const emptyState = {
    calculations: {
      percentageOfNumber: {
        num1: null,
        num2: null,
        result: null,
      },
      whatPercentage: {
        num1: null,
        num2: null,
        result: null,
      },
      findTotal: {
        num1: null,
        num2: null,
        result: null,
      },
    },
  };

  return storedState
    ? (state = { calculations: storedState })
    : (state = emptyState);
};
initState();

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
  cacheState();
};

export const cacheState = function () {
  return localStorage.setItem(
    "calculations",
    JSON.stringify(state.calculations)
  );
};
