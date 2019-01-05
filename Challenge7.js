//////////////////////////////////////
// Coding Challenge

/*
1.  Build a function constructor called question to describe a question. A question should include: -DONE
    a) question itself
    b) the answers from which the player can choose the correct on (choose an adequate data structure here, array, object, etc.)
    c) correct answer (I would use a number for this)

2.  Create a couple of questions using constructor - DONE

3.  Store them all inside an array -DONE

4.  Select one random question and log it on the console, together with the possible answers (each question should have a number) ( Hint: write a method for the 
    Question objects for this task). - DONE

5.   Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4. -DONE

6.  Check if the answer is correct and print to the console whether the answer is correct of not (Hint: write another method for this). - DONE

7.  Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code
    (Hint: we learned a special technique to do exactly that).

-- Expert Level --

8.   After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result.) - DONE

9.  Be careful: after task 8, the game will not end. So include the option to quit the game if the user writes exit instead of the answer. In this case, DON'T call the function from 
    task 8. - DONE

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to,
    just do this with the tools you feel more comfortable with.) -DONE

11. Display the score in the console. Use another method for this. -DONE

*/
// global variables
var questionList = [], currentQuestion, userAnswer, isPlaying = true, score = 0;

// function constructor (object class).
var Question = function(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

// questions using the Question object (function constructor).
questionList.push(new Question('Name of Moe\'s dog?', ['jack', 'bob', 'hunter', 'dog'], 3));
questionList.push(new Question('Best method of cooking on the barbeque?', ['boiling', 'slow and low', 'deep fry'], 2));
questionList.push(new Question(' What sweet food made by bees using nectar from flowers?', ['chocolate', 'milk', 'butter', 'honey'], 4));



while (isPlaying) {
    userAnswer = null;
    selectQuestion()
        // console.log(currentQuestion);
    while (userAnswer == null || userAnswer == "") {
        printQuestion(questionList[currentQuestion]);
        promptUser();
    }    
    
        // console.log(userAnswer);
    var results = checkAnswer(userAnswer, questionList[currentQuestion]);

    if (results == null) {

    } else if (results) {
        console.log('That was correct!!!');
        score++; 
    } else {
        console.log('That is Incorrect!!!');
    }
}






// FUNCTIONS
// Prompt User
function promptUser(){
    userAnswer = prompt('Please select an answer');
    if (userAnswer == 'exit'){
        isPlaying = false;
        console.log('GAME OVER MAN!!!');
    }
}

//Checks answer against user input
function checkAnswer(answer, question) {
    // console.log('user answer: ' + answer);
    // console.log('Correct answer: ' + question.correctAnswer);
return answer == question.correctAnswer ? true : false;
}

// Prints the Question
function printQuestion(questionObj){
    console.log('-------------------------------------------------------------');
    console.log('Player Score: ' + score);
    console.log(questionObj.question);
    printAnswers(questionObj.answers);
};

// Prints the Answers
function printAnswers(answers){
    for (let i = 0; i < answers.length; i++) {
        const element = answers[i];
        console.log(i+1 + ' ' + element);
    }
};

// randomly selects a question
function selectQuestion() {
    currentQuestion = Math.floor( Math.random() * questionList.length ); 
};