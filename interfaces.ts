// Interfaces: Creates a new type, describing the
// property names and values types of an object
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name};`
  }
};

const user = {
  name: 'Duy Anh',
  age: 24,
  student: true,
  summary(): string {
    return `My name is ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(user);

// General Strategy for Reusable Code in TS
// 1. Create functions that accept arguments that are typed with interfaces
// 2. Objects/classes can decide to 'implement' a given interface to work with a function