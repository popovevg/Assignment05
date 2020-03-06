//STEP 1
// let movies = ['Fast and Furious 1', 'Fast and Furious 2', 'Fast and Furious 3', 'Fast and Furious 4', 'Fast and Furious 5'];
// window.console.log(movies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// window.console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 5';
// window.console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// delete movies[0];
// for (movie of movies) {
//     window.console.log(movie);
// }

//STEP 5
// let movies = [];
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// movies[6] = 'Fast and Furious 7';
// for (let i = 0; i < movies.length; i++) {
//     window.console.log(movies[i]);
// }

//STEP 6
// let movies = [];
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// movies[6] = 'Fast and Furious 7';
// for (index in movies) {
//     window.console.log(movies[index]);
// }

// //STEP 7
// let movies = [];
// movies[0] = 'Lost';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// movies[6] = 'Fast and Furious 7';
// movies.sort();
// for (index in movies) {
//     window.console.log(movies[index]);
// }

//STEP 8
// let movies = [];
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// movies[6] = 'Fast and Furious 7';
// let leastFavMovies = [];
// leastFavMovies[0] = 'Fast and Furious 8';
// leastFavMovies[1] = 'Fast and Furious 9';
// leastFavMovies[2] = 'It';
// window.console.log("Movies I like:");
// window.console.log(" ");
// for (movie of movies) {
//     window.console.log(movie);
// }
// window.console.log(" ");
// window.console.log("Movies I regret watching:");
// window.console.log(" ");
// for (movie of leastFavMovies) {
//     window.console.log(movie);
// }

//STEP 9
// let movies = [];
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// movies[6] = 'Fast and Furious 7';
// let leastFavMovies = [];
// leastFavMovies[0] = 'Fast and Furious 8';
// leastFavMovies[1] = 'Fast and Furious 9';
// leastFavMovies[2] = 'It';
// let allMovies = movies.concat(leastFavMovies);
// allMovies.sort().reverse();
// for (movie of allMovies) {
//     window.console.log(movie);  
// }

//STEP 10
// let movies = [];
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// movies[6] = 'Fast and Furious 7';
// let leastFavMovies = [];
// leastFavMovies[0] = 'Fast and Furious 8';
// leastFavMovies[1] = 'Fast and Furious 9';
// leastFavMovies[2] = 'It';
// let allMovies = movies.concat(leastFavMovies);
// window.console.log(allMovies.sort().reverse().pop());  

//STEP 11
// let movies = [];
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// movies[6] = 'Fast and Furious 7';
// let leastFavMovies = [];
// leastFavMovies[0] = 'Fast and Furious 8';
// leastFavMovies[1] = 'Fast and Furious 9';
// leastFavMovies[2] = 'It';
// let allMovies = movies.concat(leastFavMovies);
// window.console.log(allMovies.sort().reverse().shift());  

//STEP 12
// let movies = [];
// movies[0] = 'Fast and Furious 1';
// movies[1] = 'Fast and Furious 2';
// movies[2] = 'Fast and Furious 3';
// movies[3] = 'Fast and Furious 4';
// movies[4] = 'Fast and Furious 5';
// movies[5] = 'Fast and Furious 6';
// movies[6] = 'Fast and Furious 7';
// let leastFavMovies = [];
// leastFavMovies[0] = 'Fast and Furious 8';
// leastFavMovies[1] = 'Fast and Furious 9';
// leastFavMovies[2] = 'It';
// let allMovies = movies.concat(leastFavMovies);
// allMovies.sort().reverse()
// let numbers = [];
// for (let i = 0; i < leastFavMovies.length; i++) {
//     numbers[i] = allMovies.indexOf(leastFavMovies[i])
// }
// allMovies[parseInt(numbers[0])] = "Harry Potter 1";
// allMovies[parseInt(numbers[1])] = "Harry Potter 2";
// allMovies[parseInt(numbers[2])] = "Harry Potter 3";
// for (movie of allMovies) {
//     window.console.log(movie);
// }

//STEP 13
// let employee1 = [];
// employee1["id1"] = 123;
// employee1["name1"] = "Evgeny Popov";
// employee1["title1"] = "Analyst";
// employee1["department1"] = "Marketing";
// employee1["isCurrent1"] = true;
// let employee2 = [];
// employee2["id2"] = 456;
// employee2["name2"] = "Tom Ford";
// employee2["title2"] = "Designer";
// employee2["department2"] = "Marketing";
// employee2["isCurrent2"] = false;
// let employees = Object.assign(employee1, employee2);
// window.console.log(employees.name2);

//STEP 14
// let employee1 = [];
// employee1["id1"] = 123;
// employee1["name1"] = "Evgeny Popov";
// employee1["title1"] = "Analyst";
// employee1["department1"] = "Marketing";
// employee1["isCurrent1"] = true;
// let employee2 = [];
// employee2["id2"] = 456;
// employee2["name2"] = "Tom Ford";
// employee2["title2"] = "Designer";
// employee2["department2"] = "Marketing";
// employee2["isCurrent2"] = false;
// let employees = Object.assign(employee1, employee2);
// for (index in employees) {
//     if (index === "name1" || index === "name2") {
//         window.console.log(employees[index])
//     }
// }

//STEP 15
// let employee1 = [];
// employee1["id1"] = 123;
// employee1["name1"] = "Evgeny Popov";
// employee1["title1"] = "Analyst";
// employee1["department1"] = "Marketing";
// employee1["isCurrent1"] = true;
// let employee2 = [];
// employee2["id2"] = 456;
// employee2["name2"] = "Tom Ford";
// employee2["title2"] = "Designer";
// employee2["department2"] = "Marketing";
// employee2["isCurrent2"] = false;
// let employee3 = [];
// employee3["id3"] = 789;
// employee3["name3"] = "Mike Khamada";
// employee3["title3"] = "Developer";
// employee3["department3"] = "IT";
// employee3["isCurrent3"] = true;
// let employees = Object.assign(employee1, employee2, employee3);

// for (index in employees) {
//     if (index === "name1" || index === "name2" || index === "name3") {
//         let x = "isCurrent" + index.substr(-1);
//         if (employees[x] === true) {
//         window.console.log(employees[index])
//         }
//     }
// }

//STEP 16
// movies = [  ["Fast and Furious 1", 1],
//             ["Fast and Furious 5", 2],
//             ["Fast and Furious 3", 3],
//             ["Fast and Furious 2", 4],
//             ["Fast and Furious 4", 5]];
// let sortedList = [];
// for (let i = 0; i < movies.length; i++) {
//     sortedList[i] = movies[i][0];
// }
// sortedList.sort();
// for (movie of sortedList) {
//     window.console.log(movie);
// }

//STEP 17
// let employees = ['Evgeny Popov', "Jeff Sigal", "Mark Shagal"];
// function showEmployee (parameter) {
//     window.console.log("Employees:");
//     window.console.log(" ");
//     for (person of parameter) {
//         window.console.log(person);
//     }
// }
// showEmployee(employees);

//STEP 18
// let x = [58, '', 'abcd', true, false, null, false, 0]
// function filter(list) {
//     let newMassiv = [];
//     for (let  i = 0; i < list.length; i++) {
//         if (list[i] != '' && list[i] != null && list[i] != 0 ) {
//             newMassiv.push(list[i]);
//         }
//     }
//     for (element of newMassiv) {
//         window.console.log(element);
//     }
// }
// filter(x);

//STEP 19
// function randomElement (list) {
//     window.console.log(list[Math.round(Math.random()*(list.length - 1))]);
// }

//STEP 20
// function maxElenemt (list) {
//     list.sort();
//     window.console.log(list[list.length - 1]);
// }
