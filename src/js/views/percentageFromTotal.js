import View from "./View.js";

class FindTotal extends View {
  _parentElement = document.querySelector(".calculator");

  addHandlerCalculate(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();

      const button = e.target.closest("button");
      if (!button) return;

      const number = +document.getElementById("number").value;
      const total = +document.getElementById("total").value;
      handler({ number1: number, number2: total });
    });
  }

  _generateMarkup() {
    return `
      <form class="calculation-form" href="#" data-type="percentageFromTotal">
        <div class="form-content">
          <input type="text" name="" id="number" />
          <h4>is what percent of</h4>
          <input type="text" name="" id="total" />
          <button><span>Calculate</span></button>
        </div>
      </form>     
    `;
  }
}

export default new FindTotal();
