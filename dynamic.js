import {skills,projects} from './data.js';


let progress_bars_wrapper = document.querySelector(".right-skills");
let scroll_wrapper = document.querySelector(".wrapping-for-scroll");
let skills_section = document.querySelector(".skills")
let bars;

let project_cards = document.querySelector(".cards");
let project_wrapper = document.querySelector(".cards-wrapper");


/***************************Skills******************************/
createSkills(skills);
function createSkills(skills_data){
    for(let i = 0 ; i< skills_data.length ; i++){
        let h4 = document.createElement("h4");
        h4.appendChild(document.createTextNode(skills_data[i]["name"]));

        let div = document.createElement("div");
        div.classList.add("progress");

        let span = document.createElement("span");
        span.classList.add("inner-progress");
        span.setAttribute("data-width",`${skills_data[i]["rate"]}%`)
        div.appendChild(span);

        progress_bars_wrapper.appendChild(h4);
        progress_bars_wrapper.appendChild(div);

    }
    bars = document.querySelectorAll(".inner-progress");
}
    //on wrapping bcuz we are scrolling on wrapper elemnt not window
scroll_wrapper.addEventListener("scroll", function () {
    let position = scroll_wrapper.scrollTop;
    if(position > skills_section.offsetTop -150){
        for(let i = 0 ; i< skills.length ; i++){


            bars[i].style = `width:${bars[i].getAttribute("data-width")};`
    
        }
    }
})

/***************************Projects******************************/

function createProjects(projects){
    for(let i = 0; i<projects.length;i++){
        let div_card = document.createElement("div");
        div_card.classList.add("card");

        let img = document.createElement("img");
        img.setAttribute("src",`${projects[i]["img-path"]}`);
        div_card.appendChild(img);

        let div_text = document.createElement("div");
        div_text.classList.add("proj-card-text");

        let title = document.createElement("h2");
        title.innerText =projects[i]["h2"];
        div_text.appendChild(title)

        let descrip = document.createElement("p");
        descrip.innerText = projects[i]["p"];
        div_text.appendChild(descrip);

        let button = document.createElement("button");
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.appendChild(document.createTextNode("More About"));
        button.appendChild(a);
        div_text.appendChild(button);

        div_card.appendChild(div_text);

        project_cards.appendChild(div_card)
    }
}createProjects(projects);

/******************************Scrolling projects********************************/
let prevP , prevScrollLeft ;
let started = false;
function start(e){
    started = true;
    prevP = e.clientX;
    prevScrollLeft = project_wrapper.scrollLeft;
    console.log("started")
    
}


function dragging(e){
    if(!started) return;
    let scroll_amount = e.clientX - prevP;
    project_wrapper.scrollLeft = prevScrollLeft - scroll_amount;
    console.log("dragging")
    e.preventDefault();
}


function end(){
    started = false;
    console.log("end")
}

project_wrapper.addEventListener('mousedown',start);

project_wrapper.addEventListener('mousemove',dragging);

project_wrapper.addEventListener('mouseup',end);

