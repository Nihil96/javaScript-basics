// JSON

const personObj = {
  name: "John",
  surname: "Doe",
  age: 32,
  isStudent: false,
}

console.log(personObj)

// JSON.stringify()
const jsonString = JSON.stringify(personObj)
console.log(jsonString)

// JSON.parse()
const parsedData = JSON.parse(jsonString)
console.log(parsedData.isStudent)

// FETCH Method
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const emailContainer = document.getElementById("email-container")

      data.forEach((user) => {
        const emailParagraph = document.createElement("p")
        emailParagraph.textContent = user.email
        emailContainer.appendChild(emailParagraph)
      })
    })
    .catch((error) => console.log(error))
}

// fetchUsers()

// GET Method using try/catch async/await
const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    const postsTitle = document.getElementById("posts-title")

    data.forEach((post) => {
      const title = document.createElement("h3")
      title.textContent = post.title
      postsTitle.appendChild(title)
    })
  } catch (error) {
    console.log(error)
  }
}

// fetchPosts()

// POST Method
const postData = () => {
  const newPost = {
    userId: 11,
    title: "Test title",
    body: "Random post body ",
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

postData()
