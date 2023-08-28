import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import PostCard from '../../components/PostCard/PostCard'
import * as postCardApi from '../../utils/postCardApi';
import AddCardForm from '../../components/AddCardForm/AddCardForm'

function InspectBoardPage() {
    const {id} = useParams()
    const [cards, setCards] = useState(null);
    useEffect(() => {
        async function getCards() {
            const allCards = await postCardApi.getAllCards(id)
            console.log(allCards.cards);
            setCards(allCards.cards);
        }
        getCards();
    }, [])
    console.log(id)
    const allCardsRendered =cards? cards.map((card, idx) => <PostCard card={card} key={idx} boardId={id}/>) : null
  return (
    <>
    <div>{allCardsRendered}</div>
    <AddCardForm id={id} setCards={setCards} cards={cards}/>
    </>
  )
}

export default InspectBoardPage