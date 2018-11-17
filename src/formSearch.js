function formSearch() {
  const form = document.createElement('form');
  const formClass = document.createAttribute('class');
  formClass.value = 'search';
  form.setAttributeNode(formClass);
  const formActive = document.createAttribute('active');
  formActive.value = '';
  form.setAttributeNode(formActive);
  const inputSubmit = document.createElement('input');
  const typeSubmit = document.createAttribute('type');
  typeSubmit.value = 'submit';
  inputSubmit.setAttributeNode(typeSubmit);
  const inputSubmitValue = document.createAttribute('value');
  inputSubmitValue.value = '';
  inputSubmit.setAttributeNode(inputSubmitValue);
  const inputSubmitClass = document.createAttribute('class');
  inputSubmitClass.value = 'search__submit';
  inputSubmit.setAttributeNode(inputSubmitClass);
  form.appendChild(inputSubmit);
  const inputText = document.createElement('input');
  const typeText = document.createAttribute('type');
  typeText.value = 'text';
  inputText.setAttributeNode(typeText);
  const inputTextClass = document.createAttribute('class');
  inputTextClass.value = 'search__text';
  inputText.setAttributeNode(inputTextClass);
  form.appendChild(inputText);
  return form;
}

export default formSearch;
