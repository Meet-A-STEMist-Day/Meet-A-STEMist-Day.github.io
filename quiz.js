var questions = [
	// Prompt = Question
	{
        prompt: 
        "\nWhat is STEM? \n(Type a, b, c or d) \
        \n(a) The main body of a plant. \
        \n(b) An undifferentiated cell of a multicellular organism. \
        \n(c) Science, technology, enterprise and mathematics. \
        \n(d) An approach to learning and development that integrates \
        the areas of science, technology, engineering and mathematics. \n",

		answer: "d"
	},
	
	{
        prompt: "\nWhich of the following is NOT a STEM career? \n(Type a, b, c or d) \
        \n(a) Software developer \
        \n(b) Political scientist \
        \n(c) Accountant \
        \n(d) Statistician",

		answer: "b"
	},
	
	{
        prompt: "\nWhich statement about the STEM gender gap is true? \n(Type a, b, c or d) \
        \n(a) There are more women in STEM then men. \
        \n(b) Men always do better than women in STEM tests and projects. \
        \n(c) Women make up only ~20% of students in STEM majors in the US. \
        \n(d) Gender gap? What gender gap?",

		answer: "c"
	},	
];

var score = 0; // How many questions the user got correct

/* Loop through all the questions & ask each question individually, get response, see if it's right,
 then tell the user if it's correct */

// Loop for as many questions that are present in the array
for(var i = 0; i < questions.length; i++) {
	var response = window.prompt(questions[i].prompt);
	// Open up a window prompt to insert text
	// The (question[i].prompt) is acessing the certain question defined in the array
	
	// Check if the user got the correct answer
	if(response === questions[i].answer){  // Check if the response typed in is the same as the one in the array
		score++; // If they got the question right, a point is incremented
		alert("\n Correct answer! \n");
	}
	
	else {
		alert("\n Wrong answer! \n");
	}
}

alert ("You got " + score + "/" + questions.length);