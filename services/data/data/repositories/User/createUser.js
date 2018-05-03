import Users from "./Users";

const firstNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Thomas",
  "Charles",
  "Christopher",
  "Daniel",
  "Matthew",
  "Anthony",
  "Donald",
  "Mark",
  "Paul",
  "Steven",
  "Andrew",
  "Kenneth"
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson"
];

const createUser = async () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const user = {
    id: String(Users.length + 1),
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    firstName,
    lastName
  };
  Users.push(user);
  return user;
};

createUser();
createUser();
createUser();

export default createUser;
