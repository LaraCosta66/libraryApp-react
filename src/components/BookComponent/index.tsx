import { useBooks } from "../../hooks/useBooks";
import { Container } from "./styles";

export function CreateBook() {
  const { books } = useBooks();
  return (
    <Container>
      {books.map((book) => (
        <div key={book.id}>
          <ul>
            <li>
              <strong>Title: </strong> {book.title}
            </li>
            <li>
              <strong>Author:</strong> {book.author}
            </li>
            <li>
              <strong>Pages:</strong> {book.pages}
            </li>
            <li>{book.type}</li>
          </ul>
          <button className="removeBtn">Remove book</button>
        </div>
      ))}
    </Container>
  );
}
