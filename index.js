let myobj={

name:'Amar',
age: 26
}

let myobj_serialized=JSON.stringify(myobj)

localStorage.setItem('myobj',myobj_serialized)