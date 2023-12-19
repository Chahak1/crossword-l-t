const startBtn = document.querySelector('.start-btn');
const puz = document.querySelector('.container');
const puzz = document.querySelector('.puzzle-section');
const exitbtn = document.querySelector('.exit-btn');
const submit = document.querySelector('.sub');
const popupInfo = document.querySelector('.popup-info');
const crossword = document.querySelector('.crossword');
const main = document.querySelector('.main');
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

startBtn.onclick = () => {
    puzz.classList.add('active');
    main.classList.remove('active');
    startTimer(15); //calling startTimer function
    startTimerLine(0);
}

submit.onclick = () => {
    main.classList.add('active');
    popupInfo.classList.add("active");
    crossword.classList.add("active");

}
exitbtn.onclick = () => {
    main.classList.remove('active');
    puzz.classList.remove('active');
    popupInfo.classList.remove("active");

}
function startTimer(time){
    counter = setInterval(timer, 100000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
        }}}
        function startTimerLine(time){
            counterLine = setInterval(timer, 29);
            function timer(){
                time += 1; //upgrading time value with 1
                time_line.style.width = time + "px"; //increasing width of time_line with px by time value
                if(time > 549){ //if time value is greater than 549
                    clearInterval(counterLine); //clear counterLine
                }
            }
        }
