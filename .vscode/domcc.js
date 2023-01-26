//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.doctype);
//console.log(document.all);
//console.log(document.title);
//document.title =123;
//console.log(document.head);
//console.log(document.body);
//console.log(document.forms[0]);
//console.log(document.links);

var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';

//Get Element By Class Name



//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent ='Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';
//items[2].style.backgroundColor = 'green';

//for(var i=0; i<items.length; i++){
  //items[i].style.fontWeight ='bold' ;
//}

var li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent ='Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
li[2].style.backgroundColor = 'green';
li[4].style.backgroundColor = 'skyblue';

for(var i=0; i<li; i++){
  li[i].style.fontWeight ='bold' ;
}



