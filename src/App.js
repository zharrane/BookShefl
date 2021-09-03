import React, { useState, useEffect } from "react"
import * as BooksAPI from "./BooksAPI"
import "./App.css"
import Shelf from "./components/Shelf"
import { Link } from "react-router-dom"

const App = () => {
  const shelves = [
    { id: 1, shelfTitle: "Currently reading", books: [] },
    { id: 2, shelfTitle: "Want to read", books: [] },
    { id: 3, shelfTitle: "Read", books: [] },
  ]
  const [books, setBooks] = useState([])
  const [currentlyReading, setCurrentlyReading] = useState([])
  const [wantToRead, setWantToRead] = useState([])
  const [read, setRead] = useState([])
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false,
  // }
  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID)
  //   }
  //   BooksAPI.getAll()
  // }
  useEffect(() => {
    BooksAPI.getAll()
    let books = []
    const fetching = async () => {
      books = await BooksAPI.getAll()
    }

    console.log(books)
  }, [])

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => {
            return (
              <Shelf
                key={shelf.id}
                shelfTitle={shelf.shelfTitle}
                books={[
                  { title: "Daci", author: "salah" },
                  { title: "Daci", author: "salah" },
                  { title: "Daci", author: "salah" },
                ]}
              />
            )
          })}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
