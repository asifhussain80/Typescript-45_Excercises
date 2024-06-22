function my_car(Manufacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        Manufacturer: Manufacturer,
        Model: Model
    };
    options.forEach(function (element) {
        var _a = element.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var car_data = my_car("Toyota", "Corrola", "Color: Black", "Year: 2024");
console.log(car_data);
