"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cityDetail(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
cityDetail("Karaci");
cityDetail("RawalPindi");
cityDetail("Dehli", "India");
cityDetail("Dhaka", "Bangaldes");
