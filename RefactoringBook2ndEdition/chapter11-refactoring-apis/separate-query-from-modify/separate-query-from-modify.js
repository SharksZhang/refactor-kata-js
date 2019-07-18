/*
Here is a function that scans a list of names for a miscreant. If it finds one, it
returns the name of the bad guy and sets off the alarms. It only does this for the
first miscreant it finds (I guess one is enough).
 */


function alertForMiscreant (people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return "Don";
        }
        if (p === "John") {
            setOffAlarms();
            return "John";
        }
    }
    return "";
}

//caller
const found = alertForMiscreant(people);
