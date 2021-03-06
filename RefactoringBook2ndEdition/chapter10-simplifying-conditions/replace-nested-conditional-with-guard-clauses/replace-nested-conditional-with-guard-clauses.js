/*
Here’s some code to calculate a payment amount for an employee.

It’s only relevant if the employee is still with the company,
so it has to check for the two other cases.
 */

function payAmount(employee) {
    let result;
    if(employee.isSeparated) {
        result = {amount: 0, reasonCode: "SEP"};
    }
    else {
        if (employee.isRetired) {
            result = {amount: 0, reasonCode: "RET"};
        }
        else {
// logic to compute amount
            lorem.ipsum(dolor.sitAmet);
            consectetur(adipiscing).elit();
            sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
            ut.enim.ad(minim.veniam);
            result = someFinalComputation();
        }
    }
    return result;
}

// Example: Reversing the Conditions

function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital > 0) {
        if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
            result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
        }
    }
    return result;
}