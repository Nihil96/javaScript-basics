## Домашна 4

### Задача 1.

Од следнава низа од објекти:

```
books = [
  { title: "Book 1", author: "Author A", year: 2000 },
  { title: "Book 2", author: "Author B", year: 2010 },
  { title: "Book 3", author: "Author C", year: 2020 },
]
```

- Да се искористи методот forEach() за итерирање низ низата книги и испечатете го насловот и авторот на секоја книга во конзолата.
- Да се искористи методот find() за да се најде првата книга издадена после 2000та година.

### Задача 2.

Даден е следниот објект:

```
person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["Reading", "Traveling", "Cooking"],
}
```

а. Да се креира уште еден објект кој што ќе се вика additionalInfo и ќе ги содржи својствата:

- еmail(string)
- phone(string)
- education(object) кој што ќе ги содржи следниве својства:
  - degree(string)
  - major(string)

Oткако ќе го креирате овој објект, на крај употребете го spread операторот за да ги споите двата објекти во еден. Да се испечати резултатот во конзола.

б. За следниот даден објект:

```
user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
}
```

Да се употреби деструктурирање(destructuring) за да се извлечат следниве информации од објектот во променливи:

- Својството username
- Својствата firstName and lastName од fullName
- Својството email од contact
- home address (првиот елемент од addresses низата) во променливи: homeStreet, homeCity, homeState и homeZip.
- work address (вториот елемент од addresses низата) во променливи: workStreet, workCity, workState и workZip.

На крај, да се испечатат вредностите на променливите во конзола.

### Задача 3.

За следнава низа од држави:

```
const countries = [
"Albania",
"Bolivia",
"Canada",
"Denmark",
"Ethiopia",
"Finland",
"Germany",
"Hungary",
"Ireland",
"Japan",
"Kenya",
]
```

а. Испечатете ги сите земји што имаат „land“ во своето име и направете ги со големи букви.

б. Испечатете ги сите земји што завршуваат со 'ia' и нивното име е поголемо од 7 букви.

### Задача 4.

Во продолжение е дадена следнава низа од објекти:

```
let zooAnimals = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Zena",
        sex: "female",
        age: 12,
      },
      {
        name: "Maxwell",
        sex: "male",
        age: 15,
      },
      {
        name: "Faustino",
        sex: "male",
        age: 7,
      },
      {
        name: "Dee",
        sex: "female",
        age: 14,
      },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Shu",
        sex: "female",
        age: 19,
      },
      {
        name: "Esther",
        sex: "female",
        age: 17,
      },
    ],
  },
  {
    id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    name: "bears",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Hiram",
        sex: "male",
        age: 4,
      },
      {
        name: "Edwardo",
        sex: "male",
        age: 4,
      },
      {
        name: "Milan",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
    name: "penguins",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Joe",
        sex: "male",
        age: 10,
      },
      {
        name: "Tad",
        sex: "male",
        age: 12,
      },
      {
        name: "Keri",
        sex: "female",
        age: 2,
      },
      {
        name: "Nicholas",
        sex: "male",
        age: 2,
      },
    ],
  },
  {
    id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    name: "otters",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Neville",
        sex: "male",
        age: 9,
      },
      {
        name: "Lloyd",
        sex: "male",
        age: 8,
      },
      {
        name: "Mercedes",
        sex: "female",
        age: 9,
      },
      {
        name: "Margherita",
        sex: "female",
        age: 10,
      },
    ],
  },
  {
    id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
    name: "frogs",
    popularity: 2,
    location: "SW",
    residents: [
      {
        name: "Cathey",
        sex: "female",
        age: 3,
      },
      {
        name: "Annice",
        sex: "female",
        age: 2,
      },
    ],
  },
  {
    id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    name: "snakes",
    popularity: 3,
    location: "SW",
    residents: [
      {
        name: "Paulette",
        sex: "female",
        age: 5,
      },
      {
        name: "Bill",
        sex: "male",
        age: 6,
      },
    ],
  },
  {
    id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    name: "elephants",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Ilana",
        sex: "female",
        age: 11,
      },
      {
        name: "Orval",
        sex: "male",
        age: 15,
      },
      {
        name: "Bea",
        sex: "female",
        age: 12,
      },
      {
        name: "Jefferson",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
    name: "giraffes",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Gracia",
        sex: "female",
        age: 11,
      },
      {
        name: "Antone",
        sex: "male",
        age: 9,
      },
      {
        name: "Vicky",
        sex: "female",
        age: 12,
      },
      {
        name: "Clay",
        sex: "male",
        age: 4,
      },
      {
        name: "Arron",
        sex: "male",
        age: 7,
      },
      {
        name: "Bernard",
        sex: "male",
        age: 6,
      },
    ],
  },
]
```

Да се најдат решенија на барањата подолу:

а. испечатете ги имињата на животните кои имаат популарност поголема од 4

б. отпечатете го името на најстариот слон

в. испечатете ги сите имиња на пингвини кои се помали од 10 години и се женки

г. најдете ја групата животни чие име има најмногу букви и потоа испечатете го збирот на возраста на жителите

д. најдете која група на животни има најмал број жители и најголем број жители, потоа направете нова низа која ги содржи сите имиња на жителите

### Задача 5.

Напишете функција наречена checkGrade која зема нумеричка оценка како аргумент и враќа соодветна оценка за букви. Оценките на буквите треба да се засноваат на следната скала:

- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: 0-59

Да се искористи тернарниот оператор(ternary operator) во функцијата.
