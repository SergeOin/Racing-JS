function Hero(name, classname, point, strength){
    this.name = name;
    this.classname = classname;
    this.point = point;
    this.strength = strength;
}

let mage = new Hero("amadeus", "wizard", 10, 3);
let guerrier = new Hero("pontius", "Warrior", 3, 10);
mage.toString();
guerrier.toString();

document.getElementById("button").innerHTML += ("I am " + mage.name.charAt(0).toUpperCase() + mage.name.substring(1) + " the " + mage.classname + ", I have "+ mage.point +" points in Magic and "+ mage.strength +" in Strength !") + (" I am " + guerrier.name.charAt(0).toUpperCase() + guerrier.name.substring(1) + " the " + guerrier.classname + ", I have "+ guerrier.point +" points in Magic and "+ guerrier.strength +" in Strength !") 