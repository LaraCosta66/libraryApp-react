import { Book } from '../BookComponent'
import {Container} from './styles'


export function Bookshelf() {

    return(
       
       
        <Container>
             <h2>Books:</h2>
            <Book />
        </Container>
    
    )
}
