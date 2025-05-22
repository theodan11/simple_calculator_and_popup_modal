let popupBtn = document.getElementById("clickme")
let popupModal = document.getElementsByClassName("popupModal")[0]
let closeBtn = document.getElementsByClassName("closeBtn")[0]
let noBtn = document.getElementById("noBtn")
let isOpen = false
let container = document.getElementsByClassName("container")[0]

popupBtn.addEventListener("click", function(){
    // console.log("hello")
    // popupModal.style.display = "block"
   
    popupModal.style.transform = "scale(1)"
})

closeBtn.addEventListener("click", function(){
    popupModal.style.transform = "scale(0)"
})


noBtn.addEventListener("click", function(){
  
    popupModal.style.transform = "scale(0)"

    // popupModal.style.transform = "translate(0)"
})

window.addEventListener("click", function(event){
        // console.log(event.target)
    if(event.target === container)    {

        popupModal.style.transform = "scale(0)"
    }
})