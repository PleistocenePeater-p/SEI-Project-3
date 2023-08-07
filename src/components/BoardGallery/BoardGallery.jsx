import {Card} from 'semantic-ui-react'
import PostBoard from '../PostBoard/PostBoard'



export default function BoardGallery({boards, user, bookmark, removeBookmark}){

    const postBoards = boards.map((board) => {
        return <PostBoard board={board} key={board._id} user={user} bookmark={bookmark} removeBookmark={removeBookmark}/> 
    })

    return (
       <Card.Group>
        {postBoards}
       </Card.Group>
    )
}