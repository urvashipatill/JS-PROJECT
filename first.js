let adBtn= document.getElementById("addButton")
let list=document.getElementById('list')
adBtn.addEventListener('click', addEvent);

function addEvent(e){
    // ADDING ELEMENT TO LIST 
    e.preventDefault()
let expense= document.getElementById('expenses').value
let detail= document.getElementById('describe').value 
let category= document.getElementById('select').value

// CREATING EDIT AND DELETE BTN 
let Btn= document.createElement('button')
let Btn2= document.createElement('button')
Btn.className='deleteBtn'; 
Btn.textContent='Remove'
Btn2.className='editBTn'
Btn2.textContent='Edit'

let li= document.createElement('li')
li.appendChild(document.createTextNode(expense))
li.appendChild(document.createTextNode(" "+ detail))
li.appendChild(document.createTextNode(" "+ category))
li.appendChild(Btn)
li.appendChild(Btn2)
list.append(li)


document.getElementById('expenses').value= ''
document.getElementById('describe').value=''
 
// ADDING ELEM TO LOCAL STORAGE 
let myObj={
    Expense: expense,
    Detail: detail,
    Category: category
}
let myObjstore= JSON.stringify(myObj)
localStorage.setItem(myObj.Category, myObjstore)

// DELETING ELE 
Btn.addEventListener('click',deletefunc)
function deletefunc(e){
    localStorage.removeItem(myObj.Category)
if(e.target.className= 'deleteBtn'){
    if(confirm('Do you want to delete the item?')){
        var li= e.target.parentElement
        list.removeChild(li)
    }
}
}
//  EDIT ELE 
Btn2.onclick =(e) =>{
     if(e.target.className='editBtn'){
        if(confirm('Do you want to make changes?')){
            localStorage.removeItem(myObj.Category)
            var li=e.target.parentElement
            list.removeChild(li)
        }
     }
     document.getElementById('expenses').value=expense;
     document.getElementById('describe').value = detail;
     document.getElementById('select').value= category

}


}


// adBtn.onclick =() => {
//     console.log("active")
// }