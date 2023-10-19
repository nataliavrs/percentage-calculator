import View from "./View.js";

class PercentageOfNumber extends View {
  _parentElement = document.querySelector(".calculator");

  addHandlerCalculate(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const thisForm = [...this.querySelectorAll("[data-type]")].find(
        (form) => form.getAttribute("data-type") === "percentageOfNumber"
      );

      console.log("test");

      const canSendForm =
        e.target.closest("button") && e.target.closest("form") === thisForm;
      if (!canSendForm) return;

      const percentage = +document.getElementById("percentage").value;
      const total = +document.getElementById("total").value;
      handler({ number1: percentage, number2: total });
    });
  }

  _generateMarkup() {
    return `
      <form class="calculation-form" href="#" data-type="percentageOfNumber">
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
