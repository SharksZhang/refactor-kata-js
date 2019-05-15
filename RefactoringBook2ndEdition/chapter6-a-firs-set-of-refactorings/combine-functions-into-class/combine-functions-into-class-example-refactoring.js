reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// client  1…
const aReading = new Reading(acquireReading());
const baseCharge = aReading.baseCharge();

// client  2
const aReading = new Reading(acquireReading());
const taxableCharge = aReading.TaxableCharge();


// client  3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

class Reading {
    constructor(data) {
        this._customer = data._customer;
        this._quantity = data._quantity;
        this._month = data._month;
        this._year = data._year;
    }


    get customer() {
        return this._customer;
    }

    get quantity() {
        return this._quantity;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }
    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }

    get TaxableCharge() {
        return Math.max(0, this.baseCharge - taxThreshold(this.year));
    }
}