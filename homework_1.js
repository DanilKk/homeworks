const obj = {

    firstName: "danil",
    lastName: "kiryakin",
    middleName: "vladimirovich",
    yearOfBirth: 1995,
    currentYear: new Date().getFullYear(),
    age: 0,
    studying: false,
    working: true
};

obj.age = obj.currentYear - obj.yearOfBirth

console.table(obj)