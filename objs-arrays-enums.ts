// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilan",
//   age: 30,
// };

/*

const person: {
  name: string;
  age: number;
  hobbies: string[];  or (number | string)[]
  role: [number, string]; -- tuple
} = {
  name: "Maximilan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role[1] = 10; ERROR !
// person.role = [0, 'admin']; OK !
// person.role = [0, 'admin', 'user']; ERROR !
// person.role.push('admin') -- OK - EXCEPTION SCENARIO
*/

// enum Role {
//   ADMIN, //0
//   READ_ONLY, // 1
//   AUTHOR, //2
// } -- enum

// enum Role {
//   ADMIN = 5,
//   READ_ONLY, //6
//   AUTHOR, // 7
// }

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Maximilan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let fav: string[];
fav = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // ERROR !
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
