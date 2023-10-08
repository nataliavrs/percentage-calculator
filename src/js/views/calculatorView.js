import View from "./View.js";
class CalculatorView extends View {
  _parentElement = document.querySelector(".calculation-form");

  addHandlerCalculate(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();

      const button = e.target.closest("button");
      if (!button) return;

      const percentage = +document.getElementById("percentage").value;
      const total = +document.getElementById("total").value;
      handler({ number1: percentage, number2: total });
    });
  }

  _generateMarkup() {
    return `
        <div class="form-content">
            <h4>What is</h4>
            <input type="text" name="" id="percentage" />
            <h4>% of</h4>
            <input type="text" name="" id="total" />
            <h4>?</h4>
            <button class="calculate-btn"><span>Calculate</span></button>
        </div>
    `;
  }
}

export default new CalculatorView();
