import View from "./View.js";

class PercentageOfNumber extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "percentageOfNumber";

  addHandlerCalculate(handler) {
    const thisForm = this._parentElement.querySelector(
      `form[data-type="${this._calculationType}"]`
    );

    thisForm.addEventListener("submit", function (e) {
      console.log(this);
      e.preventDefault();
      const percentage = +this.querySelector("#percentage").value;
      const total = +this.querySelector("#total").value;
      handler({ number1: percentage, number2: total });
    });
  }

  _generateMarkup() {
    return `
      <form class="calculation-form" href="#" data-type=${this._calculationType}>
        <div class="form-content">
          <h4>What is</h4>
          <input type="text" id="percentage" />
          <h4>% of</h4>
          <input type="text" id="total" />
          <h4>?</h4>
          <button><span>Calculate</span></button>
        </div>
      </form>     
    `;
  }
}

export default new PercentageOfNumber();
