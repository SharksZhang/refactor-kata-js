const organization = new Organization({name: "Acme Gooseberries", country: "GB"});


result += `<h1>${getOrganization().name}</h1>`;

getOrganization().name = newName;

function getOrganization() {
    return organization;
}

class Organization {

    constructor(data) {
        this._name =data.name;
        this._country = data._country;
    }

    set name(aString) {
        this._name = aString;
    }

    get name() {
        return this._name
    }
    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }
}