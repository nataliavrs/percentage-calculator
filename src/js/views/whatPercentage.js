import View from "./View.js";

class WhatPercentage extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "whatPercentage";

  addHandlerCalculate(handler) {
    const thisForm = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this._calculationType}"]`
    );
    if (!thisForm) return;

    thisForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const part = +thisForm.querySelector("#part").value;
      const total = +thisForm.querySelector("#total").value;
      handler({ number1: part, number2: total }, this._calculationType, this);
    });
  }

  _generateMarkup() {
    return `
    <div class="calculation-form" data-type=${this._calculationType}>
    <form href="#">
      <div class="form-content">
        <input type="text" name="" id="part" />
        <h4>is what percent of</h4>
        <input type="text" name="" id="total" />
        <h4>&nbsp;</h4>
        <button><span>Calculate</span></button>
        <h4>&nbsp;</h4>
        <input type="text" disabled value="${this._data || ""}"/>
      </div>
    </form>     
    </div>
    `;
  }
}

export default new WhatPercentage();
