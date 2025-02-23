// let checkEven = new Promise((resolve, reject) => {
//     let number = 5;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error));


    // Promise.all([
    //     Promise.resolve("Task 1 completed"),
    //     Promise.reject("Task 2 completed"),
    //     Promise.reject("Task 3 failed")
    // ])
    //     .then((results) => console.log(results))
    //     .catch((error) => console.error(error));


    // Promise.allSettled([
    //     Promise.resolve("Task 1 completed"),
    //     Promise.reject("Task 2 failed"),
    //     Promise.resolve("Task 3 completed")
    // ])
    //     .then((results) => console.log(results))

    // Promise.race([
    //     new Promise((resolve) =>
    //         setTimeout(() =>
    //             resolve("Task 1 finished"), 1000)),
    //     new Promise((resolve) =>
    //         setTimeout(() =>
    //             resolve("Task 2 finished"), 500)),
    // ]).then((result) =>
    //     console.log(result));


    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/");
        const data = await response.json();
        console.log(data);
      }
      
      fetchData();