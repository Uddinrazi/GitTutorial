var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItem);

itemlist.addEventListener('click',removeItem);    

filter.addEventListener('keyup',filterItems);



function addItem(e){
    e.preventDefault();

    var newDes = document.getElementById('description').value;
    var newItem = document.getElementById('itm').value;  
    //create new li
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text note with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " +newDes));

    //create del button
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn mr-2 btn-danger btn-sm float-right delete';

    deletebtn.appendChild(document.createTextNode('X'));

    var edit = document.createElement('Edit');
    edit.className = 'btn mr-2  btn-sm float-right delete';
    
    edit.appendChild(document.createTextNode('edit'));

    //append button to li
   

    li.appendChild(edit);

    li.appendChild(deletebtn);

    //append li to list
    itemlist.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();

    var items = itemlist.getElementsByTagName('li');

    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        var Desp = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || Desp.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
        
    })
}