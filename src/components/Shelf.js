import React from "react"
import Book from "./Book"

const Shelf = ({ shelfTitle, books, loading, error }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        {loading ? (
          <div>
            <h6>Loading!</h6>
          </div>
        ) : error ? (
          <div>
            <h6>Loading!</h6>
          </div>
        ) : (
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  key={book.id}
                  title={book.title}
                  bookAuthor={book.author}
                  backgroundImage={book.imageLinks.smallThumbnail}
                />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  )
}

export default Shelf
