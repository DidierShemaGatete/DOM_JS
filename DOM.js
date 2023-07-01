console.dir(document);// shows all properties attached to a document

console.log(document.domain);
console.log(document.URL);

// manipulation of the Document

console.log(document.title);
document.title= "new name ";// changes the dom title



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
f 
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


const firstParagraph = document.queryselector('#float')

firstParagraph.style.backgroundColor = "blue";


/* ==============RECAP IN CURICULLUM EXERCISES============ */

/* +++ select all paragraphs that are descendants of class articles +++*/

document.querySelectorAll('.articles p');


/* querySelectorAll returns a Nodelist ; so we cant use Array methods to loop through them, we use foreach() or for loop */   



for (i=0 ; i <= articles.lenght ; i++){
  console.dir(articles[i])          //console.dir used to display list of properties of Object
}



/* PROBATION and REVAEL EVENTS */

