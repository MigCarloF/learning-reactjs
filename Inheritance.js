class Hero {
    constructor(name, race){
        this.name = name;
        this.race = race;
    }

    attack(){
        console.log("I, " + this.name + ", attack!");
    }
}

class Warrior extends Hero {
    constructor(name, race){
        super(name, race);
        this.attackPower = 50;
        this.defense = 100;
    }

    attack(){
        super.attack();
        this.swingSword();
    }

    swingSword(){
        console.log("... with my special move Sword Spin!");
    }
}

class Wizard extends Hero {
    constructor(name, race){
        super(name, race);
        this.attackPower = 100;
        this.defense = 50;
    }

    attack(){
        super.attack();
        this.castMagic();
    }

    castMagic(){
        console.log("... using my magic! Avada Kedavra!");
    }
}


let hero = new Hero("Josh", "Human");
hero.attack();

let jack = new Warrior("Jack", "Orc");
jack.attack();

let archie = new Wizard("Archie", "Elf");
archie.attack();