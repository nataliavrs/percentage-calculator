import View from "./View.js";

class ResultsView extends View {
  _parentElement;

  _generateMarkup(data) {
    console.log(data);
    this._parentElement = document.querySelector(
      `.calculation-form[data-type^="${data.calculationType}"]`
    );

    return `<input type="text" disabled value="${data.result}"/>`;
  }
}

export default new ResultsView();
