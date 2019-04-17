
function printOwing(invoice) {
    printBanner();
    // calculate outstanding
    let outstanding = calculateOutstanding(invoice);
    // record due date
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    //print details
    printDetails(invoice, outstanding);

}

//Example1: No Variables Out of Scope
function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}

//Example2: Using Local Variables
function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

//Example3: Reassigning a Local Variable

function calculateOutstanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }
    return outstanding;
}