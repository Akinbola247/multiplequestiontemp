const nextToQuestion2 = document.querySelector(".next-to-question-2")
const prevToQuestion1 = document.querySelector(".prev-to-question-1")
const question2 = document.querySelector(".Question2")
const question1 = document.querySelector(".Question1")

const nextToQuestion3 = document.querySelector(".next-to-question-3")
const prevToQuestion2 = document.querySelector(".prev-to-question-2")
const question3 = document.querySelector(".Question3")

const nextToQuestion4 = document.querySelector(".next-to-question-4")
const prevToQuestion3 = document.querySelector(".prev-to-question-3")
const question4 = document.querySelector(".Question4")

const nextToQuestion5 = document.querySelector(".next-to-question-5")
const prevToQuestion4 = document.querySelector(".prev-to-question-4")
const question5 = document.querySelector(".Question5")

const nextToQuestion6 = document.querySelector(".next-to-question-6")
const prevToQuestion5 = document.querySelector(".prev-to-question-5")
const question6 = document.querySelector(".Question6")

const nextToQuestion7 = document.querySelector(".next-to-question-7")
const prevToQuestion6 = document.querySelector(".prev-to-question-6")
const question7 = document.querySelector(".Question7")

const nextToQuestion8 = document.querySelector(".next-to-question-8")
const prevToQuestion7 = document.querySelector(".prev-to-question-7")
const question8 = document.querySelector(".Question8")

const nextToQuestion9 = document.querySelector(".next-to-question-9")
const prevToQuestion8 = document.querySelector(".prev-to-question-8")
const question9 = document.querySelector(".Question9")

const nextToQuestion10 = document.querySelector(".next-to-question-10")
const prevToQuestion9 = document.querySelector(".prev-to-question-9")
const question10 = document.querySelector(".Question10")

const nextToQuestion11 = document.querySelector(".next-to-question-11")
const prevToQuestion10 = document.querySelector(".prev-to-question-10")
const question11 = document.querySelector(".Question11")

const nextToQuestion12 = document.querySelector(".next-to-question-12")
const prevToQuestion11 = document.querySelector(".prev-to-question-11")
const question12 = document.querySelector(".Question12")

const nextToQuestion13 = document.querySelector(".next-to-question-13")
const prevToQuestion12 = document.querySelector(".prev-to-question-12")
const question13 = document.querySelector(".Question13")

const nextToQuestion14 = document.querySelector(".next-to-question-14")
const prevToQuestion13 = document.querySelector(".prev-to-question-13")
const question14 = document.querySelector(".Question14")

const nextToQuestion15 = document.querySelector(".next-to-question-15")
const prevToQuestion14 = document.querySelector(".prev-to-question-14")
const question15 = document.querySelector(".Question15")

const total = [];

const radioButton1 = document.querySelector("#radio-1")
const radioButton2 = document.querySelector("#radio-2")
const radioButton3 = document.querySelector("#radio-3")

const radioButton4 = document.querySelector("#radio-4")
const radioButton5 = document.querySelector("#radio-5")
const radioButton6 = document.querySelector("#radio-6")

const radioButton7 = document.querySelector("#radio-7")
const radioButton8 = document.querySelector("#radio-8")
const radioButton9 = document.querySelector("#radio-9")

const radioButton10 = document.querySelector("#radio-10")
const radioButton11 = document.querySelector("#radio-11")
const radioButton12= document.querySelector("#radio-12")

const radioButton13 = document.querySelector("#radio-13")
const radioButton14 = document.querySelector("#radio-14")
const radioButton15 = document.querySelector("#radio-15")

const radioButton16 = document.querySelector("#radio-16")
const radioButton17 = document.querySelector("#radio-17")
const radioButton18 = document.querySelector("#radio-18")

const radioButton19= document.querySelector("#radio-19")
const radioButton20 = document.querySelector("#radio-20")
const radioButton21 = document.querySelector("#radio-21")

const radioButton22= document.querySelector("#radio-22")
const radioButton23 = document.querySelector("#radio-23")
const radioButton24 = document.querySelector("#radio-24")

const radioButton25 = document.querySelector("#radio-25")
const radioButton26 = document.querySelector("#radio-26")
const radioButton27 = document.querySelector("#radio-27")

const radioButton28= document.querySelector("#radio-28")
const radioButton29 = document.querySelector("#radio-29")
const radioButton30 = document.querySelector("#radio-30")

const radioButton31 = document.querySelector("#radio-31")
const radioButton32 = document.querySelector("#radio-32")
const radioButton33 = document.querySelector("#radio-33")

const radioButton34 = document.querySelector("#radio-34")
const radioButton35 = document.querySelector("#radio-35")
const radioButton36 = document.querySelector("#radio-36")

const radioButton37 = document.querySelector("#radio-37")
const radioButton38= document.querySelector("#radio-38")
const radioButton39 = document.querySelector("#radio-39")

const radioButton40 = document.querySelector("#radio-40")
const radioButton41 = document.querySelector("#radio-41")
const radioButton42 = document.querySelector("#radio-42")

const submittedPage = document.querySelector(".submitted")
const submit = document.querySelector(".submit")
const radioButton43 = document.querySelector("#radio-43")
const radioButton44 = document.querySelector("#radio-44")
const radioButton45 = document.querySelector("#radio-45")

const score = document.querySelector(".score")

startButton= document.querySelector(".startbutton")
introduction = document.querySelector (".introduction")
namename = document.querySelector("#namename")
welcome = document.querySelector(".welcome")
welcomeText = document.querySelector(".welcometext")





// SUBMIT BUTTON
submit.addEventListener("click", function(){
    submittedPage.style.display = "block"
    question15.style.display = "none"
    if (radioButton43.checked === true){
        total.push("correct15")
    }
    score.innerText = "Your Score is" + " " + total.length 
})


startButton.addEventListener("click", function(){
    introduction.style.display = 'none'
    question1.style.display = 'block';
    welcomeText.innerText = "WELCOME" + " " + namename.value
    welcome.style.display = 'block'
    
})


// NEXT BUTTON

nextToQuestion2.addEventListener("click",function(){
    question1.style.display = "none"
    question2.style.display = "block"
    if (radioButton1.checked === true){
        total.push("correct1")
    }
});

nextToQuestion3.addEventListener("click",function(){
    question2.style.display = "none"
    question3.style.display = "block"
    if (radioButton4.checked === true){
        total.push("correct2")
    }
});
nextToQuestion4.addEventListener("click",function(){
    question3.style.display = "none"
    question4.style.display = "block"
    if (radioButton7.checked === true){
        total.push("correct3")
    }
});

nextToQuestion5.addEventListener("click",function(){
    question4.style.display = "none"
    question5.style.display = "block"
    if (radioButton10.checked === true){
        total.push("correct4")
    }
});

nextToQuestion6.addEventListener("click",function(){
    question5.style.display = "none"
    question6.style.display = "block"
    if (radioButton13.checked === true){
        total.push("correct5")
    }
});

nextToQuestion7.addEventListener("click",function(){
    question6.style.display = "none"
    question7.style.display = "block"
    if (radioButton16.checked === true){
        total.push("correct6")
    }
});

nextToQuestion8.addEventListener("click",function(){
    question7.style.display = "none"
    question8.style.display = "block"
    if (radioButton19.checked === true){
        total.push("correct7")
    }
});

nextToQuestion9.addEventListener("click",function(){
    question8.style.display = "none"
    question9.style.display = "block"
    if (radioButton22.checked === true){
        total.push("correct8")
    }
});
nextToQuestion10.addEventListener("click",function(){
    question9.style.display = "none"
    question10.style.display = "block"
    if (radioButton25.checked === true){
        total.push("correct9")
    }
});
nextToQuestion11.addEventListener("click",function(){
    question10.style.display = "none"
    question11.style.display = "block"
    if (radioButton28.checked === true){
        total.push("correct10")
    }
});
nextToQuestion12.addEventListener("click",function(){
    question11.style.display = "none"
    question12.style.display = "block"
    if (radioButton31.checked === true){
        total.push("correct11")
    }
});
nextToQuestion13.addEventListener("click",function(){
    question12.style.display = "none"
    question13.style.display = "block"
    if (radioButton34.checked === true){
        total.push("correct12")
    }
});
nextToQuestion14.addEventListener("click",function(){
    question13.style.display = "none"
    question14.style.display = "block"
    if (radioButton37.checked === true){
        total.push("correct13")
    }
});
nextToQuestion15.addEventListener("click",function(){
    question14.style.display = "none"
    question15.style.display = "block"
    if (radioButton40.checked === true){
        total.push("correct14")
    }
});






// PREV BUTTON

prevToQuestion1.addEventListener("click", function(){
    question1.style.display = "block"
    question2.style.display = "none"
    total.pop();
})

prevToQuestion2.addEventListener("click",function(){
    question2.style.display = "block";
    question3.style.display = "none";
    total.pop();
});

prevToQuestion3.addEventListener("click",function(){
    question3.style.display = "block"
    question4.style.display = "none"
    total.pop();
});
prevToQuestion4.addEventListener("click",function(){
    question4.style.display = "block"
    question5.style.display = "none"
    total.pop();
});
prevToQuestion5.addEventListener("click",function(){
    question5.style.display = "block"
    question6.style.display = "none"
    total.pop();
});
prevToQuestion6.addEventListener("click",function(){
    question6.style.display = "block"
    question7.style.display = "none"
    total.pop();
});
prevToQuestion7.addEventListener("click",function(){
    question7.style.display = "block"
    question8.style.display = "none"
    total.pop();
});
prevToQuestion8.addEventListener("click",function(){
    question8.style.display = "block"
    question9.style.display = "none"
    total.pop();
});
prevToQuestion9.addEventListener("click",function(){
    question9.style.display = "block"
    question10.style.display = "none"
    total.pop();
});

prevToQuestion10.addEventListener("click",function(){
    question10.style.display = "block"
    question11.style.display = "none"
    total.pop();
});
prevToQuestion11.addEventListener("click",function(){
    question11.style.display = "block"
    question12.style.display = "none"
    total.pop();
});
prevToQuestion12.addEventListener("click",function(){
    question12.style.display = "block"
    question13.style.display = "none"
    total.pop();
});
prevToQuestion13.addEventListener("click",function(){
    question13.style.display = "block"
    question14.style.display = "none"
    total.pop();
});
prevToQuestion14.addEventListener("click",function(){
    question14.style.display = "block"
    question15.style.display = "none"
    total.pop();
});