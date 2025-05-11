const picture = (id,name) =>{
    const url = `https://picsum.photos/id/${id}/200/200`
        const url2 = `wow.jpeg`
    return `
        <figure>
        <img src="${url2}" alt="" class="redonda">
        <figcaption>${name}</figcaption>
        </figure>
        `
} 
let x = document.getElementById('app').innerHTML = picture(1,"Miyu") + picture(2,"Coco")
        
const lista = app.querySelectorAll("img");
console.log(lista);
for (let i = 0; i < lista.length; i++) {
//lista[i].addEventListener("click", saludar)
    lista[i].addEventListener("click", ()=>{
    lista[i].classList.toggle("redonda")
})
}

export function saludar() {
    alert("Miyualertaaaaaaaaa")
}