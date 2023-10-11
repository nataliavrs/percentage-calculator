export default class View {
  _data;

  render(data) {
    const markup = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }
}
