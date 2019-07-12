/*
Suppose I’m calculating the charge for something that has separate rates for
winter and isSummer:
 */
function countCharge() {
    if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
        charge = quantity * plan.summerRate;
    else
        charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
