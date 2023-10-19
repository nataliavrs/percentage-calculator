import View from "./View.js";

class FindTotal extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "percentageFromTotal";

  addHandlerCalculate(handler) {
    const thisForm = this._parentElement.querySelector(
      `form[data-type="${this._calculationType}"]`
    );

    if (!thisForm) return;

    thisForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const number = +this.querySelector("#number").value;
      const total = +this.querySelector("#total").value;
      handler({ number1: number, number2: total });
    });
  }

  _generateMarkup() {
    return `
      <form class="calculation-form" href="#" data-type=${this._calculationType}>
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
