// booking client
aBooking = createBooking(show, date);
// premium client
aBooking = createPremiumBooking(show, date, extras);



class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    get hasTalkback() {
        return this._premiumDelegate? this._premiumDelegate.hasTalkback : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }

    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
    _bePremium(extras){
        this._premiumDelegate = new PremiumBookingDelegate(this.extras);
    }
}


class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }

    get hasTalkback() {
        return this._premiumDelegate.hasTalkback;
    }

    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
}


function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    const result = new PremiumBooking(show, date, extras);
    result._bePremium(extras);
    return result;
}

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }


    get hasTalkback() {
        return this._host._show.hasOwnProperty('talkback');
    }
}