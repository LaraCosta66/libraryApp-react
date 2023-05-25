import { useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { BookModal } from "./components/BookModal";
import Modal from "react-modal";
import { Bookshelf } from "./components/Bookshelf";
import {BooksProvider} from "./hooks/useBooks";

Modal.setAppElement("#root");

export function App() {
  const [isBookModalOpen, setIsbookModalOpen] = useState(false);

  function handleOpenBookModal() {
    setIsbookModalOpen(true);
  }
  function handleCloseBookModal() {
    setIsbookModalOpen(false);
  }
  return (
    <BooksProvider>
      <Header onOpenBookModal={handleOpenBookModal} />
      <BookModal isOpen={isBookModalOpen} onRequestClose={handleCloseBookModal}/>
      <Bookshelf />
      <GlobalStyle/>
    </BooksProvider>
  );
}

 