import { api } from "../services/api";
import { ReactNode, createContext, useContext, useEffect, useState} from "react";

interface Book {
    id: number;
    title: string;
    type: string;
    author: string;
    pages: number;
    createdAt: string;
  }
  interface BooksProviderProps{
    children: ReactNode;
}
type BookInput = Omit<Book, 'id' | 'createdAt'>
  interface BooksContextData{
    books: Book[];
    createNewBook:(Book:BookInput) => Promise<void>
 }
 const BooksContext = createContext<BooksContextData>({} as BooksContextData);

 export function BooksProvider({children}:BooksProviderProps){
    const [books, setBooks] =useState<Book[]>([]);

    useEffect(() => {
        api.get("/books")
          .then(response => setBooks(response.data.books));
      }, []);
      
      async function createNewBook(bookInput:BookInput){
        const response = await api.post("/books", {
          ...bookInput, 
          createdAt: new Date(),
        })
          const {book} = response.data;
    
          setBooks([
            ...books,
            book,
          ]);
          
        }
        return(
          <BooksContext.Provider value={{books, createNewBook}}>
            {children}
          </BooksContext.Provider>
        )
      
 }


 export function useBooks(){
    const context = useContext(BooksContext);
    return context
  }