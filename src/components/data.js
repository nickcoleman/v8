import { faker } from '@faker-js/faker';

export const person = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.75 ? 'completed' : statusChance > 0.5 ? 'in-progress' : statusChance > 0.25 ? 'started' : 'assigned',
  };
};

export function makePersonData(len = 5553) {
  return range(len).map(() => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson),
    };
  });
}
