import React from "react"
import NoImage from "../images/no_image.jpg"
const Book = ({ title = "", bookAuthor = "", backgroundImage = NoImage }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{bookAuthor}</div>
    </div>
  )
}

export default Book
