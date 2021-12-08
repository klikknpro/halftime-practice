const array1 = ["alma", "korte", "ilyenek", "sutotok"];
const array2 = ["alma2", "korte2", "ilyenek2", "sutotok2"];

function addValueToTheEndOfArray(arr, val) {
  arr.push(val);
  return arr;
}

// console.log(addValueToTheEndOfArray(["alma", "korte", "ilyenek", "sutotok"], "word"));
////

let a = 1;
let b = a;
a = 2;
b = 5;
// console.log(a, " ", b);
//

let c = {
  key: "value",
  key2: {
    subkey: "value3",
  },
};
let e = {
  key: "value",
};
// let d = c; // a d a c-re mutat, "parancsikon"
// let d = { ...c }; // ez is shallow copy, a beagyazott objektumokat/tomboket nem masolja
// let d = Object.assign({}, c); // ez is shallow copy, (target uj object)
// let d = JSON.parse(JSON.stringify(c));
let convertCtoString = JSON.stringify(c);
let d = JSON.parse(convertCtoString);
console.log("d tipusa: ", typeof d);
console.log("c tipusa: ", typeof c);
console.log("convertCtoString tipusa: ", typeof convertCtoString);
/*
c.key = "value1";
c.key2.subkey = "value4";
d.key = "value2";
d.key2.subkey = "value5"; // oda vissza update
console.log(c, " ", d);
*/
// console.log(c === d);
// console.log({} === {}); // false!!!
/*
console.log(c === e);
console.log(c.key === e.key); // a stringet hasonlitja ossze
console.log("value" === "value");
*/
//
function createNewArrayWithValue(arr, val) {
  const newArray = [...arr, val]; // bele a regi array + value is
  /*
  const newArray = JSON.parse(JSON.stringify(arr));
  newArray.push(val); // deep copy eseten
  */
  return newArray;
}

// console.log(createNewArrayWithValue(array1, "word"));

function addArrayToArray(arr1, arr2) {
  /* for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);

  }
  for (const item of arr1) {
    arr2.push(item);
  }
  return arr2;
  */
  return arr1.concat(arr2); // eredeti array-ek maradnak
}
console.log(addArrayToArray(array1, array2));
console.log(array1, " ", array2);
