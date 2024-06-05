//freeze() methos is also for only object

const animal ={
    name:"Cat",
    color:"White",
    behavior:"friendly",
    condition:"new born"
}
Object.freeze(animal)

//Addition----- no chnages in object
animal.bite="No"
animal.size="medium"

//Modification of properties ---- no changes in object
animal.name="Dog"
animal.color="Black"

//deletion of properties-- no changes in object
delete animal.name
delete animal.color