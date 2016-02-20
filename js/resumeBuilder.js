function displayHeader()
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

function displayWork()
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
			var HTMLposition = "<div class='position' onclick='showHide(\"duties%posNum%\", \"workBullet%posNum%\");'> %data% </div>";
			HTMLposition = HTMLposition.replace("%posNum%", positionNumber);
			HTMLposition = HTMLposition.replace("%posNum%", positionNumber);

//			var bullet = "<div class='more' id='%id%'> (show more ...) </div>";
			var workBulletId = "workBullet" + positionNumber;
//			bullet = bullet.replace("%id%", workBulletId);

			var formattedTitle = HTMLworkTitle.replace("%data%", resume.work.jobs[job].positions[position].title);	
			var formattedDates = HTMLworkDates.replace("%data%", resume.work.jobs[job].positions[position].dates);
			if (resume.work.jobs[job].positions[position].department){
				var formattedDept = HTMLworkDept.replace("%data%", resume.work.jobs[job].positions[position].department);
				HTMLposition = HTMLposition.replace("%data%", formattedDates + formattedTitle + formattedDept);
			} else 	HTMLposition = HTMLposition.replace ("%data%", formattedDates + formattedTitle);			

			$(".work-entry:last").append(HTMLposition);
			
			var arrow = "<image class='bullet' id='workBullet" + positionNumber + "' src='images/arrow.jpg'/>";
//			$(".date-text:last").prepend("bullet - ");			
			$(".date-text:last").prepend(arrow);			
						
			//format duties for each position:
			var formattedDuties = HTMLworkDescription.replace("%data%", resume.work.jobs[job].positions[position].duties);
			var dutiesID = "duties" + job + "." + position;
			var formattedDuties = formattedDuties.replace("%id%", dutiesID);
//			$(".work-entry:last").append(formattedDates + formattedTitle + formattedDuties);			
			$(".work-entry:last").append(formattedDuties);	
			document.getElementById(dutiesID).style.display = 'none';		

		}	
	}
}

function showHide(id, bullet){
	if(document.getElementById(id).style.display === 'none')
	{
		document.getElementById(id).style.display = 'block';
		document.getElementById(bullet).src = "images/arrow-down.jpg";
	}
	else
	{
		document.getElementById(id).style.display = 'none';
		document.getElementById(bullet).src = "images/arrow.jpg";
	}
}

function displayEducation()
{
//	var formattedEdLevel = HTMLedLevelStart.replace("%data%", "Continuing education: ");
//	$("#education").append(formattedEdLevel);
	for (var program in resume.education.CEU) //cycle through each Continuing Ed program
	{
		$("#education").append(HTMLschoolStart); //'<div class="education-entry"></div>'
		var formattedSchool = HTMLschoolName.replace("%data%", resume.education.CEU[program].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", resume.education.CEU[program].location);
		$(".education-entry:last").append(formattedSchool + formattedLocation);					
		var formattedDegree = HTMLschoolDegree.replace("%data%", resume.education.CEU[program].program);	
		var formattedDates = HTMLschoolDates.replace("%data%", resume.education.CEU[program].year);
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
		var formattedDegree = HTMLschoolDegree.replace("%data%", resume.education.UNI[school].degree);	
		var formattedDates = HTMLschoolDates.replace("%data%", resume.education.UNI[school].year);
		var formattedMajor = HTMLschoolMajor.replace("%data%", resume.education.UNI[school].major);
		$(".education-entry:last").append(formattedDates + formattedDegree + formattedMajor);			
	}
}

/*
// create function property of object "projects"
function displayProjects()
{
	for (var proj in resume.projects.personal)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedProject = HTMLprojectTitle.replace("%data%", resume.projects.personal[proj].title);
		
		$(".project-entry:last").append(formattedProject);
	}
}
*/
function displayProjects()
{
	for (var proj in resume.projects.professional)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedProject = HTMLprojectTitle.replace("%data%", resume.projects.professional[proj].title);
		
		$(".project-entry:last").append(formattedProject);
	}
}

//resume.bio.display();
displayHeader();
//resume.work.display();
displayWork();
//resume.education.display();
displayEducation();
//resume.projects.display();
displayProjects();

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