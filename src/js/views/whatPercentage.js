import View from "./View.js";

class WhatPercentage extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "whatPercentage";

  addHandlerCalculate(handler) {
    const formContainer = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this._calculationType}"]`
    );
    if (!formContainer) return;

    const partInput = formContainer.querySelector("#part");
    const totalInput = formContainer.querySelector("#total");
    this.validateOnChange(partInput, totalInput);

    formContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(
        { part: +partInput.value, total: +totalInput.value },
        this._calculationType,
        this
      );
    });
  }

  _generateMarkup() {
    return `
    <div class="calculation-form" data-type=${this._calculationType}>
      <form>
        <div class="form-content">
          <input type="text" id="part" value="${
            this._data?.num1 ?? ""
          }" required />
          <h4>is what percent of</h4>
          <input type="text" id="total" value="${
            this._data?.num2 ?? ""
          }" required />
          <h4>&nbsp;</h4>
          <button id="calculateBtn"><span>Calculate</span></button>
          <h4>&nbsp;</h4>
          <input type="text" disabled value="${
            this._data?.result ?? ""
              ? !isNaN(this._data?.result)
                ? this._data?.result + "%"
                : this._data?.result
              : ""
          } "/>
        </div>
      </form>     
    </div>
    `;
  }
}

export default new WhatPercentage();
