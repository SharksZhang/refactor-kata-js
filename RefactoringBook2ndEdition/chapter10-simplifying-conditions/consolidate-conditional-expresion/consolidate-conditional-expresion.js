/*
It’s a sequence of conditional checks which all have the same result. Since the
result is the same, I should combine these conditions into a single expression.
For a sequence like this, I do it using an or operator.
*/
function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2) return 0;
    if (anEmployee.monthsDisabled > 12) return 0;
    if (anEmployee.isPartTime) return 0;
// compute the disability amount
}