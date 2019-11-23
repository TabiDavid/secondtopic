function tellMet(){
  var material = document.getElementById("material").value;
  var color = document.getElementById("color").value;
  var old = document.getElementById("old").value;
  
  
      var school = { 
  
          material: material, 
          color: color, 
          old: old, 
          price: 100,
          hat: 33,
  
          HouseMaterial: function(){
          return "The school is built with " + this.material + " and its color is " + this.color + " the tuttion to be pay is " + this.price + " and construction has " + this.old + " " + "years";
       }
        };
      
      document.getElementById("outPut").innerHTML = school.HouseMaterial();
      }






      function Car (owner, color, brand) {

        this.owner = owner;
        this.color = color;
        this.brand = brand;
        this.choose = yourBrand;
        }
        
        function yourBrand() {
        
            return "you have chosen the right one";
            
        }
        
        function car1(){
        
        
        var Jhon = new Car("Jhon", "Blue", "Mercedez");
        
        var Carlos = new Car("Carlos", "red", "hyudai");
        
        document.getElementById("outPut1").innerHTML = Jhon.owner + " has a " + Jhon.color + " car with a profetional brand " + Jhon.brand + " " + yourBrand() + "<br/>"
        }





        function domestic(){
          this.animal = " ";
          this.name = " ";
          
          this.setAnimal = function(newAnimal){
            this.animal = newAnimal;
          }
          this.setName = function (newName){
            this.name = newName;
          }
          
               }
          
          Cat.prototype = new domestic();
          function Cat(){
            this.raza = " ";
            this. setRaza = function(newRaza){
              this.raza = newRaza;
            }
            this.showInfo = function(){
              alert(this.name + " is a beautiful " + this.raza + " cat.");
            }
          }
               var myCat = new Cat ();
               myCat.setName("Pisuke");
               myCat.setRaza("Silvestre");
               
          
          
          
               Dog.prototype = new domestic();
          
               function Dog(){
                 this.raza = " ";
                 this.setRaza = function(newRaza){
                   this.raza = newRaza;
                 }
                 this.showInfo = function(){
                   alert(this.name + " is a " + this.raza + " that sometimes attack people.");
                 }
          
               }
          
               var myDog = new Dog();
               myDog.setName("Tarzan");
               myDog.setRaza("Pitbull");