let social = document.getElementsByClassName('itemSocial')

for (let element of social){

    element.addEventListener('mouseover', () => {
        element.style.width = '30px';
    });

    element.addEventListener('mouseout', () => {
        element.style.width = '';
    });
}

let menu = document.querySelectorAll('.menu ul li')

for (let element of menu){

    element.addEventListener('mouseover', () => {
        element.style.color = 'red';
    });

    element.addEventListener('mouseout', () => {
        element.style.color = '';
    });

    element.addEventListener('click', () => {
        window.alert("Página em construção")
    });
} 

let episodios = document.querySelectorAll('.episodios div')
for (let element of episodios){
    element.addEventListener('click', () => {
        console.log(element.getAttribute("episodio"))
    });
    element.addEventListener('mouseover', () => {
            element.innerHTML = '<button><img src="./imgs/boton-play.svg"></button>'
    })
    element.addEventListener('mouseout', () => {
        element.innerHTML = ''
    })
} 