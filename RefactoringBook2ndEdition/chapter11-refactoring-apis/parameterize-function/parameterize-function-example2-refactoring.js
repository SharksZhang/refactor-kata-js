function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount =
        withBand(usage, 0, 100) * 0.03
        + withBand(usage, 100, 200) * 0.05
        + withBand(usage, 200, Infinity) * 0.07;
    return usd(amount);
}
function bottomBand(usage) {
    return Math.min(usage, 100);
}
function withBand(usage, bottom = 0, top = 0) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}
function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
}