class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    addCourse(aCourse) {
        this._courses.push(aCourse)
    }

    removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
        const index = this._courses.indexOf(aCourse);
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
    }

    get name() {
        return this._name;
    }
    //需要改变的在类内部处理,返回的都是不变的
    get courses() {
        return this._courses.slice();
    }

    set courses(aList) {
        this._courses = aList.slice();
    }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() {
        return this._name;
    }

    get isAdvanced() {
        return this._isAdvanced;
    }
}

numAdvancedCourses = aPerson.courses
    .filter(c => c.isAdvanced)
    .length;


// client  code…
const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));

// client  code…
for(const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false));
}