interface info {
  name: string;
  age: number;
  college: string;
}

interface teacherType extends info {
  subject: string;
}

var interfaceData: info = {
  name: "Majid",
  age: 25,
  college: "GCT",
};

var interfaceTeacherData: teacherType = {
  name: "Majid",
  age: 25,
  college: "GCT",
  subject: "Computer",
};

console.log(interfaceTeacherData);
