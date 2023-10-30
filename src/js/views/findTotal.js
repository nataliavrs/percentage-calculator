import View from "./View.js";

class FindTotal extends View {
  _parentElement = document.querySelector(".calculators");
  calculationType = "findTotal";

  addHandlerCalculate(handler) {
    const formContainer = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this.calculationType}"]`
    );
    if (!formContainer) return;

    const partInput = formContainer.querySelector("#part");
    const percentageInput = formContainer.querySelector("#percentage");
    this.validateOnChange(partInput, percentageInput);

    formContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(
        { part: +partInput.value, percentage: +percentageInput.value },
        this
      );
    });
  }

  _generateMarkup() {
    return `
    <div class="calculation-form" data-type="${this.calculationType}">
      <form>
        <div class="inputs">
          <label>If</label>
          <input type="text" id="part" value="${
            this._data?.num1 ?? ""
          }" required autocomplete="off" />
          <label>is</label>
          <input type="text" id="percentage" value="${
            this._data?.num2 ?? ""
          }" required autocomplete="off" />
          <label>% of the total. The total is:</label>
        </div>

        <div class="results">
          <button><span>Calculate</span></button>
          <input type="text" readonly value="${
            this._data?.result ?? ""
          }" />          
        </div>
      </form>
    </div>
    `;
  }
}

export default new FindTotal();
