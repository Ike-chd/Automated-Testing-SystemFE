var tests = document.getElementsByClassName('tests');
var alltests = [
    {
        testName: "Animals",
        questions: [
            {
                question: "What is a chicken",
                answers: [
                    {
                        answer: "bird",
                        isCorrect: true
                    },
                    {
                        answer: "reptile",
                        isCorrect: false
                    },
                    {
                        answer: "mammal",
                        isCorrect: false
                    },
                    {
                        answer: "insect",
                        isCorrect: false
                    }
                ]
            },
            {
                question: "What is an ant",
                answers: [
                    {
                        answer: "bird",
                        isCorrect: false
                    },
                    {
                        answer: "reptile",
                        isCorrect: false
                    },
                    {
                        answer: "mammal",
                        isCorrect: false
                    },
                    {
                        answer: "insect",
                        isCorrect: true
                    }
                ]
            },
            {
                question: "What is a Elephant",
                answers: [
                    {
                        answer: "bird",
                        isCorrect: false
                    },
                    {
                        answer: "reptile",
                        isCorrect: false
                    },
                    {
                        answer: "mammal",
                        isCorrect: true
                    },
                    {
                        answer: "insect",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        test: "Java",
        questions: [
            {
                question: "What is a Constructor",
                answers: [
                    {
                        answer: "An Object",
                        isCorrect: false
                    },
                    {
                        answer: "Creates objects by initializing private instance variables",
                        isCorrect: true
                    },
                    {
                        answer: "A mutator for an object at any time",
                        isCorrect: false
                    },
                    {
                        answer: "Creates objects by initializing private static variables",
                        isCorrect: false
                    },
                    {
                        answer: "An inner class",
                        isCorrect: false
                    }
                ]
            },
            {
                question: "Select All types on Inner classes",
                answers: [
                    {
                        answer: "A static inner class",
                        isCorrect: true
                    },
                    {
                        answer: "An enum",
                        isCorrect: false
                    },
                    {
                        answer: "An outer inner class",
                        isCorrect: false
                    },
                    {
                        answer: "An inner inner class",
                        isCorrect: false
                    },
                    {
                        answer: "A non-static Inner class",
                        isCorrect: true
                    },
                    {
                        answer: "An local inner class",
                        isCorrect: true
                    }
                ]
            },
            {
                question: "An array is an object",
                answers: [
                    {
                        answer: "true",
                        isCorrect: true
                    },
                    {
                        answer: "false",
                        isCorrect: false
                    }
                ]
            }
        ]
    }
];

for (var i = 0; i < tests.length; i++) {
    tests[i].addEventListener('click', function () {
        localStorage.setItem("currentTest", JSON.stringify(alltests[parseInt(this.id[1]-1)]));
        console.log(localStorage.getItem("currentTest"));
        localStorage.removeItem("currentTime");
        if(localStorage.getItem(alltests[parseInt(this.id[1]-1)].testName) === null){
            var time = this.querySelector('.time').innerHTML.split(":");
            var date = new Date();
            date.setHours(date.getHours()+parseInt(time[0]));
            date.setMinutes(date.getMinutes()+parseInt(time[1]));
            localStorage.setItem(alltests[parseInt(this.id[1]-1)].testName, date);
        }
    });
}