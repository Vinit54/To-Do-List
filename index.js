// Create a "close" button and append it to each list item
// var mylist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < mylist.length; i++) 
// {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   mylist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");

// for (i = 0; i < close.length; i++) 
// {
//   close[i].onclick = function() 
//   {
//     var div = this.parentElement;
//     div.style.display = "none";
//     window.localStorage.removeItem('');
//   }
// }

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
  {
    ev.target.classList.toggle('checked');
  }
}, false);

var inputValue, descValue;

function editTodo(e){
  todoParentElement = e.target.parentElement
  const {title,description} = todoParentElement.dataset

  editTitle = document.getElementById("editInput");
  editDesc = document.getElementById("editDesc");

  editTitle.value = title
  editDesc.value = description

  editTitle.disabled = true

  document.querySelector("#addTodoForm").style.display = "none"
  document.querySelector("#updateTodoForm").style.display = "block"
}

function deleteTodo(e,title)
{
  console.log(title)
  localStorage.removeItem(title)
  e.target.parentElement.remove()
}

function updateElement(e)
{
  e.preventDefault();
  
  editTitle = document.getElementById("editInput");
  editDesc = document.getElementById("editDesc");

  localStorage.setItem(editTitle.value,editDesc.value)

  document.querySelector("#addTodoForm").style.display = "block"
  document.querySelector("#updateTodoForm").style.display = "none"
}

// Create a new list item when clicking on the "Add" button
function newElement(e) 
{
  e.preventDefault();
  let li = document.createElement("li");
  inputValue = document.getElementById("myInput").value;
  descValue = document.getElementById("myDesc").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  li.innerHTML = `
    <div 
      data-title=${inputValue}
      data-description=${descValue}
      class="flexbox-item flexbox-item-1 column"
    >
      <button onclick="editTodo(event)" class="edit">Edit</button>
      <h5 onclick="toggleDescription(event)">${inputValue}</h5>
      <p>${descValue}</p>
    </div>
    <span class="close" onclick="deleteTodo(event,'${inputValue}')">\u00D7</span>
  `

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myDesc").value = "";

  window.localStorage.setItem(inputValue, descValue);
  
  /*inputValue.value = "";
  descValue.value = "";*/

  // var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);

  // for (i = 0; i < close.length; i++) 
  // {
  //   close[i].onclick = function() 
  //   {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }

  // create a add to update when clicking edit button
  // document.getElementById("myInput").disabled = true;
 
  //window.localStorage.setItem(inputValue, JSON.stringify({title: inputValue, body: descValue}));
 //localStorage.getItem('inputValue');
  //localStorage.removeItem(descvalue);

}

// toggle description -
// toggle() method is used to check the visibility of selected elements to toggle between hide() and show() for the selected elements.
function toggleDescription(e)
{
  // if block change to none and vice versa
  e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display == "block" ? "none" : "block"
}

 // sorting list
 function sortList() 
{
  let list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("myUL");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) 
  {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) 
    {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") 
      {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) 
        {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } 
      else if (dir == "desc") 
      {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) 
        {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch)
    {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    }
     else 
    {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") 
      {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function cardView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}


// document.getElementById('d1').addEventListener("click", function() {
//   //localStorage.setItem('d1', 'CSS3 adds several new styling features and improvements to enhance the web presentation capabilities.');
//   localStorage.setItem('d1', 
//     JSON.stringify({d1 : "CSS3", Description:"CSS3 adds several new styling features and improvements to enhance the web presentation capabilities."}));

//  // const user = JSON.parse(localStorage.getItem('d1'));
//   //document.getElementById('ls-currently').textContent = user.d1;
// });


// static
// document.getElementById('d2').addEventListener("click", function() {
//   localStorage.setItem('d2','It is a markup language used for stHTML5 ructuring and presenting content on the World Wide Web.');
// });
// document.getElementById('d3').addEventListener("click", function() {
//   localStorage.setItem('d3', 'It is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.');
// });
// document.getElementById('d4').addEventListener("click", function() {
//   localStorage.setItem('d4', 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.');
// });