
const API_URL ="http://jsonplaceholder.typicode.com";
const HTMLResponse= document.querySelector("#x")
const ul = document.createElement('ul');
var select=document.getElementById("search")
function mostrar(){

    var optionValue=document.getElementById("search").value

    fetch('http://jsonplaceholder.typicode.com/todos').then((response)=> response.json()).then((todos) =>{
        todos.forEach((todo)=>{
            let elem= document.createElement('li');
   
            if (optionValue=="p0"){
                elem.appendChild(document.createTextNode(todo.userId+"---"));
            
            }
            if (optionValue=="p1"){
                elem.appendChild(document.createTextNode(todo.id));
            
            }
            if (optionValue=="p2"){
                elem.appendChild(document.createTextNode(todo.title+"---"));
            
            }
            if (optionValue=="p3"){
                elem.appendChild(document.createTextNode(todo.completed+"---"));
            
            }
            
            ul.appendChild(elem);
            
        });
        
        HTMLResponse.appendChild(ul);
    });

}
function principal(){
    localStorage.clear();
}

        