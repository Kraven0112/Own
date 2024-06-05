//seal() and freeze() are only for objects

//Using seal() for object
// It helps to modify existing property but prevents from deletion and addition of properties
const fruit={
    name:"Orange",
    quantity:"20kg",
    pricePerKg:100,
    totalAmt:2000
}
Object.seal(fruit)

//modification ---- this works properly
fruit.name="Apple" 
fruit.pricePerKg=150
fruit.totalAmt=3000

//Addition----this will not work-no changes in fruit object
fruit.condtition="fresh" 

// deletion of prperties ---- no changes in object
delete fruit.name