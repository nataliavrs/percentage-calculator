export const state = {
  results: {
    percentageOfNumber: 0,
    whatPercentage: 0,
    findTotal: 0,
  },
};

export const updateState = function (property, value) {
  // console.log(
  //   "Updating state, state before update:",
  //   JSON.parse(JSON.stringify(state))
  // );
  state.hasOwnProperty(property)
    ? (state[property] = value)
    : (state.results[property] = value);
  // console.log("State updated, new state", state);
  cacheState();
};

export const cacheState = function () {
  localStorage.setItem("results", JSON.stringify(state.results));
};
