// Basic Level Up System
    // Did not use objects so looks like garbage

let level = 1;
let exp = 119;

let hp = 10;
let str = 1;
let def = 1;
let mag = 1;
let res = 1;
let spd = 1;


// Calculates Hitpoints Stat Level Up amount using RNG
function hpLevelCalc(min, max) {
    Math.floor(Math.random() * (max - min) + min);
}

// Calculates Stat Level Up amount of all stats that are not HP using RNG
function statLevelCalc(min, max) {
    Math.floor(Math.random() * (max - min) + min);
}

// Reset's experience after points reach 100
function expReset() {
    if (exp >= 100) {
        exp = exp - 100;
    }
    console.log(exp);
}
expReset();


// Stops leveling up at level 30
function levelCap() {
    while (level = 30) {
        exp = 0;
    }
}

// Stops leveling up after reaching max cap for the stat
function hpStatCap() {
    if (hp >= 50) {
        hp = 50;
    }

function strStatCap() {
    if (str >= 35) {
        str = 35;
    }
}

function defStatCap() {
    if (def >= 25) {
        def = 25;
    }
}

function magStatCap() {
    if (mag >= 10) {
        mag = 10;
    }
}

function resStatCap() {
    if (res >= 20) {
        res = 20;
    }
}

function spdStatCap() {
    if (spd >= 30) {
        spd = 30;
    }
}


}

// Level up process
function levelUp() {
    while (exp >= 100) {
        
            level = level + 1;
            levelCap();
            console.log("Level up to " + level + "!");
            return level;

            hp = hp + hpLevelCalc();
            hpStatCap();    

            str = str + statLevelCalc();
            strStatCap();

            def = def + statLevelCalc();
            defStatCap();
    
            mag = mag + statLevelCalc();
            magStatCap();
    
            res = res + statLevelCalc();
            resStatCap();
    
            spd = spd + statLevelCalc();
            spdStatCap();
            
            expReset();

        // }
    }

        console.log("----------------");
        console.log("Hitpoints is level: " + hp);
        console.log("----------------");
        console.log("Strength is level: " + str);
        console.log("----------------");
        console.log("Defense is level: " + def);
        console.log("----------------");
        console.log("Magic is level: " + mag);
        console.log("----------------");
        console.log("Resistance is level: " + res);
        console.log("----------------");
        console.log("speed is level: " + spd);
        console.log("----------------");
}
levelUp();
console.log("Experience: " + exp);
