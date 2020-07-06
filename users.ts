type User = {
  _id: string;
  name: string;
  email: string;
  active: boolean;
};

const users: Array<User> = [
  {
    _id: String(Math.random()),
    name: "Douglas",
    email: "douglas@teste.com",
    active: true,
  },
  {
    _id: String(Math.random()),
    name: "Douglas 2",
    email: "douglas2@teste.com",
    active: false,
  },
  {
    _id: String(Math.random()),
    name: "Douglas 3",
    email: "douglas3@teste.com",
    active: true,
  },
];

export default users;
