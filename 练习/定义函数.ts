function fn(): string {
  return "你好哇,李银河";
}
function fn1(text: string) {
  console.log(`内容是:${text}`);
}
type UNSTRING = string | undefined;
function fn2(text: UNSTRING) {
  fn1(text ?? "你好哇,👋");
}
fn2(undefined);

function f3(): UNSTRING {
  return "";
}

if (f3() === undefined) {
}

const foo = (): string | undefined | null => {
  return null;
};

console.log(foo() ?? "你好");
