/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="blue-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="blue-text">mobile: </span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="blue-text">email: </span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="blue-text">twitter: </span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="blue-text">github: </span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="blue-text">blog: </span><span class="white-text">%data%</span></li>';
var HTMLweb = '<li class="flex-item"><span class="blue-text">web: </span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="blue-text">location: </span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message"><br>%data%</span>';

//var HTMLskillsStart = '<h3 id="skillsH3">Skills:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskillsStart = '<h3 id="skillsH3"><span class="blue-text">Skills at a glance:</span></h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div class="employer-text">%data%</div>';
var HTMLworkTitle = '<div class="title-text"> - %data%</div>';
var HTMLworkDept = '<div class="dept-text"> (%data%)</div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<div class="duties-text" id="%id%">%data%</div>';
// add a bit of text that will show/hide the description text
//var HTMLshowHide = 'onclick = 

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectCategory = '<div class="employer-text">%data%</div>';
var HTMLprojectTitle = '<div class="title-text"> - %data%</div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<div class="duties-text" id="%id%">%data%</div>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLedLevelStart = '<div class="edLevel-text">%data%</div>';
var HTMLschoolName = '<div class="employer-text">%data%</div>';
var HTMLschoolDegree = '<div class="title-text"> - %data%</div>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="duties-text" id="%id%">Major: %data%</div>';
var HTMLschoolSubject = '<div class="duties-text" id="%id%">%data%</div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var HTMLmapStart = '<div class="map-entry"></div>';
var googleMap = '<div id="map"></div>';

// for bullet points to show/hide descriptions
var HTMLarrow = "<image class='bullet' id='%id%' src='images/arrow.jpg'/>";
var downArrow = "images/arrow-down.jpg";
var arrow = "images/arrow.jpg";

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(name) || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true,
    zoom: 4,
	center: {lat: 40.397, lng: -90.644}

  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(resume.bio.contact.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in resume.education.UNI) {
      locations.push(resume.education.UNI[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in resume.work.jobs) {
      locations.push(resume.work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {
    // The next lines save location data from the search result object to local variables
//    var lat = placeData.geometry.location.k;  // latitude from the place service
//    var lon = placeData.geometry.location.D;  // latitude from the place service
// !!BUG in UDACITY code. search result lat/lng should should be accessed this way:
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());

  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    	createMapMarker(results[0]);
    }


  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };
      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);

    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
