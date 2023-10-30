import View from "./View.js";

class PercentageOfNumber extends View {
  _parentElement = document.querySelector(".calculators");
  calculationType = "percentageOfNumber";

  addHandlerCalculate(handler) {
    const formContainer = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this.calculationType}"]`
    );
    if (!formContainer) return;

    const partInput = formContainer.querySelector("#percentage");
    const percentageInput = formContainer.querySelector("#total");
    this.validateOnChange(partInput, percentageInput);

    formContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(
        { percentage: +partInput.value, total: +percentageInput.value },
        this
      );
    });
  }

  _generateMarkup() {
    return `
    <div class="calculation-form" data-type=${this.calculationType}>
      <form>

        <div class="inputs">
          <label>What is</label>
          <input type="text" id="percentage" value="${
            this._data?.num1 ?? ""
          }" required autocomplete="off" />
          <label>% of</label>
          <input type="text" id="total" value="${
            this._data?.num2 ?? ""
          }" required autocomplete="off" />
          <label>?</label>
        </div>

        <div class="results">
          <button><span>Calculate</span></button>
          <input type="text" readonly value="${this._data?.result ?? ""}" />
        </div>

      </form>
    </div>
    `;
  }
}

export default new PercentageOfNumber();
