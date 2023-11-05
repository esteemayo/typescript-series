// const user = {
//   name: 'john',
//   email: 'john@example.com',
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// const newUser = { name: 'john', isPaid: false, email: 'john@example.com' };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: 'reactjs', price: 399 };
// }

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: '', email: '', isActive: true };
}

createUser({ name: '', email: '', isActive: true });

export {};
