
const sendMessage = document.getElementsByClassName("sendMessage")[0];

sendMessage.addEventListener("click", () => {
    let question = document.querySelectorAll("textarea")[0];
    let inputs = Array.from(document.querySelectorAll("input"));
    
    if(inputs.every(input => input.value !== "") && question.value !==""){
        alert("Message sended!")
        question.value = "";
        inputs.forEach(input => input.value = "");
        inputs.forEach(input => input.style.backgroundColor = "#f5f5f5");
        question.style.backgroundColor = "#f5f5f5";
    }else{
        inputs.forEach(input => {
            if(input.value == "") {
                input.style.backgroundColor = "#facfd2";
            }else{
                input.style.backgroundColor = "#f5f5f5";
            };
        }
    )
    if(question.value == "") {
        question.style.backgroundColor = "#facfd2";
    }else{
        question.style.backgroundColor = "#f5f5f5";
    };
    alert("Fill in all the fields!")
}

})
