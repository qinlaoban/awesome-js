// const str = "2bb7fff6-352d-4a65-93a0-a0ead1cedd21";
// console.log(str.replaceAll("-", ""));

for (let i = 0; i < 10; i++) {
  var randomNumber = Math.floor(Math.random() * 10);

  // console.log(randomNumber);
}

// let num = [1, 2, 3, 4, 5, 6];

// console.log(num.length);

// const index = num.indexOf(3);

// num.splice(index, 1);
// console.log(num);

let objs = [
  { name: "zs", key: 100 },
  { name: "ls", key: 101 },
  { name: "ww", key: 102 },
];

const index = objs.findIndex((obj) => obj.key == "102");
console.log(index);

function mock() {
  setTimeout(() => {
    return {
      name: "123",
    };
  }, 1000);
}

const data = mock();

console.log(data);
