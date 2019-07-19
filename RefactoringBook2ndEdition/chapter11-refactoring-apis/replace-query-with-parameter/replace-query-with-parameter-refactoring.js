class HeatingPlan {
    targetTemPerature(selectedTemperature) {
        if (selectedTemperature > this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}



function caller() {
    if (thePlan.targetTemPerature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
    else if (thePlan.targetTemPerature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
    else setOff()
}