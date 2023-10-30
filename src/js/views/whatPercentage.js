import View from "./View.js";

class WhatPercentage extends View {
  _parentElement = document.querySelector(".calculators");
  calculationType = "whatPercentage";

  addHandlerCalculate(handler) {
    const formContainer = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this.calculationType}"]`
    );
    if (!formContainer) return;

    const partInput = formContainer.querySelector("#part");
    const totalInput = formContainer.querySelector("#total");
    this.validateOnChange(partInput, totalInput);

    formContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      handler({ part: +partInput.value, total: +totalInput.value }, this);
    });
  }

  _generateMarkup() {
    return `
    <div class="calculation-form" data-type=${this.calculationType}>
      <form>

        <div class="inputs">
          <input type="text" id="part" value="${
            this._data?.num1 ?? ""
          }" required autocomplete="off" />
          <label>is what percent of</label>
          <input type="text" id="total" value="${
            this._data?.num2 ?? ""
          }" required autocomplete="off" />
        </div>

        <div class="results">          
          <button id="calculateBtn"><span>Calculate</span></button>
          <input type="text" readonly value="${
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
