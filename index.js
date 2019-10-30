function capture(){
  function Person(name, age){
      this.name=name;
      this.age=age;
  }  
  var nameCapture = document.getElementById("name").value;
  //console.log(namecapture);
var ageCapture = document.getElementById("age").value;

newPerson = new Person(nameCapture, ageCapture);

add();
}

var baseData = [];
function add(){
baseData.push(newPerson);
//console.log(baseData);
document.getElementById("table").innerHTML += '<tbody><td>'+ newPerson.name + '</td><td>' + newPerson.age + '</td></tbody>';
}