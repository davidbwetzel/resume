
if(resume.bio.skills.length > 0)
{
	$("#header").prepend(HTMLskillsStart);
	console.log(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", resume.bio.skills[0]);
//	$("#skills").append(formattedSkill);

	for (var i = 0; i < resume.bio.skills.length; i++)
	{
		formattedSkill = HTMLskills.replace("%data%", resume.bio.skills[i]);
		$("#skills").append(formattedSkill);
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
			var formattedTitle = HTMLworkTitle.replace("%data%", resume.work.jobs[job].positions[position].title);	
			var formattedDates = HTMLworkDates.replace("%data%", resume.work.jobs[job].positions[position].dates);
			if (resume.work.jobs[job].positions[position].department){
				var formattedDept = HTMLworkDept.replace("%data%", resume.work.jobs[job].positions[position].department);
				$(".work-entry:last").append(formattedDates + formattedTitle + formattedDept);
			} else 	$(".work-entry:last").append(formattedDates + formattedTitle);			
			var formattedDuties = HTMLworkDescription.replace("%data%", resume.work.jobs[job].positions[position].duties);
//			$(".work-entry:last").append(formattedDates + formattedTitle + formattedDuties);			
			$(".work-entry:last").append(formattedDuties);			
		}	
	}
}

function displayEducation()
{
	var formattedEdLevel = HTMLedLevelStart.replace("%data%", "Continuing education: ");
	$("#education").append(formattedEdLevel);
	for (var program in resume.education.CEU) //cycle through each Continuing Ed program
	{
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%", resume.education.CEU[program].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", resume.education.CEU[program].location);
		$(".education-entry:last").append(formattedSchool + formattedLocation);					
		var formattedDegree = HTMLschoolDegree.replace("%data%", resume.education.CEU[program].program);	
		var formattedDates = HTMLschoolDates.replace("%data%", resume.education.CEU[program].year);
		var formattedSubject = HTMLschoolSubject.replace("%data%", resume.education.CEU[program].subject);
		$(".education-entry:last").append(formattedDates + formattedDegree + formattedSubject);			
		
	}
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

resume.projects.display = function(){
	for (var proj in resume.projects.personal)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedProject = HTMLprojectTitle.replace("%data%", resume.projects.personal[proj].title);
		
		$(".project-entry:last").append(formattedProject);
	}
}

displayWork();
displayEducation();
resume.projects.display();

// add the map to the mapDiv id
// $("#mapDiv").append(googleMap);

$(document).click(function(loc){
	// find x,y click locations and log them to console
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name)
{
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//	console.log(name[0] + " " + name[1]);

	return name[0] + " " + name[1];
}

console.log(inName("david wetzel"));

//$("#main").append(internationalizeButton);