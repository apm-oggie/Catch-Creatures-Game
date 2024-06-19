var screen = document.querySelectorAll(".screen")
var btn = document.querySelector(".screen button")
var allElems = document.querySelectorAll(".elem")
var playGround = document.querySelector(".playground")
var selected = ""
var scoreValue = document.querySelector(".time-score h5 span")
var score = 0




btn.addEventListener("click", function () {
    screen[1].style.transform = "translateY(-100%)"
})

allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
        screen[2].style.transform = "translateY(-200%)"
        selected= elem.childNodes[3].getAttribute("src")
        
        setInterval(function(){
            createImage()
        },1000)
        
        
    })
})


function createImage(){
        var newImg = document.createElement("img")
        newImg.setAttribute("src",selected)
        var x = Math.random()*100
        var y = Math.random()*100
        var rot = Math.random()*360
        newImg.style.left = x+"%"
        newImg.style.top = y+"%"
        newImg.style.rotate = rot+"deg"
        console.log(newImg)
        playGround.appendChild(newImg)

        catchImage()

        setTimeout(function(){
            playGround.removeChild(newImg)
        },1200)
}


function catchImage(){
    var images = document.querySelectorAll(".playground img")
    images.forEach(function(elem){
        elem.addEventListener("click",function(){
            score++
            scoreValue.innerHTML = score
        })
    })
}