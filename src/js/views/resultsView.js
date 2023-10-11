import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");

  _generateMarkup(data) {
    return `<input type="text" disabled placeholder="Result" value="${data}"/>`;
  }
}

export default new ResultsView();
