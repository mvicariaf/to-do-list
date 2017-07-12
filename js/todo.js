
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  
  var clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', clearList, false);

  var clearDoneButton = document.getElementById('clear-done-button');
  clearDoneButton.addEventListener('click', clearDone, false);
  


  function addToDoItem() {
    event.preventDefault(); //evita que al pulsar intro para añadir se recargue la página

    orderList = document.getElementById('taskList'); //guarda el nodo con la id tasklist
    list = document.createElement ('li'); //variable que crea un li
    list.setAttribute('class', 'listElement') //añadimos la clase al li
    orderList.append(list); //hacemos que el li que acabamos de crear cuelgue del ol
    listItem = document.getElementById ('todo-input');  //guardamos el nodo del cuadro de texto
    var str = listItem.value;//guardamos el valor actual del cuadro de texto
    list.append(str); //colgamos el valor del cuadro del li
    listItem.value=""; //ponemos el valor del cuadro vacio de nuevo para comodidad del usuario

    buttonNode= document.createElement('button'); //creamos el boton de "hecho" con su variable
	  buttonNode.classList.add('done-button'); //le añadimos la clase "done-button" al botón que acabamos de crear
    buttonNode.append("Hecho") //esta línea añade el texto a la etiqueta botón
	  list.append(buttonNode); //añade el botón al li
    buttonNode.addEventListener('click', markAsDone(buttonNode), false); //añade el eventListener al boton después de su creación
  
  }
  function markAsDone(button) {
    button.onclick = function() { 
          button.parentNode.classList.toggle("done");
      }; 
  }
  
  function clearList (){ 
    while (orderList.firstChild){ //bucle que se iterará siempre que la lista tenga un "primer hijo"
      orderList.removeChild(orderList.firstChild); //borra el primer hijo
    }
  }
  function clearDone (){
    var doneTask = document.getElementsByClassName ('done');
    //borrar los hijos que tenga la clase done pero
    while(doneTask.length > 0){
      doneTask[0].parentNode.removeChild(doneTask[0]);//te "situa" en el padre y borra el hijo que esta en el indice 0
    }
  }
}
  
  



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




