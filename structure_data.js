const people = [
  {
    name: "Rahul",
    age: 30, //default age
    city: "Pune",

    profession: "software engineer",
    qualification: "computer science",
    isEmployed: true,

    hobbies: ["chess", "gardening"],
    booksOfInterest: [],

    hasCar: true,
    preferredTransportation: [],

    pets: [
      {
        type: "dog",
        breed: "golden retriever",
        name: "Max",
        age: 4,
        isFullyVaccinated: true,
        favouriteActivities: ["playing fetch in the park"],
        abilities: [],
      },
    ],
  },

  {
    name: "Ananya",
    age: 30,
    city: "Bangalore",

    profession: "",
    qualification: "computer science",
    isEmployed: false,

    hobbies: ["cooking"],
    booksOfInterest: [],

    hasCar: false,
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

    profession: "business owner",
    qualification: "computer science",
    isEmployed: true,

    hobbies: ["gardening"],
    booksOfInterest: ["historical fiction"],

    hasCar: false,
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

    profession: "", //professional dancer
    qualification: "", //not mentioned as default
    isEmployed: false,

    hobbies: ["watching sci-fi shows"],
    booksOfInterest: ["modern fantasy novels"],

    hasCar: false,
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
const countEmployed = function (data) {
  return data.filter((person) => person.isEmployed).length;
};

//2. How many people own a car?
const countCars = function (data) {
  return data.filter((person) => person.hasCar).length;
};

//3. How many pets are fully vaccinated?
const sum = (num1, num2) => num1 + num2;

const countVaccinatedPetsForPerson = function ({ pets }) {
  return pets.filter((pet) => pet.isFullyVaccinated).length;
};

const countVaccinatedPets = function (data) {
  return data.map(countVaccinatedPetsForPerson).reduce(sum, 0);
};

//4. What are the names of all the pets, and what type of animal is each?
const pets = function (data) {
  const pets = data.flatMap((person) => person.pets);
  return pets.map(({ name, age }) => ({ name, age }));
};

//5. Which cities do the individuals live in?
//can i return object if there's only one key
const cities = function (data) {
  return data.map((person) => person.city);
};

//6. How many hobbies are shared across the group? What are they?
//give as an object
const getHobbiesAndCount = function (data) {
  const hobbies = data.flatMap((person) => person.hobbies);
  const noOfHobbies = hobbies.length;

  return { hobbies, noOfHobbies };
};

//7. How many pets belong to people who are currently unemployed?
const petsWithUnemployedPeople = function (data) {
  const unemployed = data.filter((person) => !person.isEmployed);
  return unemployed.flatMap((person) => person.pets).length;
};

//8. What is the average age of the individuals mentioned in the passage?
const averageAge = function (data) {
  const totalAges = data.reduce((acc, person) => acc + person.age, 0);
  return totalAges / data.length;
};

//9. How many individuals have studied computer science, and how many of them have pets?
const studiedCSAndHavePets = function (data) {
  const studiedCS = data.filter(
    (person) => person.qualification === "computer science"
  );

  const havePets = studiedCS.filter((person) => person.pets.length > 0).length;

  return { CSPeople: studiedCS.length, pets: havePets };
};

//10. How many individuals own more than one pet?
const countPeopleWithMoreThanOnePet = function (data) {
  return data.filter(({ pets }) => pets.length > 1).length;
};

//11. Which pets are associated with specific favorite activities?
const petsWithFavouriteActivites = function (data) {
  const pets = data.flatMap((person) => person.pets);

  return pets.map(({ name, favouriteActivities }) => ({
    name,
    favouriteActivities,
  }));
};

//12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const fetchPetsInBangaloreOrChennai = function (data) {
  const people = data.filter(
    (person) => person.city === "Bangalore" || person.city === "Chennai"
  );

  const pets = people.flatMap((person) => person.pets);
  return pets.map((pet) => pet.name);
};

//13. How many vaccinated pets belong to people who do not own a car?
const vaccinatedPetsOfPeopleWithoutCar = function (data) {
  const peopleWithoutCar = data.filter((person) => !person.hasCar);
  const petsOf = peopleWithoutCar.flatMap((person) => person.pets);

  return petsOf.filter((pet) => pet.isFullyVaccinated).length;
};

//15. How many individuals have more than two hobbies?
const countPeopleWithMoreThanTwoHobbies = function (data) {
  return data.filter((person) => person.hobbies.length > 2).length;
};

//17. Which pet is the youngest, and what is its name?
const youngestPet = function (data) {
  const petDetails = data.flatMap((person) => person.pets);

  const pet = petDetails.reduce((youngestPet, currentpet) =>
    currentpet.age < youngestPet.age ? currentpet : youngestPet
  );

  return { type: pet.type, name: pet.name };
};

//18. What types of books are mentioned as interests, and who reads them?
const bookReadersAndTypesOfBooks = function (data) {
  const bookReaders = data.filter(
    (person) => person.booksOfInterest.length > 0
  );

  return bookReaders.map(({ name, booksOfInterest }) => ({
    name,
    booksOfInterest,
  }));
};

//19. How many individuals live in cities starting with the letter "B"?
const countIndividualsInCitiesStartsWithB = function (data) {
  return data.filter((person) => person.city.startsWith("B")).length;
};

//20. Which individuals do not own any pets?
const peopleWithoutPets = function (data) {
  const people = data.filter((person) => person.pets.length < 1);

  return people.map((person) => person.name);
};
