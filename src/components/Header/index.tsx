import { Container, Content } from "./styles";
interface HeaderProps {
    onOpenBookModal: () => void;
  }
export function Header({onOpenBookModal}:HeaderProps) {
  return (
    <Container>
      <Content>
        <p>My Library</p>
        <button type="button" onClick={onOpenBookModal}>Add a book</button>
      </Content>
    </Container>
  );
}
