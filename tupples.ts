const drink = {
  color: 'brown',
  carbonated: true,
  sugae: 40
};

// Type alias
type Drink = [string, boolean, number];

// Tuples
const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', true, 0];

// Tuples make use hard to understand the meaning of values
const carSpecs: [number, number] = [200, 3354];

// Should use object in this situation
const carStats = {
  horsepower: 400,
  weight: 3354
}