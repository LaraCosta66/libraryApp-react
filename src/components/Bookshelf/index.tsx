import { CreateBook } from '../BookComponent'
import {Container} from './styles'


export function Bookshelf() {

    return(
        <Container>
            <h3>Books:</h3>
            <CreateBook title={'Harry Potter'} author={'JK Rowling'} pages={200} type={'Lido'}/>
        </Container>
        
    )
}
