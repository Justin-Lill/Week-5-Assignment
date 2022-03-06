class Car{
    constructor(make, model, color, type){
        this.make= make;
        this.model= model;
        this.color=color;
        this.type=type;
    }
}

class Vehicle{
    constructor(type){
        this.type= type;
        this.cars=[]
    }


    addCar(car){
        if(car instanceof Car){
        this.cars.push(car)
    }else{
        throw new Error(`You can only add an instance of Car. Argument is not a car ${car}`);
    }
}

    describe() {
        return `${this.make} has ${this.cars.length} cars.`
    }
}

class Menu{
    constructor(){
        this.vehicles= [];
        this.selectedVehicle= null;
    }

    start(){
    let selection= this.showMainMenuOptions();
        while (selection !=0){
            switch(selection){
                case '1':
                    this.createVehicle();
                    break;
                case '2':
                    this.viewVehicle();
                    break;                
                case '3':
                    this.deleteVehicle();
                    break;
                case '4':
                    this.displayVehicles();
                    break;
                default:
                    selection= 0;
            }
            selection= this.showMainMenuOptions();
        }
        alert('Goodbye');
    }

    showMainMenuOptions(){
        return prompt(`
            0) exit
            1) create new vehicle
            2) view vehicle
            3) delete vehicle
            4) display all vehicles
            `);
    }

    showVehicleMenuOptions(vehicleinfo) {
        return prompt(`
        0) back
        1) create a car
        2) delete a car
    -------------------------------
        ${vehicleinfo}
        `);
    }


    displayvehicles() {
        let vehicleString= "";
        for(let i= 0; i< this.vehicles.length; i++) {
        vehicleString += i + ') ' + this.vehicles[i].type + '\n';
        }
        alert(vehicleString);
    }

    createVehicle() {
        let type= prompt('Enter name of new vehicle');
        this.vehicles.push(new Vehicle(type))
    }

    viewVehicle(){
        let index= prompt('Enter the index of the car you want to view')
        if (index > -1 && index< this.vehicles.length); {
            this.selectedVehicle= this.vehicles[index];
            let description= this.selectedVehicle.type + '\n';
            for(let i= 0; i< this.selectedVehicle.cars.length; i++) {
                description+= i + ') ' + this.selectedVehicle.cars[i].make +

                 ' - ' + this.selectedVehicle.cars[i].model + '\n'
                 +  ' - ' + this.selectedVehicle.cars[i].color + '\n'
                 +  ' - ' + this.selectedVehicle.cars[i].type + '\n';
            }

            let selection= this.showVehicleMenuOptions(description);
            switch(selection){
                case '1':
                    this.createCar();
                    break;
                case '2':
                    this.deleteCar();
                
            }
        }
     }

     createCar(){
         let make = prompt('Enter name for new car')
         let model= prompt('Enter model of new car')
         let color = prompt('Enter color for new car')
         let type= prompt('Enter type of new car')
         this.selectedVehicle.cars.push(new Car(make, model, color, type));
     }
     
     deleteVehicle() {
         let index= prompt('Enter the index of the car you want to delete.');
         if(index > -1 && index < this.selectedVehicle.car.length) {
             this.selectedVehicle.car.splice(index, 1);
         }
     }
    }  

let menu= new Menu();
    menu.start();
    