// Exercise #3 Debugging

// Start coding here
const employee = {
  name: "John Doe",
  age: 18,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    states: "Stateville",
    country: "Countryland",
    postalCode: "12345",
  },
};

console.log("Employee Name: " + employee.name);
console.log("Employee Age: " + employee.age);
console.log(
  "Employee Address: " +
    employee.address.street +
    ", " +
    employee.address.city +
    ", " +
    employee.address.states +
    ", " +
    employee.address.country +
    " " +
    employee.address.postalCode
);

// แก้ไขบรรทัดที่ 16 employees.name เป็น employee.name
// แก้ไขบรรทัดที่ 24 employee.address.state เป็น employee.address.states
// แก้ไขบรรทัดที่ 28 employee.adress.postalCode เป็น employee.address.postalCode
