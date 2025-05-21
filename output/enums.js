"use strict";
var userRole;
(function (userRole) {
    userRole["admin"] = "Admin";
    userRole["manager"] = "Manager";
    userRole["Staff"] = "Staff";
})(userRole || (userRole = {}));
var userData = userRole.admin;
console.log(userData);
var Person;
(function (Person) {
    Person[Person["name"] = 0] = "name";
    Person[Person["city"] = 1] = "city";
    Person[Person["country"] = 2] = "country";
})(Person || (Person = {}));
var personData = Person.country;
console.log(personData);
