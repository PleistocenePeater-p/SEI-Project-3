import {Card} from 'semantic-ui-react'
import PostBoard from '../PostBoard/PostBoard'



export default function BoardGallery({boards, user}){

    const postBoards = boards.map((board) => {
        return <PostBoard board={board} key={board._id} user={user}/> 
    })

    return (
       <Card.Group>
        {postBoards}
       </Card.Group>
    )
}