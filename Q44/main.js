function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nyour ordered sandwich have below items:");
    items.forEach(function (single_item) { return console.log(single_item); });
    console.log("Now enjoy the Sandwich.\n");
}
sandwich("Butter", "Chicken", "chilli");
sandwich("Cheese", "egg", "dryfruits");
sandwich("Chicken", "chilli", "Cheese");
