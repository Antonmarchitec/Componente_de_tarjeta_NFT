let base_template = document.querySelector("#base_template")
let container_template = document.querySelector("#container_template").content
let fragment = document.createDocumentFragment()




document.addEventListener("DOMContentLoaded", ()=>{
    dataFech()
})



const dataFech = async () =>{
    try{
        let res = await fetch("doc.json")
        let data = await res.json()
        pintarTarget(data)
        


    }catch(error){
        console.log(" ERROR AL CARGAR DATA-FECH")
    }
}


const pintarTarget = (data) =>{
    //console.log(data)
    data.forEach(element => {
        console.log(element)
        container_template.querySelector("#title").textContent = element.title
        container_template.querySelector("#description").textContent = element.desc
        container_template.querySelector("#text-left").textContent = element.eth
        container_template.querySelector("#text-right").textContent = element.days


        fragment.appendChild(container_template)
        base_template.appendChild(fragment)
    });
}