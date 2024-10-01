class Car {
    constructor(numSeats, numbHeadLamps, fuelTankMaxLitre, numbExhaustPipe, convertible, numbOfDoors, numbOfEnginePlug = 4) {
        this.numSeats = numSeats;
        this.numbHeadLamps = numbHeadLamps;
        this.fuelTankMaxLitre = fuelTankMaxLitre;
        this.numbExhaustPipe = numbExhaustPipe;
        this.convertible = convertible;
        this.numbOfDoors = numbOfDoors;
        this.numbOfEnginePlug = numbOfEnginePlug;
    }

    carDetails() {
        return `Car Details:\nSeats: ${this.numSeats}, Headlamps: ${this.numbHeadLamps}, Fuel Tank Capacity: ${this.fuelTankMaxLitre}L, Exhaust Pipes: ${this.numbExhaustPipe}, Convertible: ${this.convertible}, Doors: ${this.numbOfDoors}, Engine Plugs: ${this.numbOfEnginePlug}\n`;
    }
}

const car1 = new Car(2, 2, 50, 2, true, 2);
const car2 = new Car(7, 4, 80, 1, false, 4);
const car3 = new Car(5, 2, 60, 1, false, 4);
const car4 = new Car(5, 2, 45, 1, false, 4);

console.log(car1.carDetails());
console.log(car2.carDetails());
console.log(car3.carDetails());
console.log(car4.carDetails());
