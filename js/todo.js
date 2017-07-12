
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);
  //doneButton = document.getElementsByClassName('done-button'); 
  
  


  function addToDoItem() {
    var orderList = document.getElementById('taskList');
    list = document.createElement ('li');
    list.setAttribute('class', 'listElement')
    orderList.append(list);
    listItem = document.getElementById ('todo-input');
    var str = listItem.value;
    list.append(str);
    listItem.value="";

    buttonNode= document.createElement('button');
	  buttonNode.classList.add('done-button');
    buttonNode.append("Hecho")
	  list.append(buttonNode);
    buttonNode.addEventListener('click', markAsDone(buttonNode), false);
  }
  
  }
  function markAsDone(button) {
    console.log("he pulsado este boton")
    button.onclick = function() {
          button.parentNode.classList.toggle("done");
      };

    
  }
  
    /*var doneButton = document.getElementsByClassName('done-button');  
    for (var i = 0; i < doneButton.length; i++) {
    doneButton[i].addEventListener('click', markAsDone, false);
    };
  */



// window.onload = function() {
//   //init();
//   //ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN

//   var saveButton = document.getElementById('add-button');
//   saveButton.addEventListener('click', addToDoItem, false);

//   //OTRAS ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN 
 
//   //doSomethingElse();
//   // LAS FUNCIONES DE AÑADIR BORRAR .....
//   function addToDoItem() {
//     //LO QUE SEA
//     console.log("ADD BUTTON CLICKED!");
//   }

//   function markAsDone() {
//     //LO QUE SEA
//     console.log("DONE BUTTON CLICKED!");
//   }
//  };




