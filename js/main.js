//1- Storing for quotes and authors
//2- Function =>>> Button
//3- Generate first quote and author (innerHTML)
//document.getElementById
//4- Randomization index
//5- Math.random() return fraction numbers 0 -1
//6 Round generated index 
//7- Prevent the repititon of the last index generated.
var quoteArray = [
    { // Index = 0
        line: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {// Index = 1
        line: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {// Index = 2
        line: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero",
    },
    {// Index = 3
        line: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West",
    },
    {// Index = 4
        line: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi",
    }
];
var previousIndex;
//1-If statement
// var generateQuote = function () {
//     console.log(previousIndex, "Before generating random number")
//     var randomIndex = Math.floor(Math.random() * quoteArray.length);
//     if (previousIndex === randomIndex) {
//         randomIndex = (randomIndex + 1) % 5;
//     }
//     previousIndex = randomIndex;
//     console.log(previousIndex, "After generating random number");
//     document.getElementById("quote").innerHTML = quoteArray[randomIndex].line;
//     document.getElementById("author").innerHTML = quoteArray[randomIndex].author;
// }

//2- Do While loop!
// var generateQuote = function () {
//     console.log(previousIndex, "Before generating random number")
//     var randomIndex;
//     do {
//         randomIndex = Math.floor(Math.random() * quoteArray.length);
//         console.log("Hello from do while Loop!");
//     }
//     while (randomIndex === previousIndex)
//     previousIndex = randomIndex;
//     document.getElementById("quote").innerHTML = quoteArray[randomIndex].line;
//     document.getElementById("author").innerHTML = quoteArray[randomIndex].author;
// }
// 3- While Loop Solution [Best Practice!]  
var generateQuote = function () {
    var randomIndex = Math.floor(Math.random() * quoteArray.length);
    while (randomIndex === previousIndex) {
        randomIndex = Math.floor(Math.random() * quoteArray.length); //Re-aassign!
    }
    previousIndex = randomIndex;
    document.getElementById("quote").innerHTML = quoteArray[randomIndex].line;
    document.getElementById("author").innerHTML = quoteArray[randomIndex].author;
}


//Git = > Tool "tracking" changes project "development" "Collaborations between developers"

//Git == == > Tool Software
//Github ==>  Server ^^^ Remote Repo