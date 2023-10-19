import View from "./View.js";

class FindTotal extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "findTotal";

  addHandlerCalculate(handler) {
    const thisForm = this._parentElement.querySelector(
      `form[data-type="${this._calculationType}"]`
    );

    if (!thisForm) return;

    thisForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const number = +this.querySelector("#number").value;
      const percentage = +this.querySelector("#percentage").value;
      handler({ number1: number, number2: percentage });
    });
  }

  _generateMarkup() {
    return `
      <form class="calculation-form" href="#" data-type=${this._calculationType}>
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
