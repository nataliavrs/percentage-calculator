import View from "./View.js";

class PercentageOfNumber extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "percentageOfNumber";

  addHandlerCalculate(handler) {
    const thisForm = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this._calculationType}"]`
    );
    thisForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const percentage = +thisForm.querySelector("#percentage").value;
      const total = +thisForm.querySelector("#total").value;
      handler({ percentage, total }, this._calculationType, this);
    });
  }

  _generateMarkup() {
    return `
      <div class="calculation-form" data-type=${this._calculationType}>
        <form href="#">
          <div class="form-content">
            <h4>What is</h4>
              <input type="text" id="percentage" value="${
                this._data?.num1 ?? ""
              }" required />
            <h4>% of</h4>
            <input type="text" id="total" value="${
              this._data?.num2 ?? ""
            }" required />
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
