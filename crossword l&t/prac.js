const startBtn = document.querySelector('.start-btn');
const puz = document.querySelector('.container');
const puzz = document.querySelector('.puzzle-section');
const exitbtn = document.querySelector('.exit-btn');
const submit = document.querySelector('.sub');
const popupInfo = document.querySelector('.popup-info');
const crossword = document.querySelector('#crossword');
const main = document.querySelector('.main');
startBtn.onclick = () => {
    puzz.classList.add('active');
    main.classList.remove('active');
}

submit.onclick = () => {
    main.classList.remove('active');
    popupInfo.classList.add("active");
    crossword.classList.add("active");
    //exitpuzzle(15);

}
exitbtn.onclick = () => {
    main.classList.remove('active');
    puzz.classList.remove('active');
    popupInfo.classList.remove("active");
    crossword.classList.remove("active");
   // exitpuzzle(15);

}

submit.addEventListener('click', () =>{
    crossword.showModal();
})