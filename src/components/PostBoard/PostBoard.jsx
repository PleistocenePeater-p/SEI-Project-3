import { Card, Icon, Image } from "semantic-ui-react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import * as bookmarkApi from '../../utils/bookmarkApi'

function PostBoard({user, board, bookmark, removeBookmark}) {
    const bookmarkIndex = board.bookmarks.findIndex(board => board.username === user.username)
    const boardIndex = board._id
    const bookmarkColor = bookmarkIndex > -1 ? 'teal' : 'grey';
    const clickHandler = bookmarkIndex > -1 ? () => removeBookmark(board.bookmarks[bookmarkIndex]._id) : () => bookmark(board._id)

return (
  <Card key={board._id}>
      <Link to={`/board/${board._id}`}>
        <Card.Content>
            <Card.Description>{board.title}</Card.Description>
            <Card.Description>{board.caption}</Card.Description>
            </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon name={"bookmark"} size="large"  color={bookmarkColor} onClick={clickHandler}/>
        Bookmark
      </Card.Content>
  </Link>
    </Card>
    );
}

export default PostBoard;

//