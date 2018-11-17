import formSearch from './formSearch';
import wrapperContent from './wrapperContent';

const body = document.querySelector('body');
const wrapper = wrapperContent();
const form = formSearch();
wrapper.appendChild(form);
body.appendChild(wrapper);
