const h1 =document.querySelector('h1')
const form =document.querySelector('#form')
const input1=document.querySelector('#calcular1')
const input2 =document.querySelector('#calcular2')
const btn =document.querySelector('#btnCalcular')
const Idresultado=document.querySelector('#Idresultado')
//escucha los eventos que suceden en el codigo para llamar a alguna funcion se le da un valor y luego el nombre de la funcion
//addEventListener escucha los eventos que suceden
// form.addEventListener('submit',sumarInputValues)

// function sumarInputValues(event){
//     console.log({event})
//     event.preventDefault()
//     const ResSuma =Number(input1.value+input2.value)
//     Idresultado.innerText="resultado "+Number(ResSuma)
// }

btn.addEventListener('click',enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();
    alert('virus')
}

