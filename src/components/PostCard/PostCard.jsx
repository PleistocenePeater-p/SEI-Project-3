import { Card, Icon, Image } from "semantic-ui-react";
import * as postCardApi from '../../utils/postCardApi';


function PostCard({card, boardId}) {
    const [cardState, setCardState] = useState("")
    function handleDelete(e) {
        const updatedCards = postCardApi.removeCard(boardId, card._Id)
        console.log(updatedCards)
        setCardState(updatedCards.cards);
    }
  return (
    <Card>
      <Card.Content>
          <Card.Description>{card.content}</Card.Description>
          </Card.Content>
    <Card.Content extra textAlign={"right"}>
      <Icon name={"trash icon"} size="large"  onClick={handleDelete}/>
    </Card.Content>

  </Card>
  )
}

export default PostCard