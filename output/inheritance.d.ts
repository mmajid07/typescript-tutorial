declare class Auth {
    login(name: string, password: number): "User Login" | undefined;
}
declare class Student extends Auth {
    Marks(marks: number): "Pass" | "Fail";
}
declare class Teacher extends Auth {
}
declare var t: Student;
declare var t: Student;
