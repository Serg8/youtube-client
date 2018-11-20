import formSearch from './formSearch';
import wrapperContent from './wrapperContent';

const body = document.querySelector('body');
const wrapper = wrapperContent();
const form = formSearch();
wrapper.appendChild(form);
body.appendChild(wrapper);


  const key = 'AIzaSyDK78nP9NsPif3aF-5men5PIjA7Tysq6qk';


  fetch('https://www.googleapis.com/youtube/v3/search?key=' + key + '=snippet&maxResults=15&q=js')
  .then(function(response) {
  console.log( response.json());
  })
  .catch(function(error) {
  console.log(error)
  });
