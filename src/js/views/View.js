export default class View {
  _data;

  render(data) {
    const markup = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  update(data) {
    // Update the data property in the instance with the new data
    this._data = data;
    // Generate new HTML markup based on the updated data
    const newMarkup = this._generateMarkup();
    /**
     * Create a new Document Fragment from the new HTML markup
     *  createRange(): This is a method of the document object. It creates a new Range object. Ranges are used in the DOM to represent a portion of a document, often used for selecting and manipulating parts of the DOM.
     *  createContextualFragment(newMarkup): This method is called on the Range object. It takes a string of HTML markup (newMarkup) as its argument and creates a new DOM fragment from it.
     *  newMarkup is the HTML markup that you've generated based on your updated data.
     *  createContextualFragment parses this HTML markup and creates a new Document Fragment containing the elements and structure defined in the markup.
     */
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Convert the elements within the new DOM fragment into an array
    const newElements = Array.from(
      newDOM
        .querySelector(
          `.calculation-form[data-type="${this._calculationType}"]`
        )
        .querySelectorAll("*")
    );
    // Convert the elements within the parent element into an array
    const curElements = Array.from(
      document
        .querySelector(
          `.calculation-form[data-type="${this._calculationType}"]`
        )
        .querySelectorAll("*")
    );
    // Iterate through the elements in both the new DOM fragment and the parent element
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // Check if the new element is different from the current element
      if (!newEl.isEqualNode(curEl)) {
        // Iterate through the attributes of the new element and update the corresponding attributes of the current element
        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }
}
