class Site {
    get customer() {
        return (this._customer === "unknown" ? new UnknownCustomer() : this._customer);
    }
}


class Customer {
    get name() {
    }

    get billingPlan() {
    }

    set billingPlan(arg) {
    }

    get paymentHistory() {
    }

    get isUnknown() {
        return false;
    }
}

class UnknownCustomer {
    get isUnknown() {
        return true;
    }
    get name(){
        return "occupant"
    }

    get billingPlan() {
        return registry.biilingPlans.basic
    }

    set billingPlan(arg) {

    }

    get paymentHistory(){
        return new NullPaymentHistory()
    }
}

class NullPaymentHistory{
    get weeksDelinquentInLastYear() {
        return 0
    }
}


function isUnknown(arg) {
    return arg.isUnknown();
}
// client 1…
const aCustomer = site.customer;

// ... lots of intervening code ...
let customerName= aCustomer.name;

// client 2…
const plan = aCustomer.billingPlan;

// client 3…
aCustomer.billingPlan = newPlan;

// client 4…
const weeksDelinquent =  aCustomer.paymentHistory.weeksDelinquentInLastYear;
