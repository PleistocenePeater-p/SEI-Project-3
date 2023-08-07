import { Card, Icon, Image } from "semantic-ui-react";
import * as bookmarkApi from '../../utils/bookmarkApi'

function PostBoard({user, board, bookmark, removeBookmark}) {
    const bookmarkIndex = board.bookmark.findIndex(board => board.username === user.username)
    const boardIndex = board._id
    const bookmarkColor = bookmarkIndex > -1 ? 'cyan' : 'gray';
    const clickHandler = bookmarkIndex > -1 ? () => removeBookmark(board.bookmark[bookmarkIndex]._id) : () => bookmark(board._id)
    console.log(user.username, "<---------------username")
    console.log(board.user.username, "<--------------board.user.username")
    console.log(board._id, "<---------------board._id")

return (
    <Card key={board._id}>
        <Card.Content>
            <Card.Description>{board.title}</Card.Description>
            <Card.Description>{board.caption}</Card.Description>
            </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon name={"bookmark"} size="large" color={bookmarkColor} onClick={clickHandler} />
        Bookmark
      </Card.Content>
    </Card>
    );
}

export default PostBoard;