let cIcon = document.getElementsByClassName("calculatorIcon")[0]
let calculator = document.getElementsByClassName("calculator")[0]
let closeBtn = document.getElementById("xbtn")

let calDisplay = document.getElementById("cDisplay")


cIcon.addEventListener("click", function(){
    calculator.style.display = "block"
    // calculator.style.transform = "scale(1)"
    calDisplay.value = ''
})

closeBtn.addEventListener("click", function(){
    calculator.style.display = "none"
})

function clearInput(){
    calDisplay.value = ''
}

function addValue(value){
    // console.log(value)
    calDisplay.value += value 
}

function deleteBtn(){
    let data =  calDisplay.value.slice(0, -1)
    // console.log(data)
    calDisplay.value = data
}

function calculateValues(){
    let result = eval(calDisplay.value)
    calDisplay.value = result
}