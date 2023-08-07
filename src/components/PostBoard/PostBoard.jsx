import { Card, Icon, Image } from "semantic-ui-react";

function PostBoard({user, board}) {

return (
    <Card key={board._id}>
        <Card.Content>
            <Card.Description>{board.title}</Card.Description>
            <Card.Description>{board.caption}</Card.Description>
            </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon name={"bookmark"} size="large" />
        Bookmark
      </Card.Content>
    </Card>
    );
}

export default PostBoard;