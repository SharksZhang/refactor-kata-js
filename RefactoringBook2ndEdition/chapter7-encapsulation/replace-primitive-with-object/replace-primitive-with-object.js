class Order{
    constructor(data)
    {
        this.priority = data.priority;
// more initialization
    }
}
//Some client codes uses it like this:
highPriorityCount = orders.filter(o => "high" === o.priority
    || "rush" === o.priority)
    .length;