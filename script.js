const clearAll=document.querySelector('.ce')
const clear=document.querySelector('.clear')
const number=document.querySelectorAll('.number')
const plusMinus=document.querySelector('.plus-minus')
const sqrt=document.querySelector('.sqrt')
var  num=document.querySelector('.number1')
const percentages=document.querySelector('.percentages')
const equal=document.querySelector('.equal')
var result=document.querySelector('.screen p')

number.forEach(function(numb, x){
    number[x].addEventListener('click',function () {
        if(number[x]<=0){
            result.textContent+=parseFloat(number[x].textContent)
        }else{
            result.textContent+=(number[x].textContent)
        }
        return parseFloat(result.textContent)
    })
})

clearAll.addEventListener('click', function () {
    result.textContent=''
})

clear.addEventListener('click', function () {

})

sqrt.addEventListener('click', function () {
    result.textContent=Math.sqrt(result.textContent)
})

equal.addEventListener('click', function () {
    return parseFloat(result.textContent)
})




