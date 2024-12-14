async function foo(){
    console.log("A")
    await Promise.resolve();
    console.log("B")
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("C")
}

console.log("D")
foo()
console.log("E")

1. console.log("D")

    This will immediately execute first, as it's a synchronous operation.

2. foo()

    When the foo() function is called, it starts executing, but since foo is an async function, it returns a Promise and does not execute completely immediately.
        Inside foo(), the first line console.log("A") runs and prints A.

3. await Promise.resolve()

    The await Promise.resolve() makes the code wait for a resolved promise. The promise is already resolved, so the rest of the code after the await will be scheduled to run in the next "microtask" queue (i.e., after the synchronous code and before the next event loop iteration).

4. console.log("E")

    This will run immediately after calling foo(), because it's a synchronous operation and foo hasn't finished yet.

5. console.log("B")

    This is printed after the first await resolves, which happens when the current synchronous code has completed. So this prints after console.log("E"), but before any asynchronous operations are processed by the event loop.

6. await new Promise(resolve => setTimeout(resolve, 0))

    This await causes a delay because it waits for the promise returned by setTimeout(resolve, 0) to resolve. This places the resolution of this promise in the "microtask" queue, which happens after the current synchronous code has completed.

7. console.log("C")

    This is the final log statement and will execute after the promise from setTimeout resolves.
