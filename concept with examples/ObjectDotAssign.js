const obj = { name : {
    me : "manju",
    frd : "rahul"
}, gender: "male" }

const newObj =Object.assign({}, obj, {job: 'IT', age: 24} ) // Object.assign creates shallow copy but not deep copy when it has nested structures
console.log(newObj)

obj.name.frd = "vicky1";
obj.gender = "Alwaysmale"; // Object.assign will create deep copy for direct properties of an ...obj, but creates shallow copy for nested structure.

console.log(newObj)
