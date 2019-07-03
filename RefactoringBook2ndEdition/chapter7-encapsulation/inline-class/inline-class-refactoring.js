class TrackingInformation {
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

class Shipment {
    get trackingInfo() {
        return this.display;
    }


    get shippingCompany() {
        return this._shippingCompany;
    }

    set shippingCompany(arg) {
        this._shippingCompany = arg;
    }

    get trackingNumber() {
        return this._trackingNumber;
    }

    set trackingNumber(arg) {
        this._trackingNumber = arg;
    }

    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;

    }
}

// caller…
aShipment = new Shipment();
aShipment.shippingCompany = request.vendor;