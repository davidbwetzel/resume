var bio = {
	"name" : "David B. Wetzel, DMA", 
	"role" : "Musician, Educator, Web & Interactive Software Developer",
	"contacts" : {
				"mobile" : "773-484-9357",
				"email" : "david@familycatproductions.com",
				"github" : "dbwetzel",
				"location" : "Chicago, IL"
				},
	"welcomeMessage" : "Hello! I am a classically trained musician, music technologist, and educator seeking opportunities in higher education, interactive software design, web development, audio production, and community education in STEAM topics",
	"skills" :
		[
		"performance", 
		"teaching", 
		"programming", 
		"web development", 
		"audio production"
		],
	"bioPic" : "images/DBW-sm.jpg"
};

bio.display = function()
{
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

// add bio pic
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

// add welcome message
	var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
	$("#header").append(formattedMsg);


	if(bio.skills.length) // > 0
	{
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills)
		{
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}	
	}

//  add contact info to footer
//	privacy, please. uncomment to see it appear, but don't display this on a public web site
//	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
//	var formattedWeb = HTMLweb.replace("%data%", bio.contacts.web);
//	$("#footerContacts").append(formattedWeb);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);
		
};

var	work = {
	"jobs" : [
		{
			"employer" : "Educational Testing Service (ETS)",
			"title" : "test rater",
			"location" : "Chicago, IL",
			"dates" : "2015 - present",
			"description" : "Score standardized test responses according to established rubrics and policies for K-12 math and for TOEFL and TOEIC speaking exams"
		},
		{
			"employer" : "Mansfield University of Pennsylvania",
			"title" : "associate professor of music",
			"location" : "Mansfield, PA",
			"dates" : "2004 - 2014",
			"description" : "Taught courses and lessons in applied clarinet, music technology, music business, and general music; advised undergraduate students majoring in music with concentrations in technology and business; designed curriculum and coordinated music technology and business programs; developed and maintained music recording, production, and lab facilities; served on departmental and university committees; performed at local, national, and international venues, festivals, and conferences; contributed new scholarly research to leading publications and professional societies in my field "
		},
		{
			"employer" : "Central Arizona College, Department of Music",
			"title" : "adjunct professor of music and multimedia",
			"location" : "Coolidge, AZ",
			"dates" : "2000 - 2004",
			"description" : "taught courses in music appreciation and music technology"
		},
		{
			"employer" : "Central Arizona College, Teacher Education Division",
			"title" : "education technologist",
			"location" : "Coolidge, AZ",
			"dates" : "2001 - 2002",
			"description" : "Provided educational technology support and services to college faculty and to area K-12 teachers; managed multimedia labs, department web site, and special events"
		},
		{
			"employer" : "ITT Technical Institute",
			"title" : "adjunct instructor of multimedia",
			"location" : "Phoenix, AZ",
			"dates" : "2000 - 2001",
			"description" : "taught courses in video editing and interactive animation"
		},
		{
			"employer" : "Soundprint Media Center",
			"title" : "sound engineer",
			"location" : "Laurel, MD",
			"dates" : "2000",
			"description" : "edited and mixed weekly documentary series for NPR distribution"
		},
		{
			"employer" : "Peabody Office of Technology Transfer (the Johns Hopkins University)",
			"title" : "technical team member",
			"location" : "Baltimore, MD",
			"dates" : "1999 - 2000",
			"description" : "contributed interactive systems design and programming, logistical planning, and event coordination for live performances at 'Times Square 2000' New Year's Eve celebrations in New York City"
		},
		{
			"employer" : "Peabody Preparatory (the Johns Hopkins University)",
			"title" : "instructor of computer music",
			"location" : "Baltimore, MD",
			"dates" : "1997 - 2000",
			"description" : "taught courses and private lessons in computer music and music technology"
		},
		{
			"employer" : "Peabody Conservatory (the Johns Hopkins University)",
			"title" : "ensemble assistant",
			"location" : "Baltimore, MD",
			"dates" : "1996 - 1999",			
			"description" : "managed five student ensembles; music librarian; generally assisted with conservatory concert operations"
		},
		{
			"employer" : "Peabody Conservatory (the Johns Hopkins University)",
			"title" : "graduate assistant in computer music",
			"location" : "Baltimore, MD",
			"dates" : "1995 - 1996",
			"description" : "computer music studio maintenance; guest artist and concert coordination; IT help desk"
		}
	]
};


work.display = function()
{
	var HTMLposition = "<div class='position' onclick='showHide(\"duties%posNum%\", \"workBullet%posNum%\");'> %data% </div>";

	if (work.jobs.length) // only if there are jobs in the array
	{
		for (var job in work.jobs)
		{
	
		/*
		display work like this:
	
		Employer			location
		> dates - title
		 - description (drop-down)
		*/
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedEmployer + formattedLocation);
		
//			var workBulletId = "workBullet" + job; //unique bullet id for each job
//			var dutiesId = "workBullet" + job; //unique id for description text block
		
			var formattedPosition = HTMLposition.replace("%posNum%", job);
			formattedPosition = formattedPosition.replace("%posNum%", job);

			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);	
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			formattedPosition = formattedPosition.replace ("%data%", formattedDates + formattedTitle);			

			$(".work-entry:last").append(formattedPosition);
		
			//in helper.js: var arrow = "<image class='bullet' id='%id%' src='images/arrow.jpg'/>";
			var arrow = HTMLarrow.replace("%id%", "workBullet" + job);
			$(".date-text:last").prepend(arrow);			
					
			//format (but hide) duties for each position:
			var formattedDuties = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var dutiesID = "duties" + job;
			formattedDuties = formattedDuties.replace("%id%", dutiesID);
			$(".work-entry:last").append(formattedDuties);	
			document.getElementById(dutiesID).style.display = 'none';		

		}
	}
};

var education = {
		"schools" : [
			{
				"name" : "School of Music and Dance, University of Arizona",
				"location" : "Tucson, AZ",
				"degree" : "Doctor of Musical Arts",
				"majors" : ["clarinet performance"],
				"dates" : "2001 - 2004",
				"url" : "http://music.arizona.edu/"
			},
			{
				"name" : "Peabody Conservatory of Music of the Johns Hopkins University",
				"location" : "Baltimore, MD",
				"degree" : "Master of Music",
				"majors" : ["computer music performance and concert production"],
				"dates" : "1994 - 1999",
				"url" : "http://www.peabody.jhu.edu/"
			}, 
			{
				"name" : "Lawrence University Conservatory of Music",
				"location" : "Appleton, WI",
				"degree" : "Bachelor of Music",
				"majors" : ["clarinet performance"],
				"dates" : "1987 - 1992",
				"url" : "http://www.lawrence.edu/"
			}
		], 		
		"onlineCourses" : [
			{
				"title" : "JavaScript Basics",
				"school" : "Udacity",
				"date" : "2016",
				"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
			},			
			{
				"title" : "How to Use Git and GitHub",
				"school" : "Udacity",
				"date" : "2016",
				"url" : "https://www.udacity.com/course/viewer#!/c-ud775-nd"
			},			
			{
				"title" : "Intro to HTML and CSS",
				"school" : "Udacity",
				"date" : "2015",
				"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
			},
			{
				"title" : "Responsive Web Design Fundamentals",
				"school" : "Udacity",
				"date" : "2015",
				"url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd"
			}

		]
	};
	
education.display = function()
{
	//declare variables here to avoid scope issues in the for loops ...
	var formattedSchool = ""; //HTML string from helper.js + data from resume object from resume.js
	var programID = ""; //keep track of education programs for interactivity purposes
	var bulletID = ""; //keep track of bullets for interactivity purposes
	var formattedDates = ""; //HTML string from helper.js + data from resume object from resume.js
	var formattedDegree = ""; //HTML string from helper.js + data from resume object from resume.js
	var HTMLprogram = "<div class='position' onclick='showHide(\"%elementID%\", \"%bulletID%\");'> %data% </div>";
	var formattedProgram = ""; //HTML string from helper.js + data from resume object from resume.js
	var arrow = ""; //HTML "arrow" string from helper.js + id for item
	var formattedSubject = ""; //HTML string from helper.js + data from resume object from resume.js
	var degreeID = ""; //keep track of bullets for interactivity purposes
	var formattedMajor = ""; //HTML string from helper.js + data from resume object from resume.js
	var HTMLschoolURL = "<div class='program-text' id = '%id%'><a href = '%url%' target='_blank\' >%data%</a>"

	var formattedEdLevel = HTMLedLevelStart.replace("%data%", "Online Classes: ");
	$("#education").append(formattedEdLevel);
	for (var course in education.onlineCourses) //cycle through each online class
	{
		$("#education").append(HTMLschoolStart); //'<div class="education-entry"></div>'
		formattedSchool = HTMLschoolName.replace("%data%", education.onlineCourses[course].school);
//		formattedLocation = HTMLschoolLocation.replace("%data%", education.onlineCourses[course].location);
		$(".education-entry:last").append(formattedSchool);					

		courseID = "OC" + course; // create a unique identifier for each online course (OC)
		bulletID = "OCbullet" + course; //create a unique ID for the OC bullet

		formattedDates = HTMLschoolDates.replace("%data%", education.onlineCourses[course].date);
		var formattedTitle = HTMLschoolDegree.replace("%data%", education.onlineCourses[course].title);	
		//create a container (.position) div for each program in OC with an onclick listener that displays/hides the major		
		formattedProgram = HTMLprogram.replace("%elementID%", courseID); //set the ID for the course to show/hide 
		formattedProgram = formattedProgram.replace("%bulletID%", bulletID); //set the bullet ID for animation
		formattedProgram = formattedProgram.replace("%data%", formattedDates + formattedTitle); //add dates and degree to container
		$(".education-entry:last").append(formattedProgram);			

		//add a bullet for each degree
		arrow = HTMLarrow.replace("%id%", bulletID);
		$(".date-text:last").prepend(arrow);

		var formattedURL = HTMLschoolURL.replace("%data%", education.onlineCourses[course].url);
		formattedURL = formattedURL.replace("%url%", education.onlineCourses[course].url);
		formattedURL = formattedURL.replace("%id%", courseID);
		$(".education-entry:last").append(formattedURL); // add the program subject	
		document.getElementById(courseID).style.display = 'none'; // but hide it		
		
	}

	formattedEdLevel = HTMLedLevelStart.replace("%data%", "Degrees:");
	$("#education").append(formattedEdLevel);	
	for (var program in education.schools) //cycle through each University listed
	{

		$("#education").append(HTMLschoolStart);
		formattedSchool = HTMLschoolName.replace("%data%", education.schools[program].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[program].location);
		$(".education-entry:last").append(formattedSchool + formattedLocation);

		//create a container div for each program in schools[] with an onclick listener that displays/hides the major
		formattedDates = HTMLschoolDates.replace("%data%", education.schools[program].dates);
		formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[program].degree);	
		degreeID = "degree" + program; // create a unique identifier for each degree
		bulletID = "edBullet" + program; //create a unique ID for the bullet
		formattedProgram = HTMLprogram.replace("%elementID%", degreeID); //set the ID for the major to show/hide 
		formattedProgram = formattedProgram.replace("%bulletID%", bulletID); //set the bullet ID for the event handler
		formattedProgram = formattedProgram.replace("%data%", formattedDates + formattedDegree); //add dates and degree to container
		$(".education-entry:last").append(formattedProgram);			

		//add a bullet for each degree
		arrow = HTMLarrow.replace("%id%", bulletID);
		$(".date-text:last").prepend(arrow);

		//format major for each degree:
//		if (education.schools[program].majors)
	    HTMLschoolURL =  "<a href = '%url%' target = '_blank'>%data%</a>";
		
		var schoolURL = HTMLschoolURL.replace("%url%", education.schools[program].url);
		var schoolURL = schoolURL.replace("%data%", education.schools[program].url);
		formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[program].majors + "<br>" + schoolURL);
		formattedMajor = formattedMajor.replace("%id%", degreeID);
		
		$(".education-entry:last").append(formattedMajor);	//add major to the degree entry
		document.getElementById(degreeID).style.display = 'none'; // hide the major block		

	}

};


var	projects = {
	"projects" : [
	{
		"title" : "Interactive Event Manager",
		"dates" : "2007-present",
		"description" : "Script-driven modular environment for realization or fast prototyping of complex interactive electroacoustic systems for live performance. Originally intended for the creation of sustainable and accessible realizations of older concert works for live instruments with now-obsolete interactive electronics, IEM is also a viable platform for creating new user-friendly interactive electroacoustic works with minimal programming. (Written in Max/MSP)",
		"images" : [
			"images/IEM-a-v2.1.4-Screen-Musgrave.jpg", 
			"images/linemixer.iem.jpg"
			]
	},
	{
		"title" : "Resonance",
		"dates" : "2015",
		"description" : "An exploration of room resonances using ambient feedback controlled by a digital delay, <i>Resonance</i> was created as a sound installation for \"Unity Through the Arts and Sciences 2015\" at Mary Gage Peterson Elementary School in Chicago, IL. Sound in the space is fed into the delay line via strategically-placed microphones and played back into the room over loudspeakers. As the recorded sound re-circulates in the space, it is gradually filtered down to the natural resonant frequencies of the room. HTML5/canvas animations display the live audio frequency spectrum and tools for calculating potential resonances based on room size encourage scientific observation and experimentation of this phenomenon. (Web Audio for Chrome browser)",
		"images" : [
			"images/web-audio-resonance.jpg", 
			"images/web-audio-code.jpg"
			]
	}
	]
};


// create function property of object "projects"
projects.display = function ()
{
	//projects.projects is an array of project types which are arrays of individual projects
	if (projects.projects.length) 
	{ 
		$("#projects").append(HTMLprojectStart);
		var HTMLproject = "<div class='project' onclick='showHide(\"%elementID%\", \"%bulletID%\");'> %data% </div>";

		for (var proj in projects.projects)
		{
			//create a container div for each program in UNI with an onclick listener that displays/hides the major
			var projectID = "project" + proj; // create a unique identifier for each project
			var bulletID = "projBullet" + proj; //create a unique ID for the bullet
			//add a bullet for each project
			var arrow = HTMLarrow.replace("%id%", bulletID);
			var formattedDates = HTMLprojectDates.replace("%data%", arrow + projects.projects[proj].dates);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
			var formattedProject = HTMLproject.replace("%elementID%", projectID); //set the ID for the project description to show/hide 
			formattedProject = formattedProject.replace("%bulletID%", bulletID); //set the bullet ID for the event handler
			formattedProject = formattedProject.replace("%data%", formattedDates + formattedTitle); //add dates and title to container
			$(".project-entry:last").append(formattedProject);			

			//format details for each project:
			var projectDescription = "Description: " + projects.projects[proj].description + "<br>";
//			var HTMLwebLink = "<a href='%href%' target='_blank'>%data%</a>";
//			var projectLink = HTMLwebLink.replace("%href%", resume.projects.current[category].works[proj].weblink);
			var HTMLprojectImage = "<img src='%src%'>";
			var projectImages = "";
			if (projects.projects[proj].images.length){
				for (var img in projects.projects[proj].images)
				{
					projectImages += HTMLprojectImage.replace("%src%", projects.projects[proj].images[img]); 
				}
			}
//			projectLink = projectLink.replace("%data%", projects.projects[proj].weblink);
//			var projectPlatform = "Platform: " + projects.projects[proj].platform + "<br>";
//			var formattedDetails = HTMLprojectDescription.replace("%data%", projectPlatform + projectDescription + projectLink + projectImages);
			var formattedDetails = HTMLprojectDescription.replace("%data%", projectDescription + projectImages);
			formattedDetails = formattedDetails.replace("%id%", projectID);
			$(".project-entry:last").append(formattedDetails);	//add major to the degree entry
			document.getElementById(projectID).style.display = 'none'; // hide the major block		
		}	
	}
};

function showHide(id, bullet){
	//takes args for id of a text block to hide and id for an arrow to animate
	if(document.getElementById(id).style.display === 'none')
	{
		document.getElementById(id).style.display = 'block';
		document.getElementById(bullet).src = downArrow; //global defined image file in helper.js
	}
	else
	{
		document.getElementById(id).style.display = 'none';
		document.getElementById(bullet).src = arrow; //global defined image file in helper.js 
	}
}

bio.display();
work.display();
education.display();
projects.display();

// add the map to the mapDiv id
$("#mapDiv").append(googleMap);

$(document).click(function(loc){
	// find x,y click locations and log them to console
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

/*
function inName(name)
{
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//	console.log(name[0] + " " + name[1]);

	return name[0] + " " + name[1];
}

console.log(inName("david wetzel"));
*/
//$("#main").append(internationalizeButton);