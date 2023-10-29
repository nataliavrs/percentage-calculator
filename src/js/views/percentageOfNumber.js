import View from "./View.js";

class PercentageOfNumber extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "percentageOfNumber";

  addHandlerCalculate(handler) {
    const formContainer = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this._calculationType}"]`
    );
    if (!formContainer) return;

    const partInput = formContainer.querySelector("#percentage");
    const percentageInput = formContainer.querySelector("#total");
    this.validateOnChange(partInput, percentageInput);

    formContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(
        { percentage: +partInput.value, total: +percentageInput.value },
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
            <h4>What is</h4>
              <input type="text" id="percentage" value="${
                this._data?.num1 ?? ""
              }" required autocomplete="off" />
            <h4>% of</h4>
            <input type="text" id="total" value="${
              this._data?.num2 ?? ""
            }" required autocomplete="off" />
            <h4>?</h4>
            <h4>&nbsp;</h4>
            <button><span>Calculate</span></button>
            <h4>&nbsp;</h4>
            <input type="text" id="debug" disabled value="${
              this._data?.result ?? ""
            }" />
          </div>
        </form>   
      </div>
    `;
  }
}

export default new PercentageOfNumber();
