const scrollLeftBtn = document.querySelector('.swipeLeft');
const scrollRightBtn = document.querySelector('.swipeRight');
const feedbackColl = document.getElementsByClassName("feedback");
let fbNumber = 0;

scrollRightBtn.classList.add("activeSwipe");

scrollLeftBtn.addEventListener("click", () =>{
    if(fbNumber > 0){
        feedbackColl[fbNumber].classList.add("disabled");
        fbNumber--;
        feedbackColl[fbNumber].classList.remove("disabled");
        updateBtnState()
    }
})
scrollRightBtn.addEventListener("click", () =>{
    if(fbNumber < feedbackColl.length-1){
        feedbackColl[fbNumber].classList.add("disabled");
        fbNumber++;
        feedbackColl[fbNumber].classList.remove("disabled");
        updateBtnState()
    }
})

function updateBtnState() {
    if(fbNumber == 0){
        scrollLeftBtn.classList.remove("activeSwipe");
    }
    else if(fbNumber > 0 && fbNumber < feedbackColl.length-1){
        scrollLeftBtn.classList.add("activeSwipe");
        scrollRightBtn.classList.add("activeSwipe");
    }
    else{
        scrollRightBtn.classList.remove("activeSwipe");
    }
}
