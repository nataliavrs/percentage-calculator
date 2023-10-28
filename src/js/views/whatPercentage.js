import View from "./View.js";

class WhatPercentage extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "whatPercentage";

  _initValidation() {
    const form = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this._calculationType}"]`
    );
    const part = +form.querySelector("#part").value;
    const partInput = form.querySelector("#part");
    partInput.addEventListener("input", function () {
      if (isNaN(part)) {
        console.log("input listener");
        partInput.setCustomValidity("nubi");
      } else {
        // Clear the custom validity when the condition is not met
        partInput.setCustomValidity("");
      }
    });
  }

  addHandlerCalculate(handler) {
    const form = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this._calculationType}"]`
    );
    if (!form) return;

    const part = +form.querySelector("#part").value;
    const partInput = form.querySelector("#part");
    const total = +form.querySelector("#total").value;

    partInput.addEventListener("input", function () {
      if (isNaN(part)) {
        console.log("input listener");
        partInput.setCustomValidity("nubi");
      } else {
        // Clear the custom validity when the condition is not met
        partInput.setCustomValidity("");
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!partInput.checkValidity()) {
        console.log("report validit");
        partInput.reportValidity();
      }
      // if (this.isInputInvalid(part) || this.isInputInvalid(total)) {
      //   return this.showErrorMessage();
      // }

      handler({ part, total }, this._calculationType, this);
    });
  }

  _generateMarkup() {
    return `
    <div class="calculation-form" data-type=${this._calculationType}>
    <form href="#">
      <div class="form-content">
        <input type="text" name="" id="part" value="${
          this._data?.num1 ?? ""
        }" />
        <h4>is what percent of</h4>
        <input type="text" name="" id="total" value="${
          this._data?.num2 ?? ""
        }" />
        <h4>&nbsp;</h4>
        <button id="calculateBtn"><span>Calculate</span></button>
        <h4>&nbsp;</h4>
        <input type="text" disabled value="${
          this._data?.result ?? "" ? this._data?.result + "%" : ""
        } "/>
      </div>
    </form>     
    </div>
    `;
  }
}

export default new WhatPercentage();
