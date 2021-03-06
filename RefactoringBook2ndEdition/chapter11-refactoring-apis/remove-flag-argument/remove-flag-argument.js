/**
 * Here, the caller is using a literal boolean value to determine which code should
 run—a classic flag argument. But the whole point of using a function is to follow
 the caller’s instructions, so it is better to clarify the caller’s intent with explicit
 functions.
 */


aShipment.deliveryDate = deliveryDate(anOrder, true);
aShipment.deliveryDate = deliveryDate(anOrder, false)



function deliveryDate(anOrder, isRush) {
    if (isRush) {
        let deliveryTime;
        if (["MA", "CT"] .includes(anOrder.deliveryState)) deliveryTime = 1;
        else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
        else deliveryTime = 3;
        return anOrder.placedOn.plusDays(1 + deliveryTime);
    }
    else {
        let deliveryTime;
        if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
        else if (["ME", "NH"] .includes(anOrder.deliveryState)) deliveryTime = 3;
        else deliveryTime = 4;
        return anOrder.placedOn.plusDays(2 + deliveryTime);
    }
}