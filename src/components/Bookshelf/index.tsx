import { CreateBook } from '../BookComponent'
import {Container} from './styles'


const myLibrary = [
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      pages: 354,
      read: true,
    },
  ];
export function Bookshelf() {

    return(
        <Container>
            <h3>Books:</h3>
            <CreateBook title={'Harry Potter'} author={'JK Rowling'} pages={200} type={'Lido'}/>
        </Container>
        
    )
}
