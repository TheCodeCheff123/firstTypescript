# firstTypescript
# filterPersons Function

## Description
The `filterPersons` function is a TypeScript utility that filters an array of users based on their type (`user` or `admin`). It ensures strong type safety by enforcing correct return types and accepting appropriate filtering criteria.

## Features
- Returns `User[]` when `personType` is `'user'`.
- Returns `Admin[]` when `personType` is `'admin'`.
- Accepts partial `User` or `Admin` objects as filtering criteria.
- Excludes the `type` field from the filtering criteria.

## Types
```typescript
type User = {
  type: 'user';
  name: string;
  age: number;
  email: string;
};

type Admin = {
  type: 'admin';
  name: string;
  age: number;
  role: string;
};

type Person = User | Admin;
```

## Function Signature
```typescript
type PersonType = 'user' | 'admin';

type Criteria<T> = Partial<Omit<T, 'type'>>;

function filterPersons<T extends PersonType>(
  personType: T,
  criteria: Criteria<T extends 'user' ? User : Admin>,
): (T extends 'user' ? User : Admin)[];
```

## Usage
### Sample Data
```typescript
const persons: Person[] = [
  { type: 'user', name: 'Alice', age: 25, email: 'alice@example.com' },
  { type: 'admin', name: 'Bob', age: 40, role: 'superadmin' },
  { type: 'user', name: 'Charlie', age: 30, email: 'charlie@example.com' },
];
```

### Filtering Users
```typescript
const users = filterPersons('user', { age: 25 }); // Returns User[]
console.log(users);
```

### Filtering Admins
```typescript
const admins = filterPersons('admin', { role: 'superadmin' }); // Returns Admin[]
console.log(admins);
```

## Installation and Execution
1. Install dependencies:
   ```sh
   npm install -g ts-node typescript
   ```
2. Run the script using:
   ```sh
   npx ts-node your-file.ts
   ```
