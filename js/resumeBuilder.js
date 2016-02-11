
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
	for (var job in work.positions)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.positions[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.positions[job].jobtitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.positions[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.positions[job].dates);
		var formattedDuties = " ";
		for (var i = 0; i < work.positions[job].duties.length; i++)
		{
			var duty = HTMLworkDescription.replace("%data%", work.positions[job].duties[i]);
			formattedDuties = formattedDuties.concat(duty);
		}
		
		var formattedJob = formattedEmployer + formattedLocation + formattedTitle + formattedDates + formattedDuties;
		
		$(".work-entry:last").append(formattedJob);

	}
}

displayWork();

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

$("#main").append(internationalizeButton);