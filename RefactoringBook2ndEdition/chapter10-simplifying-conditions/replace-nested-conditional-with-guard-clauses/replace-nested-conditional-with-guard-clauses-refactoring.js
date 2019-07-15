/*
Here’s some code to calculate a payment amount for an employee.

It’s only relevant if the employee is still with the company,
so it has to check for the two other cases.
 */

function payAmount(employee) {
    if (employee.isSeparated) {
        return {amount: 0, reasonCode: "SEP"};
    }
    if (employee.isRetired) {
        return {amount: 0, reasonCode: "RET"};
    }

// logic to compute amount
    lorem.ipsum(dolor.sitAmet);
    consectetur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minim.veniam);
    return someFinalComputation();

}

// Example: Reversing the Conditions

function adjustedCapital(anInstrument) {
    if(anInstrument.capital <= 0 || anInstrument.interestRate <= 0 ||anInstrument.duration <=  0 )
        return 0;
    result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;


    return result;
}