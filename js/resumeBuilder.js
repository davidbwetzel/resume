resume.bio.display = function()
{
	var formattedName = HTMLheaderName.replace("%data%", resume.bio.name);
	$("#header").append(formattedName);
	
	if(resume.bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);
		for (var skill in resume.bio.skills)
		{
			var formattedSkill = HTMLskills.replace("%data%", resume.bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}	
	}
}

resume.work.display = function()
{
	for (var job in resume.work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", resume.work.jobs[job].employer);
		var formattedLocation = HTMLworkLocation.replace("%data%", resume.work.jobs[job].location);
		$(".work-entry:last").append(formattedEmployer + formattedLocation);
		
		for(var position in resume.work.jobs[job].positions)
		{			
			var positionNumber = job + "." + position;
			var workBulletId = "workBullet" + positionNumber;
			var dutiesId = "workBullet" + positionNumber;
			
			var HTMLposition = "<div class='position' onclick='showHide(\"duties%posNum%\", \"workBullet%posNum%\");'> %data% </div>";
			HTMLposition = HTMLposition.replace("%posNum%", positionNumber);
			HTMLposition = HTMLposition.replace("%posNum%", positionNumber);


			var formattedTitle = HTMLworkTitle.replace("%data%", resume.work.jobs[job].positions[position].title);	
			var formattedDates = HTMLworkDates.replace("%data%", resume.work.jobs[job].positions[position].dates);
			if (resume.work.jobs[job].positions[position].department){
				var formattedDept = HTMLworkDept.replace("%data%", resume.work.jobs[job].positions[position].department);
				HTMLposition = HTMLposition.replace("%data%", formattedDates + formattedTitle + formattedDept);
			} else 	HTMLposition = HTMLposition.replace ("%data%", formattedDates + formattedTitle);			

			$(".work-entry:last").append(HTMLposition);
			
			//in helper.js: var arrow = "<image class='bullet' id='%id%' src='images/arrow.jpg'/>";
			var arrow = HTMLarrow.replace("%id%", "workBullet" + positionNumber);
			$(".date-text:last").prepend(arrow);			
						
			//format (but hide) duties for each position:
			var formattedDuties = HTMLworkDescription.replace("%data%", resume.work.jobs[job].positions[position].duties);
			var dutiesID = "duties" + job + "." + position;
			var formattedDuties = formattedDuties.replace("%id%", dutiesID);
			$(".work-entry:last").append(formattedDuties);	
			document.getElementById(dutiesID).style.display = 'none';		

		}	
	}
}

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

resume.education.display = function()
{
//	var formattedEdLevel = HTMLedLevelStart.replace("%data%", "Continuing education: ");
//	$("#education").append(formattedEdLevel);
	for (var program in resume.education.CEU) //cycle through each Continuing Ed program
	{
		$("#education").append(HTMLschoolStart); //'<div class="education-entry"></div>'
		var formattedSchool = HTMLschoolName.replace("%data%", resume.education.CEU[program].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", resume.education.CEU[program].location);
		$(".education-entry:last").append(formattedSchool + formattedLocation);					

		var programID = "program" + program; // create a unique identifier for each degree
		var bulletID = "CEUbullet" + program; //create a unique ID for the bullet

		var formattedDates = HTMLschoolDates.replace("%data%", resume.education.CEU[program].year);
		var formattedDegree = HTMLschoolDegree.replace("%data%", resume.education.CEU[program].program);	
		//create a container (.position) div for each program in CEU with an onclick listener that displays/hides the major		
		var HTMLprogram = "<div class='position' onclick='showHide(\"%elementID%\", \"%bulletID%\");'> %data% </div>"; // move to helper.js
		var formattedProgram = HTMLprogram.replace("%elementID%", programID); //set the ID for the program to show/hide 
		formattedProgram = formattedProgram.replace("%bulletID%", bulletID); //set the bullet ID for animation
		formattedProgram = formattedProgram.replace("%data%", formattedDates + formattedDegree); //add dates and degree to container
		$(".education-entry:last").append(formattedProgram);			

		//add a bullet for each degree
		var arrow = HTMLarrow.replace("%id%", bulletID);
		$(".date-text:last").prepend(arrow);

		var formattedSubject = HTMLschoolSubject.replace("%data%", resume.education.CEU[program].subject);
		formattedSubject = formattedSubject.replace("%id%", programID);
		$(".education-entry:last").append(formattedSubject); // add the program subject	
		document.getElementById(programID).style.display = 'none'; // but hide it		
		
	}

//	var formattedEdLevel = HTMLedLevelStart.replace("%data%", "Degrees:");
//	$("#education").append(formattedEdLevel);	
	for (var school in resume.education.UNI) //cycle through each University listed
	{

		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%", resume.education.UNI[school].name + ", " + resume.education.UNI[school].institution);
		var formattedLocation = HTMLschoolLocation.replace("%data%", resume.education.UNI[school].location);
		$(".education-entry:last").append(formattedSchool + formattedLocation);

		//create a container div for each program in UNI with an onclick listener that displays/hides the major
		var HTMLprogram = "<div class='position' onclick='showHide(\"%elementID%\", \"%bulletID%\");'> %data% </div>";
		var formattedDates = HTMLschoolDates.replace("%data%", resume.education.UNI[school].year);
		var formattedDegree = HTMLschoolDegree.replace("%data%", resume.education.UNI[school].degree);	
		var degreeID = "degree" + school; // create a unique identifier for each degree
		var bulletID = "edBullet" + school; //create a unique ID for the bullet
		var formattedProgram = HTMLprogram.replace("%elementID%", degreeID); //set the ID for the major to show/hide 
		formattedProgram = formattedProgram.replace("%bulletID%", bulletID); //set the bullet ID for the event handler
		formattedProgram = formattedProgram.replace("%data%", formattedDates + formattedDegree); //add dates and degree to container
		$(".education-entry:last").append(formattedProgram);			

		//add a bullet for each degree
		var arrow = HTMLarrow.replace("%id%", bulletID);
		$(".date-text:last").prepend(arrow);

		//format major for each degree:
		var formattedMajor = HTMLschoolMajor.replace("%data%", resume.education.UNI[school].major);
		formattedMajor = formattedMajor.replace("%id%", degreeID);
		$(".education-entry:last").append(formattedMajor);	//add major to the degree entry
		document.getElementById(degreeID).style.display = 'none'; // hide the major block		

	}
}

// create function property of object "projects"
resume.projects.display = function ()
{
	//resume.projects is an array of project types which are arrays of individual projects
	for (var category in resume.projects.current) // for each type of project, create a new project heading
	{ 
		$("#projects").append(HTMLprojectStart);
		//each category is a heading formatted the same as employer or school
		var formattedCategory = HTMLprojectCategory.replace("%data%", resume.projects.current[category].category);		
		$(".project-entry:last").append(formattedCategory);

		for (var proj in resume.projects.current[category].works)
		{
			console.log(resume.projects.current[category].works[proj].title);
			//create a container div for each program in UNI with an onclick listener that displays/hides the major

			//create a container div for each program in UNI with an onclick listener that displays/hides the major
			var HTMLproject = "<div class='project' onclick='showHide(\"%elementID%\", \"%bulletID%\");'> %data% </div>";
			var projectID = "project" + category + "." + proj; // create a unique identifier for each degree
			var bulletID = "projBullet" + category + "." + proj; //create a unique ID for the bullet
			//add a bullet for each project
			var arrow = HTMLarrow.replace("%id%", bulletID);
			var formattedDates = HTMLprojectDates.replace("%data%", arrow + resume.projects.current[category].works[proj].dates);
			var formattedTitle = HTMLprojectTitle.replace("%data%", resume.projects.current[category].works[proj].title);	
			var formattedProject = HTMLproject.replace("%elementID%", projectID); //set the ID for the major to show/hide 
			formattedProject = formattedProject.replace("%bulletID%", bulletID); //set the bullet ID for the event handler
			formattedProject = formattedProject.replace("%data%", formattedDates + formattedTitle); //add dates and title to container
			$(".project-entry:last").append(formattedProject);			

			//format details for each project:
			var formattedDetails = HTMLprojectDescription.replace("%data%", resume.projects.current[category].works[proj].description);
			formattedDetails = formattedDetails.replace("%id%", projectID);
			$(".project-entry:last").append(formattedDetails);	//add major to the degree entry
			document.getElementById(projectID).style.display = 'none'; // hide the major block		


		}	
	}
}

resume.bio.display();
resume.work.display();
resume.education.display();
resume.projects.display();

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