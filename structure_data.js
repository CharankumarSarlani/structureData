const people = [
  {
    name: "Rahul",
    age: 28, //default age
    city: "Pune",

    qualification: [{ major: "computer science" }],
    profession: "software engineer",
    isEmployed: true,

    hobbies: [
      {
        title: "playing",
        details: "chess",
      },
      {
        title: "gardening",
        details: "does when he's not busy coding",
      },
    ],

    vehicles: [
      {
        type: "car",
        company: "maruthi",
        model: "swift",
      },
    ],
    preferredTransportation: [],

    pets: [
      {
        type: "dog",
        breed: "golden retriever",
        name: "Max",
        age: 4,
        isFullyVaccinated: true,
        favouriteActivities: ["playing fetch in the park"],
        abilities: "",
      },
    ],
  },

  {
    name: "Ananya",
    age: 30,
    city: "Bangalore",

    qualification: [{ major: "computer science" }, { minor: "graphic design" }],
    profession: "",
    isEmployed: false,

    hobbies: [
      {
        title: "cooking",
        details: "Italian cuisine",
      },
    ],

    vehicles: [],
    preferredTransportation: ["public transport"],

    pets: [
      {
        type: "parrot",
        breed: "",
        name: "Kiwi",
        age: 0,
        isFullyVaccinated: true,
        favouriteActivities: ["mimics voices"],
        abilities: ["knows over 20 phrases"],
      },
    ],
  },

  {
    name: "Ramesh",
    age: 45,
    city: "Jaipur",

    qualification: [{ major: "computer science" }],
    profession: "business owner",
    isEmployed: true,

    hobbies: [
      {
        title: "gardening",
        details: "rose gardening",
      },
      {
        title: "book reading",
        details: "historical fiction",
      },
    ],

    vehicles: [],
    preferredTransportation: [],

    pets: [
      {
        type: "cat",
        breed: "Persian cat",
        name: "Bella",
        age: 3,
        isFullyVaccinated: true,
        favouriteActivities: ["love lounging in the sun"],
        abilities: [],
      },
      {
        type: "cat",
        breed: "Persian cat",
        name: "Leo",
        age: 3,
        isFullyVaccinated: true,
        favouriteActivities: ["love lounging in the sun"],
        abilities: [],
      },
    ],
  },

  {
    name: "Kavya",
    age: 28,
    city: "Chennai",

    profession: "professional dancer",
    qualification: [],
    isEmployed: false,

    hobbies: [
      {
        title: "watching",
        details: "sci-fi shows",
      },
      {
        title: "book reading",
        details: "modern fantasy novels",
      },
    ],

    vehicles: [],
    preferredTransportation: [],

    pets: [
      {
        type: "rabbit",
        breed: "",
        name: "Snowy",
        age: 2,
        isFullyVaccinated: true,
        favouriteActivities: [
          "enjoys hopping around her backyard",
          "nibbling on carrots",
        ],
        abilities: [],
      },
    ],
  },
];

//-----------------------------------
//1. How many individuals are currently employed?
const countEmployedIndividuals = (data) =>
  data.filter((person) => person.isEmployed).length;

console.log("1. How many individuals are currently employed?");
console.log("ANS:", countEmployedIndividuals(people));

//2. How many people own a car?
const isCar = (vehicles) => vehicles.type === "car";

const countCarOwners = (data) =>
  data.flatMap((person) => person.vehicles.filter(isCar)).length;

console.log("2. How many people own a car?");
console.log("ANS:", countCarOwners(people));

//3. How many pets are fully vaccinated?
const sum = (num1, num2) => num1 + num2;

const noOfVaccinatedPetsOf = ({ pets }) =>
  pets.filter((pet) => pet.isFullyVaccinated).length;

const countVaccinatedPets = (data) =>
  data.map(noOfVaccinatedPetsOf).reduce(sum, 0);

console.log("3. How many pets are fully vaccinated?");
console.log("ANS", countVaccinatedPets(people));

//4. What are the names of all the pets, and what type of animal is each?
const getPetNamesAndTypes = function (data) {
  return data
    .flatMap((person) => person.pets)
    .map(({ name, type }) => ({ name, type }));
};

console.log(
  "4. What are the names of all the pets, and what type of animal is each?"
);
console.log("ANS:", getPetNamesAndTypes(people));

//5. Which cities do the individuals live in?
const cities = (data) => data.map((person) => person.city);

console.log("5. Which cities do the individuals live in?");
console.log("ANS:", cities(people));

//6. How many hobbies are shared across the group? What are they?
//remove duplicates

const getHobbiesAndCount = function (data) {
  const hobbies = data.flatMap((person) => person.hobbies);

  const titlesOf = hobbies
    .map(({ title }) => title)
    .filter((title, index, array) => array.indexOf(title) === index);

  return { hobbies: titlesOf, noOfHobbies: titlesOf.length };
};

console.log("6. How many hobbies are shared across the group? What are they?");
console.log("ANS:", getHobbiesAndCount(people));

//7. How many pets belong to people who are currently unemployed?
const noOfPetsWithUnemployedPeople = function (data) {
  return data
    .filter((person) => !person.isEmployed)
    .flatMap((person) => person.pets).length;
};

console.log("7. How many pets belong to people who are currently unemployed?");
console.log("ANS:", noOfPetsWithUnemployedPeople(people));

//8. What is the average age of the individuals mentioned in the passage?
const averageAge = function (data) {
  const totalAges = data.reduce((acc, person) => acc + person.age, 0);
  return totalAges / data.length;
};

console.log(
  "8. What is the average age of the individuals mentioned in the passage?"
);
console.log("ANS:", averageAge(people));

//9. How many individuals have studied computer science, and how many of them have pets?
const isCSStudent = ({ qualification }) =>
  qualification.some(({ major }) => major.includes("computer science"));

const hasPets = ({ pets }) => pets.length > 0;

const studiedCSAndHavePets = (data) =>
  data.filter((person) => isCSStudent(person) && hasPets(person)).length;

console.log(
  "9. How many individuals have studied computer science, and how many of them have pets?"
);
console.log("ANS", studiedCSAndHavePets(people));

//10. How many individuals own more than one pet?
const countPeopleWithMoreThanOnePet = (data) =>
  data.filter(({ pets }) => pets.length > 1).length;

console.log("10. How many individuals own more than one pet?");
console.log("ANS", countPeopleWithMoreThanOnePet(people));

//11. Which pets are associated with specific favorite activities?
const petsWithFavouriteActivites = function (data) {
  const pets = data.flatMap((person) => person.pets);

  return pets.map(({ name, favouriteActivities }) => ({
    name,
    favouriteActivities,
  }));
};

console.log("11. Which pets are associated with specific favorite activities?");
console.log("ANS:", petsWithFavouriteActivites(people));

//12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
const isFromBangaloreOrChennai = (person) =>
  person.city === "Bangalore" || person.city === "Chennai";

const fetchPetsInBangaloreOrChennai = (data) =>
  data
    .filter(isFromBangaloreOrChennai)
    .flatMap((person) => person.pets)
    .map((pet) => pet.name);

console.log(
  "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?"
);
console.log("ANS", fetchPetsInBangaloreOrChennai(people));

//13. How many vaccinated pets belong to people who do not own a car?
const vaccinatedPetsOfPeopleWithoutCar = function (data) {
  const peopleWithoutCar = data.filter((person) =>
    person.vehicles.every((vehicle) => {
      return !vehicle.type.includes("car");
    })
  );

  return peopleWithoutCar.flatMap((person) =>
    person.pets.filter(({ isFullyVaccinated }) => isFullyVaccinated)
  ).length;
};

console.log(
  "13. How many vaccinated pets belong to people who do not own a car?"
);
console.log("ANS", vaccinatedPetsOfPeopleWithoutCar(people));

//14. What is the most common type of pet among the group?
const commonPetType = function (data) {
  const pets = data.flatMap((person) => person.pets);

  const petNamesAndOccurances = pets.reduce((typeOccurances, pet) => {
    typeOccurances[pet.type] = (typeOccurances[pet.type] || 0) + 1;
    return typeOccurances;
  }, {});

  return Object.entries(petNamesAndOccurances).reduce((commonPet, currentPet) =>
    commonPet[1] > currentPet[1] ? commonPet : currentPet
  )[0];
};

console.log("14. What is the most common type of pet among the group?");
console.log("ANS", commonPetType(people));

//15. How many individuals have more than two hobbies?
const countPeopleWithMoreThanTwoHobbies = (data) =>
  data.filter((person) => person.hobbies.length > 2).length;

console.log("15. How many individuals have more than two hobbies?");
console.log("ANS", countPeopleWithMoreThanTwoHobbies(people));

//17. Which pet is the youngest, and what is its name?
const youngestPet = function (data) {
  const petDetails = data.flatMap((person) => person.pets);

  const pet = petDetails.reduce((youngestPet, currentpet) =>
    currentpet.age < youngestPet.age ? currentpet : youngestPet
  );

  return { type: pet.type, name: pet.name };
};

console.log("17. Which pet is the youngest, and what is its name?");
console.log("ANS", youngestPet(people));

//18. What types of books are mentioned as interests, and who reads them?
const bookReadersAndTypesOfBooks = function (data) {
  return data.flatMap((person) =>
    person.hobbies
      .filter(({ title }) => title === "book reading")
      .map(({ details }) => ({
        person: person.name,
        bookType: details,
      }))
  );
};

console.log(
  "18. What types of books are mentioned as interests, and who reads them?"
);
console.log("ANS", bookReadersAndTypesOfBooks(people));

//19. How many individuals live in cities starting with the letter "B"?
const countIndividualsInCitiesStartsWithB = (data) =>
  data.filter((person) => person.city.startsWith("B")).length;

console.log(
  "19. How many individuals live in cities starting with the letter 'B' ? "
);
console.log("ANS:", countIndividualsInCitiesStartsWithB(people));

//20. Which individuals do not own any pets?
const peopleWithoutPets = (data) =>
  data.filter((person) => person.pets.length < 1).map((person) => person.name);

console.log("20. Which individuals do not own any pets?");
console.log("ANS:", peopleWithoutPets(people));
