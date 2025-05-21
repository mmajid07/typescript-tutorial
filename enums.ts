enum userRole {
  admin = "Admin",
  manager = "Manager",
  Staff = "Staff",
}

var userData: userRole = userRole.admin;

console.log(userData);

enum Person {
  name,
  city,
  country,
}

var personData: Person = Person.country;
console.log(personData);
