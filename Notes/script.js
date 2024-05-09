const notesContainer= document.querySelector(".notes-container")
const createrBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".inputbox")

function showNotes() {
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function upadateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createrBtn.addEventListener("click", ()=> {
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="inputbox";
    inputbox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName == "IMG") {
        e.target.parentElement.remove();
        upadateStorage()
    }
    else if(e.target.tagName == "p") {
        notes= document.querySelectorAll(".inputbox");
        nptes.forEach(nt => {
            nt.onkeyup = function() {
                upadateStorage()
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key ==="Enter") {
        document.execCommand("insertLineVreak");
        event.preventDefault();
    }
})