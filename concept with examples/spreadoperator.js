const obj = { name : {
    me : "manju",
    frd : "rahul"
}, gender: "male" }

const newObj = { ...obj, job: 'IT', age: 24} // spread ... operator creates shallow copy but not deep copy when it has nested structures
console.log(newObj)

obj.name.frd = "vicky1";
obj.gender = "Alwaysmale"; // spread operator will create deep copy for direct properties of an ...obj, but creates shallow copy for nested structure.

console.log(newObj)
