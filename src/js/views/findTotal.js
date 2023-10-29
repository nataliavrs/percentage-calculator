import View from "./View.js";

class FindTotal extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "findTotal";

  addHandlerCalculate(handler) {
    const formContainer = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this._calculationType}"]`
    );
    if (!formContainer) return;

    const partInput = formContainer.querySelector("#part");
    const percentageInput = formContainer.querySelector("#percentage");
    this.validateInputs(partInput, percentageInput);

    formContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(
        { part: +partInput.value, percentage: +percentageInput.value },
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
          <h4>If</h4>
          <input type="text" id="part" value="${this._data?.num1 ?? ""}" />
          <h4>is</h4>
          <input type="text" id="percentage" value="${
            this._data?.num2 ?? ""
          }" />
          <h4>% of the total. The total is</h4>
          <h4>&nbsp;</h4>
          <button><span>Calculate</span></button>
          <h4>&nbsp;</h4>
          <input type="text" disabled value="${this._data?.result ?? ""}" />
        </div>
      </form>
    </div>
    `;
  }
}

export default new FindTotal();
