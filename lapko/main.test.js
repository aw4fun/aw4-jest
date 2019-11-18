const clearElement = require('./main');

describe('my complete test', () => {

  document.body.innerHTML =
    `
    <div id="som_element">
      <div>content</div>
      <div>Text</div>
    </div>
    `;

  const elem = document.querySelector('#som_element');

  clearElement(elem);
  test('should delete style attr', () => {
    expect(elem.style.width).toBe('');
  });

  test('should delete style attr', () => {
    expect(elem.childElementCount).toBe(0);
  });

});
