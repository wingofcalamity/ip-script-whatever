function getInt(max) {
        return Math.floor(Math.random()*max)
    }
function getIP() {
    //roll number
    aBlock = getInt(255);
    bBlock = getInt(255);
    cBlock = getInt(255);
    dBlock = getInt(255);
    //sort out private IPs
    if (aBlock == 0 || aBlock == 10 || aBlock == 127 || aBlock >= 240) getIP() //reroll
    else if (aBlock == 169 && bBlock == 254) getIP() //reroll
    else if (aBlock == 172 && bBlock >= 16 && bBlock <= 31 ) getIP() //reroll;
    else if (aBlock == 192 && bBlock == 168) getIP() //reroll;
    else return aBlock+'.'+bBlock+'.'+cBlock+'.'+dBlock; //return result
}
function outputIP() { 
    const reserved = '127.0.0.1' || '172.12.0.0'; 
    let out = getIP()
    if (out == reserved) {
        outputIP();
    }
    return out;
}
console.log(outputIP())