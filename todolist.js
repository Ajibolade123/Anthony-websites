 const todoList = JSON.parse(localStorage.getItem('todos')) || [];
 //the object is not necessary 
 //the array above
 let filter = 'all';
renderHTML();

totalTodo();
function setFilter(newfilter){
  filter = newfilter;
  renderHTML();
}

function renderHTML(){
  let todolistHtml = '';
  const filteredTodos = todoList.filter(todo => {
    if (filter === 'all'){
      return true;
    }else if(filter === 'active'){
      return !todo.completed;
    }else if(filter === 'completed'){
      return todo.completed;
    }
  });
// passsing a function into another function use arrow functions
  filteredTodos.forEach((todo,index) => {
        //const name = todo.name
    //const duedate = todo.duedate
     //the below shothand property is called destructing
     //foreach is prefrerred to a loopto loop throug an array
    
     const {name,completed} = todo;
     if(name){
      const html = `
      <div class="display-container" onmouseover="show(${index})" onmouseout="hide(${index})">
      <div>
       <div class="check-boxs">
       <input type="checkbox" class="check-2" id="check-box-${index}" 
         onchange="
         completedTodo(${index});"  ${completed ? 'checked' : ''}>
        </div>
        <div class="todoss todoss-${index}"style="text-decoration: ${completed ? 'line-through' : 'none'}; color: ${completed ? 'hsl(234, 11%, 52%)' : 'hsl(234, 39%, 85%)'};"> ${name} </div>
        </div>
      <div
        class="delete" id="delete-space-${index}"
      ><img src="cross.svg"></div>
      </div>`
      todolistHtml += html;
     }
  });

 //update the total todo
 //update everytime i add the todo or complete  a todo
 
 const displayTodo = document.querySelector('.js-tododisplay')
  displayTodo.innerHTML = todolistHtml;  
  document.querySelectorAll('.delete')
  .forEach((buttonEleme,index) => {
    buttonEleme.addEventListener('click',()=> {
      todoList.splice(index, 1)
      renderHTML();
      saveToLocalStorage();
    })
  })
}

const addtodo = () => {
  const inputElement = document.querySelector('.js-input');
 /*  const checkbox = document.getElementById('checks') */
  const name = inputElement.value; 
    if(name){
      todoList.push({name,completed: false});
        inputElement.value = '';
        saveToLocalStorage();
  }
}

document.getElementById('checks')
.addEventListener('click',addtodo)
function saveToLocalStorage(){
  localStorage.setItem('todos',JSON.stringify(todoList));
 renderHTML();
 totalTodo();
}



//there is problem here which is that the ischecked is used globally which resets the checkboxes

 //dont use flags yet
//not working

function completedTodo(index){
  const check2 = document.getElementById(`check-box-${index}`)
  todoList[index].completed = check2.checked;
  saveToLocalStorage();
}

function totalTodo (){
  const totals = document.querySelector('.total');
  const remainingTodos = todoList.filter(todo => !todo.completed).length;
  totals.innerHTML = `${remainingTodos} items left`;
}


function show(index) {
  document.getElementById(`delete-space-${index}`).style.visibility = "visible";
}
function hide(index) {
  document.getElementById(`delete-space-${index}`).style.visibility = "hidden";
}


//use filter to categorize the todo

//it should be able to be moveable 

//check out exercises 11 in the course
//learn accumulator pattern again and learn more on loops and arrays 

