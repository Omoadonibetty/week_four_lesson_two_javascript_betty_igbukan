class Phone {
    constructor(brand, model, storageCapacity, batteryLife, has5G) {
        this.brand = brand;
        this.model = model;
        this.storageCapacity = storageCapacity;
        this.batteryLife = batteryLife;
        this.has5G = has5G;
    }

    phoneDetails() {
        return `Phone Details:\nBrand: ${this.brand}, Model: ${this.model}, Storage: ${this.storageCapacity}GB, Battery Life: ${this.batteryLife} hours, 5G Support: ${this.has5G}\n`;
    }
}

const phone1 = new Phone("Apple", "iPhone 13", 128, 20, true);
const phone2 = new Phone("Samsung", "Galaxy S21", 256, 22, true);
const phone3 = new Phone("Nokia", "3310", 16, 48, false);

console.log(phone1.phoneDetails());
console.log(phone2.phoneDetails());
console.log(phone3.phoneDetails());
