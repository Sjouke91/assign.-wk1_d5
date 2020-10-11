const data = require('./me.json');
const brands = require('./names.json');


console.log(brands.carbrands.german[1]);

const profile = {
    "firstName": "Sjouke",
    "lastName": "Bosma",
    "age": 28,
    "City": "Amsterdam",
    "hobbies": [
      "cycling",
      "swimming",
      "music",
      "coding"
    ]
  }

const json = JSON.stringify(profile, null, 2);

console.log(json);

const parse = JSON.parse(json);

console.log(parse);