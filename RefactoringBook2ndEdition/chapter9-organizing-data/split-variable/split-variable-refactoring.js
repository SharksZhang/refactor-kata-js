
/*
The interesting thing for our example is the
way the variable acc is set twice. It has two responsibilities: one to hold the initial
acceleration from the first force and another later to hold the acceleration from
both forces. I want to split this variable.
 */
function distanceTravelled (scenario, time) {
    let result;
    const primaryAcc = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcc * primaryTime * primaryTime;
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcc * scenario.delay;
        const secondaryAcc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * secondaryAcc * secondaryTime * secondaryTime;
    }
    return result;
}

//Example: Assigning to an Input Parameter
function discount (inputValue, quantity) {
    let result = inputValue;
    if (inputValue > 50) result = result - 2;
    if (quantity > 100) result = result - 1;
    return result;
}