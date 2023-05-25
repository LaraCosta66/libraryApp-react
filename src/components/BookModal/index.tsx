import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container, ContentBox, ReadboxContainer } from "./styles";
import { FormEvent, useState } from "react";
import { CreateBook } from "../BookComponent";

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function BookModal({ isOpen, onRequestClose }: BookModalProps) {
  const {createBook} = CreateBook();
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("read");

   function handleCreateNewBook(event: FormEvent) {
    event.preventDefault();
    createBook({
      title,
      pages,
      author,
      type,
    })
    setTitle('');
    setPages(0);
    setAuthor('');
    setType('read');
    onRequestClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewBook}>
        <h2>Register your book</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={event => setAuthor(event.target.value)}
        />
        <input
          type="number"
          placeholder="pages"
          value={pages}
          onChange={event => setPages(Number(event.target.value))}
        />
        <ReadboxContainer>
        <ContentBox  type="button"
            isActive={ type === "read"}
            activeColor="green"
            onClick={() => {
              setType("read");
            }}
            >
            <span>Read</span>
            </ContentBox>

        <ContentBox type="button"
            isActive={type === "unread"}
            activeColor="red"
            onClick={() => {
              setType("unread");
            }}
            >
            <span>Unread</span>
            </ContentBox>
        </ReadboxContainer>
        <button type="submit" onClick={()=> console.log("clicou")}>Add book to library</button>
      </Container>
    </Modal>
  );

}