function sandwich(...items:string[]){
console.log(`\nyour ordered sandwich have below items:`)
items.forEach(single_item => console.log(single_item));
console.log(`Now enjoy the Sandwich.\n`);   
}
sandwich("Butter", "Chicken", "chilli");
sandwich("Cheese", "egg", "dryfruits");
sandwich("Chicken", "chilli", "Cheese");