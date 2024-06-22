function makeShirt(Size: string = "Large", Print: string ="I Love TypeScript"){
    console.log(`I Selected the ${Size} size shirt with the printed ${Print} on it.`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "I Love Python");