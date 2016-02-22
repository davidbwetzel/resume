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
	if(document.getElementById(id).style.display === 'none')
	{
		document.getElementById(id).style.display = 'block';
		document.getElementById(bullet).src = downArrow;
	}
	else
	{
		document.getElementById(id).style.display = 'none';
		document.getElementById(bullet).src = arrow;
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

		var formattedDates = HTMLschoolDates.replace("%data%", resume.education.CEU[program].year);
		var formattedDegree = HTMLschoolDegree.replace("%data%", resume.education.CEU[program].program);	
		var formattedSubject = HTMLschoolSubject.replace("%data%", resume.education.CEU[program].subject);
		$(".education-entry:last").append(formattedDates + formattedDegree + formattedSubject);			
	}

//	var formattedEdLevel = HTMLedLevelStart.replace("%data%", "Degrees:");
//	$("#education").append(formattedEdLevel);	
	for (var school in resume.education.UNI) //cycle through each University listed
	{

		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%", resume.education.UNI[school].name + ", " + resume.education.UNI[school].institution);
		var formattedLocation = HTMLschoolLocation.replace("%data%", resume.education.UNI[school].location);
		$(".education-entry:last").append(formattedSchool + formattedLocation);

/*		//TODO: add these to the degree container instead
		var formattedDates = HTMLschoolDates.replace("%data%", resume.education.UNI[school].year);
		var formattedDegree = HTMLschoolDegree.replace("%data%", resume.education.UNI[school].degree);	
		$(".education-entry:last").append(formattedDates + formattedDegree);			
		//add a bullet for each degree
//		var arrow = HTMLarrow.replace("%id%", bulletID);
		var arrow = HTMLarrow.replace("%id%", "degreeBullet" + school);
		$(".date-text:last").prepend(arrow);
*/

		//create a container div for each degree with an onclick listener that displays/hides the major
		var HTMLdegree = "<div class='position' onclick='showHide(\"%elementID%\", \"%bulletID%\");'> %data% </div>";
		var formattedDates = HTMLschoolDates.replace("%data%", resume.education.UNI[school].year);
		var formattedDegree = HTMLschoolDegree.replace("%data%", resume.education.UNI[school].degree);	
		var degreeID = "degree" + school; // create a unique identifier for each degree
		var bulletID = "edBullet" + school; //create a unique ID for the bullet
		HTMLdegree = HTMLdegree.replace("%elementID%", degreeID); //set the ID for the major to show/hide 
		HTMLdegree = HTMLdegree.replace("%bulletID%", bulletID); //set the bullet ID for the event handler
		HTMLdegree = HTMLdegree.replace("%data%", formattedDates + formattedDegree); //add dates and degree to container

		$(".education-entry:last").append(HTMLdegree);			
		//add a bullet for each degree
		var arrow = HTMLarrow.replace("%id%", bulletID);
//		var arrow = HTMLarrow.replace("%id%", "degreeBullet" + school);
		$(".date-text:last").prepend(arrow);

		
	
		//format major for each degree:
		var formattedMajor = HTMLschoolMajor.replace("%data%", resume.education.UNI[school].major);
		var formattedDuties = formattedMajor.replace("%id%", degreeID);
		$(".education-entry:last").append(formattedDuties);	
		document.getElementById(degreeID).style.display = 'none';		

	}
}

// create function property of object "projects"
resume.projects.display = function ()
{
	for (var proj in resume.projects.professional)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedProject = HTMLprojectTitle.replace("%data%", resume.projects.professional[proj].title);
		
		$(".project-entry:last").append(formattedProject);
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