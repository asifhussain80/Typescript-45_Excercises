import { CLIENT_RENEG_LIMIT } from "tls";

function cityCountry(city:string, country:string):string{
    return `${city}, ${country}`;
}
console.log(cityCountry("Karachi", "Pakistan"));
console.log(cityCountry("Lahore","Pakistin"));
console.log(cityCountry("Dhaka","BanglaDesh"));