let interacao = document.getElementById("button")

interacao.addEventListener('click', () => {

    const nome = window.prompt("Informe seu nome:")
    
    if(nome) {
        const next = window.confirm(`${nome} quer continuar?`)

        if(next) { 
            window.alert(`Obrigado por continuar `)          
        }
        else{
            window.alert(`A interação será encerrada`)
        }
    }
    else{
        window.alert(`Erro: para continuar digite seu nome`)
    }
})