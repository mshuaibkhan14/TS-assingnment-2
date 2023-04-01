
class Vehicle {
  constructor(
        private _make: string,
        private _model: string,
        private _year: number
        ){}

        get make() {
            return this._make;
          }
    
          public set make(anOtherMake: string) {
                  if (!anOtherMake) {
                    throw new Error("Make cannot be empty");
                  }
                  this._make = anOtherMake;
                }
        
          get model() {
            return this._model;
          }
        
          get year() {
            return this._year;
          }
    }

    


class Car extends Vehicle {

    constructor(
         make:  string,
         model: string,
         year:  number,
         private _numSeats: number,
         private _carType : string
         )
     {
      super(make, model, year);
      
    }
    
}



class Truck extends Vehicle {

    constructor(
         make:  string,
         model: string,
         year:  number,
         private _fuleTank : number,
         private _loadingcapacity: string
         )
     {
      super(make, model, year);
      
    }
    
}



class Motorcycle extends Vehicle {

    constructor(
         make:  string,
         model: string,
         year:  number,
         private _engine: number,
         private _mileage : string
         )
     {
      super(make, model, year);
      
    }
    
}
const corolla = new Car ("Toyota", "Corolla", 2018, 5,"sadan");
console.log(corolla);

const ravi = new Car ("Suzuki", "Ravi", 2015, 36, "800kg");
console.log(ravi);

const bike = new Car ("Honda", "CD-70", 2022, 70, "50km",);
console.log(bike);

   