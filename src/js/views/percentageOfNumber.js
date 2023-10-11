import View from "./View.js";

class PercentageOfNumber extends View {
  _parentElement = document.querySelector(".calculator");

  // TODO cercando di non far partire tutti i form con il calculate
  addHandlerCalculate(handler) {
    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();

      const currentForm = [
        this._parentElement.querySelectorAll("[data-type]"),
      ].find((form) => console.log(form));

      console.log(currentForm);
      const isCurrentForm =
        currentForm.getAttribute("data-type") === "percentageOfNumber";
      const canSendForm = e.target.closest("button") && isCurrentForm;
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
          <input type="text" name="" id="percentage" />
          <h4>% of</h4>
          <input type="text" name="" id="total" />
          <h4>?</h4>
          <button><span>Calculate</span></button>
        </div>
      </form>     
    `;
  }
}

export default new PercentageOfNumber();
