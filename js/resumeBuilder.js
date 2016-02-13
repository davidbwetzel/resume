/*
if(bio.skills.length > 0)
{
	$("#header").prepend(HTMLskillsStart);
	console.log(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//	$("#skills").append(formattedSkill);

	for (var i = 0; i < bio.skills.length; i++)
	{
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
	
}
*/
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
			var formattedDuties = HTMLworkDescription.replace("%data%", resume.work.jobs[job].positions[position].duties);
			$(".work-entry:last").append(formattedDates + formattedTitle + formattedDuties);			
		}	
	}
}

displayWork();

projects.display = function(){
	for (var proj in projects.personal)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedProject = HTMLprojectTitle.replace("%data%", projects.personal[proj].title);
		
		$(".project-entry:last").append(formattedProject);
	}
}

projects.display();

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