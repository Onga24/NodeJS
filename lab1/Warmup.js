const users = [
  { id: 1, name: 'John Deep', age: 28 , role: 'developer'},
  { id: 2, name: 'Jane Smith', age: 34, role: 'admin' },
  { id: 3, name: 'Alice Johnson', age: 25, role: 'manger' },
  { id: 4, name: 'Bob Brown', age: 30, role: 'developer' },
  { id: 5, name: 'Charlie White', age: 35, role: 'admin' }, ];

  // Filter users older than 30
  let f1 = users.filter((user) => user.age > 30)
  console.log("Filter users older than 30",f1);

 // Map to get an array of user names
  let f2 = users.map((user) => user.name);
  console.log("Map to get an array of user names",f2);

  // Find the first user with the role 'admin'
  let firstAdmin = users.find((user) => user.role === 'admin');
  console.log("Find the first user with the role 'admin'",firstAdmin);

  // Find the last user with the role 'admin'
  let lastAdmin = users.findLast((user) => user.role === 'admin');
  console.log("Find the last user with the role 'admin'",lastAdmin);


// Deep copy example using JSON methods
  const deepcopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  }

  const originalcopy = {
  name: 'Alice',
  age: 30,
  skills: ['JS', 'Node'],
  address: {
    city: 'Cairo',
    zip: 12345
  }
};

const cloned = deepcopy(originalcopy);

cloned.name = 'Onga';
cloned.skills=('React');
cloned.address.city = 'Suez';
cloned.address.zip = 100;

console.log("Original Copy", originalcopy);
console.log("Cloned Copy:", cloned);