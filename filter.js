var persons = [
    { type: 'user', name: 'Alice', age: 25, email: 'alice@example.com' },
    { type: 'admin', name: 'Bob', age: 40, role: 'superadmin' },
    { type: 'user', name: 'Charlie', age: 30, email: 'charlie@example.com' },
];
function filterPersons(personType, criteria) {
    return persons.filter(function (person) {
        return person.type === personType &&
            Object.entries(criteria).every(function (_a) {
                var key = _a[0], value = _a[1];
                return person[key] === value;
            });
    });
}
// Usage examples:
var users = filterPersons('user', { age: 25 }); // Returns User[]
var admins = filterPersons('admin', { role: 'superadmin' }); // Returns Admin[]
console.log(users);
console.log(admins);
