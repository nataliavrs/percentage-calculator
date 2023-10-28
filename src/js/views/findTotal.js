import View from "./View.js";

class FindTotal extends View {
  _parentElement = document.querySelector(".calculator");
  _calculationType = "findTotal";

  addHandlerCalculate(handler) {
    const thisForm = this._parentElement.querySelector(
      `.calculation-form[data-type^="${this._calculationType}"]`
    );

    if (!thisForm) return;

    thisForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const part = +thisForm.querySelector("#part").value;
      const percentage = +thisForm.querySelector("#percentage").value;
      handler({ part, percentage }, this._calculationType, this);
    });
  }

  _generateMarkup() {
    return `
    <div class="calculation-form" data-type=${this._calculationType}>
    <form href="#">
      <div class="form-content">
        <h4>If</h4>
        <input type="text" name="" id="part" value="${
          this._data?.num1 ?? ""
        }" />
        <h4>is</h4>
        <input type="text" name="" id="percentage" value="${
          this._data?.num2 ?? ""
        }" />
        <h4>% of the total. The total is</h4>
        <h4>&nbsp;</h4>
        <button><span>Calculate</span></button>
        <h4>&nbsp;</h4>
        <input type="text" disabled value="${this._data?.result ?? ""}" />
      </div>
    </form>
    </div>
    `;
  }
}

export default new FindTotal();
