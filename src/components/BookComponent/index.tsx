import { Container } from "./styles";

interface BookProps {
  title: string;
  author: string;
  pages: number;
  type: string;
}
export function CreateBook({ title, author, pages,type }: BookProps) {
  return (
    <Container>
      <ul>
        <li><strong>Title: </strong> {title}</li>
        <li><strong>Author:</strong> {author}</li> 
        <li><strong>Pages:</strong> {pages}</li> 
        <li>{type}</li> 
      </ul>

      <button className="removeBtn">Remove book</button>
    </Container>
  );
}
