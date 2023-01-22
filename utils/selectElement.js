const selectElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error('Cannot find element');
  }
};

export default selectElement;
