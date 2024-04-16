// Navbar scrolling effect
const header = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
};

// Google Maps initialization function
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}



function onPlayerReady(event) {
    // Do something when player is ready
}
const API_KEY = 'AIzaSyA8oXBCCRMY_REPjCuf3LlVOfMeSqF4ZeQ';
const VIDEO_IDS = ['wvDB3ibuUg4','AlU3TX7DI4&t', 'FNb8YI1rXJw&t','tRSGwnngqD4&t', 'GyJi0_T6i5U', 'DDQxjOVz3wI&t'];

// Loop through each video ID and fetch data for each video
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const VIDEO_IDS = ['wvDB3ibuUg4','AlU3TX7DI4&t', 'FNb8YI1rXJw&t','tRSGwnngqD4&t', 'GyJi0_T6i5U', 'DDQxjOVz3wI&t'];

VIDEO_IDS.forEach(videoId => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`;

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
            const videoDataDiv = document.getElementById('videoData');
            const videoTitle = document.createElement('h2');
            videoTitle.textContent = data.items[0].snippet.title;
            videoDataDiv.appendChild(videoTitle);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
});

// YouTube API function to create player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'wvDB3ibuUg4', // YouTube video ID
        playerVars: {
            'autoplay': 0, // Auto-play the video
            'controls': 1, // Show player controls
            'rel': 0, // Hide related videos
            'showinfo': 0 // Hide video information
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady(event) {
    // Do something when player is ready
}



(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: "AIzaSyA0QUcVcz_Akev7ODchAkv8sYrdNULCLNw",
  v: "weekly",
  // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
  // Add other bootstrap parameters as needed, using camel case.
});

function myMap() {
    var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    