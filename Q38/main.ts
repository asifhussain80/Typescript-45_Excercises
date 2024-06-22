import { CLIENT_RENEG_LIMIT } from "tls"

function cityDetail(city:string, country:string="Pakistan"){
    console.log(`${city} is in ${country}`)
}
cityDetail("Karaci");
cityDetail("RawalPindi");
cityDetail("Dehli", "India");
cityDetail("Dhaka","Bangaldes")