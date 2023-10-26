import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".calculator");

  _generateMarkup(data) {
    return `<input type="text" disabled value="${data}"/>`;
  }
}

export default new ResultsView();
