// const notesContainer=document.querySelector(".notes-container");
// const createBtn=document.querySelector(".btn");
// let notes=document.querySelectorAll(".input-box");


// function showNotes(){
//     notesContainer.innerHTML=localStorage.getItem("notes") || "";
// }

// function updatestorage(){
// localStorage.setItem("notes",notesContainer.innerHTML)
// }


// createBtn.addEventListener("click",()=>{
   
//     let inputBox=document.createElement("p");
//     let img=document.createElement("img");
//     inputBox.className="input-box";
//     inputBox.setAttribute("contenteditable","true");
//     img.src="images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
//     //alert("oklast");
// });
// notesContainer.addEventListener("click",function(e){
//     if(e.target.tagName==="IMG"){
//         e.target.parentElement.remove();
//         updatestorage();

//     }
//     else if(e.target.tagName==="P"){
//         notes=document.querySelector(".input-box");
//         notes.forEach(nt=>{
//             nt.onkeyup=function(){
//                 updatestorage();
//             }
//         })
//     }
// });
// document.addEventListener("keydown",Event=>{
//     if(Event.key==="Enter"){
//         document.execCommand("insertLineBreak");
//         Event.preventDefault();
//     }});
//     showNotes();

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.oninput = function () {
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// Initial load of notes from local storage
showNotes();
