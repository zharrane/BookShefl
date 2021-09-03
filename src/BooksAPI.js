const api = "https://reactnd-books-api.udacity.com"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8)

const headers = {
  Accept: "application/json",
  Authorization: token,
}
/** GET METHOD */
// export const get = (bookId) =>
//   fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)
///////////////////
export const get = async (bookId) => {
  const res = await fetch(`${api}/books/${bookId}`, { headers })
  const book = await res.json()
  return book
}

// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then((res) => res.json())
//     .then((data) => data.books)
// /////////////////
// export const getAll = async () => {
//   const res = await fetch(`${api}/books`, { headers })
//   const result = await res.json()
//   const books = await result.books
//   return await books
// }
///////////////////////
export const getAll = async () => {
  const endpoint = `${api}/books`
  const result = await await (await fetch(endpoint, { headers })).json()
  console.log(result.books)
  return result.books
  // const res = await fetch(`${api}/books`, { headers })
  // const result = await res.json()
  // const books = await result.books
  // return await books
}

// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: "PUT",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ shelf }),
//   }).then((res) => res.json())
///////////////////
export const update = async (book, shelf) => {
  const res = fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  })
  const result = res.json()
  console.log(result)
  return result
}

// export const search = (query) =>
//   fetch(`${api}/search`, {
//     method: "POST",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//   })
//     .then((res) => res.json())
//     .then((data) => data.books)

export const search = async (query) => {
  const res = await fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
  const result = res.body
  // console.log(result)
  return result
}
