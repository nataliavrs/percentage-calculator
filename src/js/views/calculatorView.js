import View from "./View.js";
class CalculatorView extends View {
  _parentElement = document.querySelector(".calculation-form");

  _generateMarkup() {
    return `
        <div class="form-content">
            <h4>What is</h4>
            <input type="text" name="" id="" />
            <h4>% of</h4>
            <input type="text" name="" id="" />
            <h4>?</h4>
            <button class="calculate-btn"><span>Calculate</span></button>
        </div>
    `;
  }
}

export default new CalculatorView();
