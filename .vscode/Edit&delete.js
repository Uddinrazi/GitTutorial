var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');

form.addEventListener('submit',addItem);

itemlist.addEventListener('click',removeItem);      

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('itm').value;  

    //create new li
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //add text note with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn mr-2 btn-danger btn-sm float-right delete';

    deletebtn.appendChild(document.createTextNode('X'));

    var edit = document.createElement('edit');
    edit.className = 'btn mr-2 btn-danger btn-sm float-right delete';

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