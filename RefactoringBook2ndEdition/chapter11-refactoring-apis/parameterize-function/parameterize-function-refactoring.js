function PercentRaise(aPerson, factor) {
    aPerson.salary = aPerson.salary.multiply(factor);
}
function fivePercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.05);
}

//caller
const raise = PercentRaise(aPerson, 1.1);
const raise2 = PercentRaise(aPerson, 1.05);
