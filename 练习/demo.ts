// 获取
const emptyObj = {
  aaName: "zs",
};
console.log(`empty:${emptyObj["name"]}`);

{
  const aName: string = emptyObj["aaName"];
  console.log(`aName:${aName}`);
}
{
  const { aaName: aName } = emptyObj;
  console.log(`aName:${aName}`);
}
{
  const aName = emptyObj.aaName;
  console.log(`aName:${aName}`);
}
{
  const aName = emptyObj["aName"] ?? "zs";
  console.log(`aName:${aName}`);
}

// console.log(aName ?? "hello world");
