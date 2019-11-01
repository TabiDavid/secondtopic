function capture(){
  function Person(name, age, city, country){
      this.name=name;
      this.age=age;
      this.city=city
      this.country=country;
  }  
  var nameCapture = document.getElementById("name").value;
  //console.log(namecapture);
var ageCapture = document.getElementById("age").value;
var cityCapture = document.getElementById("city").value;
var countryCapture = document.getElementById("country").value;

newPerson = new Person(nameCapture, ageCapture, cityCapture, countryCapture);

add();
}

var baseData = [];
function add(){
baseData.push(newPerson);
//console.log(baseData);
document.getElementById("table").innerHTML += '<tbody><td>'+ newPerson.name + '</td><td>' + newPerson.age + '</td><td>'+ newPerson.city + '</td><td>' + newPerson.country + '</td></tbody>';
}