var button = document.querySelector(".btn");
var xucxac = document.getElementById("xucxac");
var sound = new Audio('dice.mp3');
var timesCount = [0, 0, 0, 0, 0, 0, 0]; 
var totaltimes = 0;
var timesElements = [];
var rateElements = [];
for (let i = 1; i <= 6; i++) {
    timesElements[i] = document.getElementById("times" + i);
    rateElements[i] = document.getElementById("rate" + i);
}
function ngauNhien(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

function capNhatThongKe(giatri) {
    timesCount[giatri]++; 
    for (let i = 1; i <= 6; i++) {
        timesElements[i].textContent = timesCount[i];
        let rate = (timesCount[i] / totaltimes) * 100;
        let rateDisplay = rate.toFixed(2);
        rateElements[i].textContent = `(${rateDisplay}%)`;
    }
}

function capNhatKetQua() {
    var giatri = ngauNhien(1, 6);
    var number = document.getElementById("value");
    number.textContent = giatri;
    capNhatThongKe(giatri);
    xucxac.classList.remove('rolling');
    button.disabled = false;
}

button.addEventListener("click",function(e)
{
        e.preventDefault();
        if (!xucxac.classList.contains('rolling')) {
        button.disabled = true; 
        sound.play();
        xucxac.classList.add('rolling');
                totaltimes++; 
     }
})

xucxac.addEventListener('animationend', capNhatKetQua);