/*
My friend has a collection of birds and wants to know how fast they can fly and
what they have for plumage. So we have a couple of small programs to determine
the information.
 */


class Bird {
    constructor(bird) {
        Object.assign(this, bird);
    }

    plumage() {
        return "unknown";
    }

    airSpeedVelocity() {
        return null;
    }

}

class EuropeanSwallow extends Bird {
    plumage() {
        return "average";
    }

    airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    plumage() {
        return (this.numberOfCoconuts > 2) ? "tired" : "average";
    }

    airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }

    airSpeedVelocity() {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }

}

function createBird(bird) {
    switch (this.type) {
        case 'EuropeanSwallow':
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        case 'NorwegianBlueParrot':
            return new NorwegianBlueParrot();
        default:
            return new bird;
    }
}

function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
    return createBird(bird).plumage();
}

function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity();

}
