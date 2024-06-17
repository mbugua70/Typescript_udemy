const person: {
    name: string,
    age: number
} = {
 name: "Mbugua",
 age: 32
}

console.log(person.name)

// nested objects

const car: {
    id: string,
    price: number;
    tags: string[];
    role: [number, string]
    details: {
      title: string;
      description: string;

    }
} = {
    id: "jfld2534lsdf",
    price: 200000,
    tags: ["john", "mary", "cornel"],
    role: [1, "melan"],
    details: {
        title: "volkswagon",
        description: "The model is 2021"
    }
}

console.log(car.details)
console.log(car.tags[2]);

// enum

enum Role {ADMIN, AUTHOR, READ_ONLY}

const person_two = {
 name: "Mbugua",
 age: 32,
 role: Role.ADMIN
}

console.log(person_two.role);