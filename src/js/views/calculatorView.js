class CalculatorView {
  _parentElement = document.querySelector(".form-content");

  generateMarkUp() {
    return `
         <h4>What is</h4>
            <input type="text" name="" id="" />
            <h4>% of</h4>
            <input type="text" name="" id="" />
        <h4>?</h4>
    `;
  }
}
