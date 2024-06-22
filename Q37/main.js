function makeShirt(Size, Print) {
    if (Size === void 0) { Size = "Large"; }
    if (Print === void 0) { Print = "I Love TypeScript"; }
    console.log("I Selected the ".concat(Size, " size shirt with the printed ").concat(Print, " on it."));
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "I Love Python");
