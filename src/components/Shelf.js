import React from "react"
import Book from "./Book"

const Shelf = ({ shelfTitle, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                key={book.id}
                title={book.title}
                bookAuthor={book.author}
                backgroundImage={book.backgroundImage}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Shelf
