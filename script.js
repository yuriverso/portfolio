class Project{
    constructor(projectNumber, descText, gitLink){
        this.p = document.getElementById("projeto"+projectNumber)
        this.title = document.getElementById("titulo"+projectNumber)
        this.descHolder = document.getElementById("descHolder"+projectNumber)
        this.pState = false

        this.desc = document.createElement("p")
        this.desc.innerHTML = descText
        this.desc.style.color = "rgb(224, 224, 224)"

        this.link = document.createElement("a")
        this.link.href = gitLink
        this.link.innerHTML = gitLink
        this.link.style.opacity = "0"

        this.p.addEventListener("transitionend", () => {
            if(!this.pState){
                this.descHolder.appendChild(this.title)
                if(this.descHolder.contains(this.desc)){
                    this.descHolder.removeChild(this.desc)
                }
                if(this.descHolder.contains(this.link)){
                    this.descHolder.removeChild(this.link)
                }
                setTimeout(() => {
                    this.p.style.transition = "0.5s"
                    this.p.style.width = "70%"
                    this.p.style.backgroundColor = "rgb(15, 15, 15)"
                    this.title.style.transition = "0.5s"
                    this.title.style.color = "rgb(224, 224, 224)"
                }, 1)
            }else{
                
                this.descHolder.appendChild(this.desc)
                this.descHolder.appendChild(this.link)
                if(this.descHolder.contains(this.title)){
                    this.descHolder.removeChild(this.title)
                }
                setTimeout(() => {
                    this.desc.style.transition = "0.5s"
                    this.desc.style.color = "rgb(15, 15, 15)"
                    this.link.style.transition = "0.5s"
                    this.link.style.opacity = "1"
                }, 1)
            }
        })
    }

    openProject(){
        if(!this.pState){
            this.p.style.transition = "0.5s"
            this.p.style.width = "95%"
            this.p.style.backgroundColor = "rgb(224, 224, 224)"
            this.title.style.transition = "0.5s"
            this.title.style.color = "rgb(224, 224, 224)"
            this.pState = true
        }else{
            this.desc.style.transition = "0.5s"
            this.desc.style.color = "rgb(224, 224, 224)"
            this.link.style.transition = "0.5s"
            this.link.style.opacity = "0"
            this.pState = false
        }
    }
}

calcioDesc = "Calculadora com cores dinâmicas e design leve.<br><br>"
calcioLink = "https://github.com/yuriverso/CalcioCalculator"
const project1 = new Project("1", calcioDesc, calcioLink)

lacobritaDesc = "Jogo Snake com integração a uma base de dados MySQL para o salvamento da pontuação e consulta de recordes.<br><br>"
lacobritaLink = "https://github.com/yuriverso/LaCobrita"
const project2 = new Project("2", lacobritaDesc, lacobritaLink)

vitaDesc = "Jogo de simulação de colônias com HTML, CSS e JavaScript.<br><br>"
vitaLink = "https://github.com/yuriverso/Vita"
const project3 = new Project("3", vitaDesc, vitaLink)

reperDesc = "Integração Java e MySQL para a criação de set lists musicais. Utilizar do repertório contido na base de dados MySQL para criar, editar e ordenar sub-listas de músicas.<br><br>"
reperLink = "https://github.com/yuriverso/Reper"
const project4 = new Project("4", reperDesc, reperLink)

marceneiroDesc = "Catálogo de móveis com Spring Boot e React. Aplicação web que permite cadastrar, consultar, alterar e remover entradas de uma base de dados MySQL.<br><br>"
marceneiroLink = "https://github.com/yuriverso/Marceneiro"
const project5 = new Project("5", marceneiroDesc, marceneiroLink)

function openP1(){
    project1.openProject()
}
function openP2(){
    project2.openProject()
}
function openP3(){
    project3.openProject()
}
function openP4(){
    project4.openProject()
}
function openP5(){
    project5.openProject()
}

function openOverlay(){
    var headerImg = document.getElementById("header-img")
    var overlay = document.getElementById("overlay")
    var img = document.getElementById("overlay-img")
    
    overlay.style.transition = "0.5s"
    overlay.style.opacity = "0"
    setTimeout(() => {
        headerImg.style.transition = "2s"
        headerImg.style.opacity = "1"
        overlay.style.height = "0%"
        overlay.innerHTML = ""
    }, 300)
}

