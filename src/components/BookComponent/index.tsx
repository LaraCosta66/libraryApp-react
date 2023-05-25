import { useBooks } from "../../hooks/useBooks";
import { Container } from "./styles";
import { FormEvent } from "react";
import readCheckImg from "../../assets/read-check.svg";
import unreadImg from "../../assets/unread.svg";

export function Book() {
  const { books } = useBooks();
  function removeBook(event: FormEvent) {
    const element = event.currentTarget.parentElement;
    element.remove();
  }
  return (
    <Container>
      {books.map((book) => (
        <div className="containerBook" key={book.id}>
          {book.type === "Read" ? (
            <div className="type">
              <img src={readCheckImg} alt="icone" /> {book.type}
            </div>
          ) : (
            <div className="type">
              <img src={unreadImg} alt="icone" />
              {book.type}
            </div>
          )}
          <div>
            <p><b>Title:</b> {book.title}</p>
          </div>
          <div>
            <p><b>Author:</b> {book.author}</p>
          </div>
          <div>
            <p><b>Pages:</b> {book.pages}</p>
          </div>
          <button className="removeBtn" onClick={removeBook}>
            Remove book
          </button>
        </div>
      ))}
    </Container>
  );
}
