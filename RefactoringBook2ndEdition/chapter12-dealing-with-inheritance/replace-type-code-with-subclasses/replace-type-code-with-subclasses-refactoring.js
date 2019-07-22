class Employee {
    constructor(name) {
        this._name = name;
    }

    createEmployee(name, type) {
        switch (type) {
            case "engineer":
                return new Engineer(name);
            case "manager":
                return new Manager(name);
            case "salesman":
                return new Salesman(name);
            default:
                throw  new Error();
        }
    }

    get type() {
        return this._type;
    }


    toString() {
        return `${this._name} (${this._type})`;
    }
}

class Engineer extends Employee {
    get type() {
        return "engineer"
    }
}

class Manager extends Employee {
    get type() {
        return "manager"
    }
}

class Salesman extends Employee {
    get type() {
        return "salesman"
    }
}
