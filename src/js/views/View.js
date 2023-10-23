export default class View {
  _data;

  // BUG arg diventa un array per la gestione di vedere results
  render(...data) {
    const markup = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }
}
