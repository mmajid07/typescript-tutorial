const FunData = (v1: number, v2: number, total?: string) => {
  console.log(total ?? "" + " ", v1 + v2);
};

FunData(5, 6, "total is > ");
FunData(5, 6);
