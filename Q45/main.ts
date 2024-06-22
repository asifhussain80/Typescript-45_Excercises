function my_car(Manufacturer, Model, ...options){
    let car = {
        Manufacturer: Manufacturer,
        Model: Model
    };
        options.forEach(element => {
            let [key, value] = element.split(":");
            car[key.trim()] = value.trim();
        });

    
    return car;
}

let car_data = my_car("Toyota", "Corrola", "Color: Black", "Year: 2024");
console.log(car_data);


