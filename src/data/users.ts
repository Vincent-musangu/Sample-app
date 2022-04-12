export interface IUser {
  id?: number;
  name?: string;
  age?: number;
  email?: string;
}

export const users: IUser[] = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
    email: "jane@gmail.com",
  },
];
