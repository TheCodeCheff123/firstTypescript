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
  
  const persons: Person[] = [
    { type: 'user', name: 'Alice', age: 25, email: 'alice@example.com' },
    { type: 'admin', name: 'Bob', age: 40, role: 'superadmin' },
    { type: 'user', name: 'Charlie', age: 30, email: 'charlie@example.com' },
  ];
  
  type PersonType = 'user' | 'admin';
  
  // Utility type to omit the `type` field from a given type
  type Criteria<T> = Partial<Omit<T, 'type'>>;
  
  function filterPersons<T extends PersonType>(
    personType: T,
    criteria: Criteria<T extends 'user' ? User : Admin>,
  ): (T extends 'user' ? User : Admin)[] {
    return persons.filter(
      (person): person is T extends 'user' ? User : Admin =>
        person.type === personType &&
        Object.entries(criteria).every(([key, value]) => (person as any)[key] === value),
    );
  }
  
  // Usage examples:
  
  const users = filterPersons('user', { age: 25 }); // Returns User[]
  const admins = filterPersons('admin', { role: 'superadmin' }); // Returns Admin[]
  
  console.log(users);
  console.log(admins);
  