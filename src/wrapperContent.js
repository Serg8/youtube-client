function wrapperContent() {
  const divWrapper = document.createElement('div');
  const divWrapperClass = document.createAttribute('class');
  divWrapperClass.value = 'wrapper';
  divWrapper.setAttributeNode(divWrapperClass);
  return divWrapper;
}

export default wrapperContent;
