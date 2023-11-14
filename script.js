let inp = document.querySelector("#taskinput");
let btn = document.getElementById("addtaskbtn");
let ul = document.querySelector("#itemlist");
// let desc = document.getElementById("description");

function getRandomColor(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    let color = `rgba(${red}, ${green}, ${blue}, 0.4)`;
    return color;
} 

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    if(inp.value == ""){
        alert("Please enter some text");
    }
    else{
        item.innerHTML = inp.value;
        let dltbtn = document.createElement("button");
        dltbtn.innerText = "x";
        dltbtn.classList.add("deletebtn");
        item.appendChild(dltbtn);
        ul.appendChild(item);
        inp.value = "";
        let clr = getRandomColor();
        this.style.backgroundColor = clr
        inp.style.backgroundColor = clr;
        item.style.backgroundColor = clr;
        }
    
})