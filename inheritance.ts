class Auth {
  login(name: string, password: number) {
    if (name && password) {
      return "User Login";
    }
  }
}

class Student extends Auth {
  Marks(marks: number) {
    if (marks > 33) {
      return "Pass";
    } else {
      return "Fail";
    }
  }
}

class Teacher extends Auth {}

var t = new Student();
var t = new Student();
console.log(t.login("Majid", 12345));
console.log(t.Marks(40));
