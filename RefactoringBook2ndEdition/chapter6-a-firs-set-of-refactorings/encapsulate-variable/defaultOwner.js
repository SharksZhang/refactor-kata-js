let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

export function getDefaultOwner() {
    return defaultOwner;
}

export  function setDefaultOwner(args) {
    defaultOwner = args
}