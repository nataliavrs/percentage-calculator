export default class View {
  _data;

  render(data) {
    console.log("render view");
    const markup = this._generateMarkup(data);
    this._parentElement.innerHTML = markup;
  }
}
