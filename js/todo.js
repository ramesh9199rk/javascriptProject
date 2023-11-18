//alert("hello world!");
const inputbox = document.getElementById('ib');
const listContainer = document.getElementById('lc');
function addTask(){
   //alert('Add task');
    if(inputbox.value ===''){
        //document.write("hi");
        alert("You should write something");

    }
    else{
        //document.write("hi1");
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
    }
    inputbox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }   
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML );

}
function  showTask(){
   listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

