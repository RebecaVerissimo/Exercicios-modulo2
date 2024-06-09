const botaoAdicionar = document.querySelector('button')
const inputTarefa = document.querySelector('input')
const lista = document.querySelector('.lista')


const listaTarefa = []

function checkTarefa(event) {
    if (event.target.checked){
        event.target.parentNode.style.textDecoration = "line-through"
    }else{
        event.target.parentNode.style.textDecoration = "none"
    }
}

botaoAdicionar.addEventListener('click', () => {
    const valor = inputTarefa.value

    if(valor){
    
    listaTarefa.push(valor)

    const itemTarefa = document.createElement('li')
    const check = document.createElement('input')

    check.setAttribute("type", "checkbox")
    
    check.addEventListener('click', checkTarefa)
    itemTarefa.innerText = valor

    itemTarefa.appendChild(check)
    lista.appendChild(itemTarefa)

    inputTarefa.value = ""

    }else{
        window.alert("Adicione uma tarefa")
    }
})