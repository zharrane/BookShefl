import React, { useState, useEffect } from "react"
import "./App.css"
import Shelf from "./components/Shelf"
import { Link } from "react-router-dom"
import { useBooksFetch } from "./hooks/useBooksFetch"

const App = () => {
  const { state, loading, error } = useBooksFetch()
  const shelves = [
    {
      id: 1,
      loading,
      error,
      shelfTitle: "Currently reading",
      books: state.results.filter((book) => book.shelf === "currentlyReading"),
    },
    {
      id: 2,
      loading,
      error,
      shelfTitle: "Want to read",
      books: state.results.filter((book) => book.shelf === "wantToRead"),
    },
    {
      id: 3,
      loading,
      error,
      shelfTitle: "Read",
      books: state.results.filter((book) => book.shelf === "read"),
    },
  ]
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
                loading={shelf.loading}
                error={shelf.error}
                shelfTitle={shelf.shelfTitle}
                books={shelf.books}
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
