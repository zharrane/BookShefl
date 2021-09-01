import React from "react"
import * as BooksAPI from "./BooksAPI"
import "./App.css"
import Shelf from "./components/Shelf"
import { Link } from "react-router-dom"

const BooksApp = () => {
  const shelves = [
    { id: 1, title: "Currently reading", books: [] },
    { id: 2, title: "Want to read", books: [] },
    { id: 3, title: "Read", books: [] },
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
  const all = async () => {
    // await console.log(BooksAPI.getAll())
    // await console.log(BooksAPI.search("Lord"))
    // await console.log(BooksAPI.search("1773"))
  }

  console.log(BooksAPI.search("iOS"))
  all()
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => {
              return (
                <Shelf
                  key={shelf.id}
                  title={shelf.title}
                  books={[
                    { title: "Daci", author: "salah" },
                    { title: "Daci", author: "salah" },
                    { title: "Daci", author: "salah" },
                  ]}
                />
              )
            })}
          </div>
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

export default BooksApp
