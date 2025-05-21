interface info {
    name: string;
    age: number;
    college: string;
}
interface teacherType extends info {
    subject: string;
}
declare var interfaceData: info;
declare var interfaceTeacherData: teacherType;
