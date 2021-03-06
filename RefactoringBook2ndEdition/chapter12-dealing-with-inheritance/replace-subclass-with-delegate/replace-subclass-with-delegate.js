// booking client
aBooking = new Booking(show, date);
// premium client
aBooking = new PremiumBooking(show, date, extras);


class Booking{
    constructor(show, date){
        this._show = show;
        this._date = date;
    }
    get hasTalkback() {
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
}

class PremiumBooking extends  Booking{
    constructor(show, date, extras){
        super(show, date);
        this._extras = extras;
    }

    get hasTalkback() {
        return this._show.hasOwnProperty('talkback');
    }
    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
}