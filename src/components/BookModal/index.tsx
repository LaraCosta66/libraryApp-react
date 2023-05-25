import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container, ContentBox, ReadboxContainer } from "./styles";
import { FormEvent, useState } from "react";
import { useBooks } from "../../hooks/useBooks";

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function BookModal({ isOpen, onRequestClose }: BookModalProps) {
  const { createNewBook } = useBooks();
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("Read");
  async function handleCreateNewBook(event: FormEvent) {
    event.preventDefault();
    await createNewBook({
      title,
      pages,
      author,
      type,
    });
    setTitle("");
    setPages(0);
    setAuthor("");
    setType("Read");
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
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <input
          type="number"
          placeholder="pages"
          value={pages}
          onChange={(event) => setPages(Number(event.target.value))}
        />
        <ReadboxContainer>
          <ContentBox
            type="button"
            isActive={type === "Read"}
            activeColor="green"
            onClick={() => {
              setType("Read");
            }}
          >
            <span>Read</span>
          </ContentBox>

          <ContentBox
            type="button"
            isActive={type === "Unread"}
            activeColor="red"
            onClick={() => {
              setType("Unread");
            }}
          >
            <span>Unread</span>
          </ContentBox>
        </ReadboxContainer>
        <button type="submit" >
          Add book to library
        </button>
      </Container>
    </Modal>
  );
}
