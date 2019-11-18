const clearElement = node => {
  node.removeAttribute('style');
  Array.from(node.children).forEach(e => node.removeChild(e));
};

module.exports = clearElement;