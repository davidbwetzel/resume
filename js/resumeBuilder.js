// $("#main").append("David B. Wetzel, DMA <br>");

// var awesomeThoughts = "I am Possum, and I am AWESOME!"

// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// console.log(funThoughts);

// $("#main").append(funThoughts);

var formattedName = "David B. Wetzel, DMA";

var formattedRole = "Musician, Educator, Web & Interactive Software Developer";

formattedName = HTMLheaderName.replace("%data%", formattedName);
formattedRole = HTMLheaderRole.replace("%data%", formattedRole);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);




