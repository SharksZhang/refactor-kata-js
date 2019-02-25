var company = require('./company');
var expect = require('chai').expect;

// console.log(company.invoices);

// console.log(company.statement(company.invoices[0], company.plays));

describe('test statement', function() {
    let invoices = [
        {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
    ];

    let plays = {
        "hamlet": {"name": "Hamlet", "type": "tragedy"},
        "as-like": {"name": "As You Like It", "type": "comedy"},
        "othello": {"name": "Othello", "type": "tragedy"}
    };
    it('should print statement given invoices and plays  ', function() {
        let result = company.statement(invoices[0], plays);
        console.log(result);
        expect(result).to.be.contains(result, "Statement for BigCo");
        expect(result).to.be.contains(result, "Hamlet: $650.00 (55 seats)");
        expect(result).to.be.contains(result, "As You Like It: $580.00 (35 seats)");
        expect(result).to.be.contains(result, "Othello: $500.00 (40 seats)");
        expect(result).to.be.contains(result, "Amount owed is $1,730.00");
        expect(result).to.be.contains(result, "You earned 47 credits");
        // expect(company.statement(company.invoices[0], company.plays)).to.be.equal();
    });
});