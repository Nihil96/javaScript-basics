## Домашна 6

### Задача 1.

Даден ви е следниов html документ:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>List Manipulation</title>
  </head>
  <body>
    <ul>
      <li>Mercedes</li>
      <li>BMW</li>
      <li>Audi</li>
    </ul>
    <script></script>
  </body>
</html>
```

Да се направат сите елементи од листата во сина боја и потоа да се додаде марката “Ferrari” во листата.

### Задача 2.

Дадена ви е следната подредена листа од книги:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Book List</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <ol id="book-list">
      <li>The Great Gatsby</li>
      <li>To Kill a Mockingbird</li>
      <li>1984</li>
      <li>The Catcher in the Rye</li>
      <li>Animal Farm</li>
      <li>Brave New World</li>
      <li>Fahrenheit 451</li>
      <li>Lord of the Flies</li>
      <li>The Hobbit</li>
      <li>Harry Potter and the Sorcerer's Stone</li>
    </ol>
  </body>
</html>
```

а. Да се напише функција oddListElements која што ќе ја направи позадинската боја на непарните елементи во “lightblue”

б. Да се напише функција „changeBookTitle“ која ќе има три параметри:

- првиот параметар ќе биде „orderedList“ кој ќе прифаќа подредена html листа
- вториот параметар ќе биде „oldTitle“ што ќе биде некој наслов на веќе постоеча книга во листата
- третиот параметар ќе биде "newTitle" кој ќе биде замена за стариот наслов во листата

Кога ќе се повика оваа функција со овие параметри, треба да го најде стариот наслов(oldTitle) и да го замени со новиот наслов(newTitle) во листата.

Пример:
`changeBookTitle(bookList, "Lord of the Flies", "The Alchemist")`

Tреба да го замени насловот на книгата "Lord of the Flies" со новиот наслов "The Alchemist"

в. Да се напише функција „removeBook“, која ќе има два параметри:

- првиот ќе биде „orderedList“ кој ќе прифаќа подредена html листа
- вториот ќе биде „bookTitle“ кој ќе биде наслов на таа подредена HTML листа

Кога ќе се повика функцијата со соодветните параметри, треба да ја избрише книгата од подредената листа

Пример:
`removeBook(bookList, "The Catcher in the Rye")`

Треба да го избрише насловот "The Catcher in the Rye" од листата

### Задача 3.

Во продолжение ви е даден следниот html документ и низа од објекти која што содржи информации за квиз прашања:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Interactive Quiz</title>
  </head>
  <body>
    <div id="quiz-container">
      <!-- Quiz content will be dynamically generated here -->
    </div>
  </body>
</html>
```

```
const quizData = [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          correctAnswer: "Mars",
        },
        {
          question: "What is the largest mammal on Earth?",
          options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
          correctAnswer: "Blue Whale",
        },
        {
          question: "In which year did the Titanic sink?",
          options: ["1905", "1912", "1920", "1931"],
          correctAnswer: "1912",
        },
        {
          question: "Who wrote 'Romeo and Juliet'?",
          options: [
            "Charles Dickens",
            "Jane Austen",
            "William Shakespeare",
            "Mark Twain",
          ],
          correctAnswer: "William Shakespeare",
        },
      ]
```

Ваша задача ќе биде да направите квиз со прашања и понудени одговори базирани од низата погоре. Квизот треба да биде едноставен. Со помош на JavaScript потребно е да се прикажат прашањата и понудените одговори под секое прашање. На левата страна од секој од одговорите треба да има опција(radio button) се со цел да може да се избере само еден точен одговор. Стилизирање со CSS не е задолжително додека пак прашањата би требало да изгледаат отприлика вака:

<img width="1067" alt="image" src="https://github.com/Nihil96/javaScript-basics/assets/36340082/97e08303-82d2-4ac2-a2d2-d8c7c7bd2d8f">
