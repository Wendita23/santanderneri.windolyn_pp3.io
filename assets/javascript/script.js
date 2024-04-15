// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

const API_KEY = 'AIzaSyA8oXBCCRMY_REPjCuf3LlVOfMeSqF4ZeQ';
const VIDEO_IDS = ['wvDB3ibuUg4','AlU3TX7DI4&t', 'FNb8YI1rXJw&t','tRSGwnngqD4&t', 'GyJi0_T6i5U', 'DDQxjOVz3wI&t'];

const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=snippet`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the data returned from the API
    console.log(data);
    // Access video information from data.snippet
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });
