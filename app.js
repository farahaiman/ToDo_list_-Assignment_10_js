var list = document.getElementById("list");

function addTodo(){
    var toDoItme = document.getElementById("todo-item");
    //create li tag with text node
    var li = document.createElement('li');
    var liText = document.createTextNode(toDoItme.value);
    li.appendChild(liText)

    //delete button
    var removeBtn = document.createElement("button");
    var removeText = document.createTextNode("Remove");

    removeBtn.setAttribute("class","btn")
    removeBtn.setAttribute("onclick","deleteItem(this)");
    removeBtn.appendChild(removeText)
    //edit button
    
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)

    editBtn.setAttribute("class","btn1")
    editBtn.setAttribute("onclick","editItem(this)")
   
    li.appendChild(removeBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)
    toDoItme.value  =""
    console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()

}
function editItem(e){
    var val= prompt("Enter update value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;

}
function deleteall(){
    list.innerHTML=  ""
}