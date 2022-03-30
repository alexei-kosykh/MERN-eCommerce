import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Alex Ko',
    email: 'alex@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Jim Din',
    email: 'jim@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Jane Dave',
    email: 'jane@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
];

export default users;
