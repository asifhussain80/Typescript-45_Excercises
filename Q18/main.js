var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesVisit = ["China", "Denmark", "Afghanistan", "Bangladesh", "Egypt"];
console.log("Orignal Order:", countriesVisit);
console.log("Alphabatical Order:", __spreadArray([], countriesVisit, true).sort());
console.log("Still in Orignal Order:", countriesVisit);
console.log("Reverese order:", __spreadArray([], countriesVisit, true).reverse());
console.log("Still in Orignal Order:", countriesVisit);
console.log("Orignal Array Reversed:", __spreadArray([], countriesVisit, true).reverse());
console.log("Back to Orignal Array:", countriesVisit.reverse());
console.log("Store in Alphabatical order:", countriesVisit.sort());
console.log("Orignal Array Reversed Again:", countriesVisit.reverse());
