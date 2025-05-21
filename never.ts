// const NeverFun = (): never => {
//   let data = 1;
//   while (data < 20) {
//     data++;
//     console.log("Data Log");
//   }
// };

// NeverFun();

// const NeverFun1 = (): never => {
//   let data = 1;
//   while (true) {
//     data++;
//     console.log("Data Log > ", data);
//   }
// };

// NeverFun1();

const ErrorFunction = (): never => {
  throw new Error("Never Function");
};

ErrorFunction();
