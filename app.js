function calculo(){

    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let numero1 = parseFloat(num1.value)
    let numero2 = parseFloat(num2.value)
    let resultado = ((numero2 - numero1) / numero1) * 100;
    let parrafito = document.getElementById('parrafito')
    parrafito.innerHTML = resultado.toFixed(2) + '%'
    
}


let mayo2025 = document.getElementById('mayo2025')
let junio2025 = document.getElementById('junio2025')
let julio2025 = document.getElementById('julio2025')
let agosto2025 = document.getElementById('agosto2025')
let septiembre2025 = document.getElementById('septiembre2025')
let octubre2025 = document.getElementById('octubre2025')
let noviembre2025 = document.getElementById('noviembre2025')
let diciembre2025 = document.getElementById('diciembre2025')


function calculo2(){
let total = (((((mayo2025.value * 0.01) + 1) * ((junio2025.value * 0.01) + 1) * ((julio2025.value * 0.01) + 1) * ((agosto2025.value * 0.01) + 1) * ((septiembre2025.value * 0.01) + 1) * ((octubre2025.value * 0.01) + 1) *
        ((noviembre2025.value * 0.01) + 1) * ((diciembre2025.value * 0.01) + 1) * ((meses2024.value * 0.01) + 1)) -1 ) *100 )

    let parrafito2 = document.getElementById('parrafito2')    
    parrafito2.innerHTML = total.toFixed(2) + '%'


        console.log(total)
        console.log(meses2024.value)
        console.log(mayo2025.value)
        console.log(junio2025.value)
        console.log(julio2025.value)
        console.log(agosto2025.value)
        console.log(septiembre2025.value)
        console.log(octubre2025.value)
        
}