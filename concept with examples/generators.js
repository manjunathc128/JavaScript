// generators are special function that allows to pause and resume the operation, used to yield multiple values over the time .
// generators are introduced in ES6 feature introduced in 2015.
// generators are used to work with sequence of operation and handle asynchronous operations .
// generators used next method to yeild one value at a time.

function* myGen(){
    yield 1 * 2;
    yield 2 * 3;
    yield 3 * 4;
}

const generator = myGen();
console.log(generator, generator.next(), generator.next(), generator.next(), generator.next(),generator.next() )
generator.next()
