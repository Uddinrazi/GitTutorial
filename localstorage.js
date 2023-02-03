

//<script>
  //  function saveToLocalStorage(event){
    //  event.preventDefault();

      //console.log('saveToLocalStorage');
  
     // var name1 = event.target.username.value;
    //  var email1 = event.target.email.value;
    //  localStorage.setItem('name',name1);
    //  localStorage.setItem('email',email1);
////onsubmit="saveToLocalStorage(event)"
    //  console.log(name1);
//  }
 // </script>

<script>
     function saveToLocalStorage(event){
     event.preventDefault();

var name1 = document.getElementById('name').value;
  var email1 = document.getElementById('email').value;

  var obj = {
    name1,
    email1
  }

  let obj_serialized = JSON.stringify(obj);
  
  localStorage.setItem(obj.email1,obj_serialized);
  showUserOnScreen(obj); 
     }  
     function showUserOnScreen(obj){
      var parentElemnt = document.getElementById('users');
      var childEle = document.createElement('li');
      console.log(childEle);
      childEle.textContent = obj.name1 + ' - ' +obj.email1;
      parentElemnt.appendChild(childEle);
      //parentElemnt.innerHTML = parentElemnt + '<li>  ${obj.name1} - ${obj.email1} </li>';

      var deletebtn = document.createElement('input');
      deletebtn.type = 'button';
      deletebtn.value = 'Delete';

      deletebtn.onclick = () =>{
        localStorage.removeItem(obj.email1);
        parentElemnt.removeChild(childEle);
      }
      childEle.appendChild(deletebtn);
      
     }
  </script>   
  