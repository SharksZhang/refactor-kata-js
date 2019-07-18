/*
Consider a room monitoring system. It compares its daily temperature range with
a range in a predefined heating plan.
 */

// caller
if (!aPlan.withinRange(aRoom.daysTempRange))
    alerts.push("room temperature went outside range");

class HeatingPlan {

    withinRange(daysTempRange) {
        return (daysTempRange.low >= this._temperatureRange.low) && (daysTempRange.high <= this._temperatureRange.high);

    }
}
