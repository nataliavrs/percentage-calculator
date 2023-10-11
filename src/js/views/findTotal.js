import View from "./View.js";

class FindTotal extends View {
  _parentElement = document.querySelector(".calculator");

  addHandlerCalculate(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();

      const button = e.target.closest("button");
      if (!button) return;

      const percentage = +document.getElementById("number").value;
      const total = +document.getElementById("percentage").value;
      handler({ number1: percentage, number2: total });
    });
  }

  _generateMarkup() {
    return `
      <form class="calculation-form" href="#">
        <div class="form-content">
          <h4>If</h4>
          <input type="text" name="" id="number" />
          <h4>is</h4>
          <input type="text" name="" id="percentage" />
          <h4>% of the total. The total is</h4>
          <button><span>Calculate</span></button>
        </div>
      </form>     
    `;
  }
}

export default new FindTotal();
