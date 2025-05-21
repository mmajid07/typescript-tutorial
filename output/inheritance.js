"use strict";
class Auth {
    login(name, password) {
        if (name && password) {
            return "User Login";
        }
    }
}
class Student extends Auth {
    Marks(marks) {
        if (marks > 33) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
}
class Teacher extends Auth {
}
var t = new Student();
var t = new Student();
console.log(t.login("Majid", 12345));
console.log(t.Marks(40));
