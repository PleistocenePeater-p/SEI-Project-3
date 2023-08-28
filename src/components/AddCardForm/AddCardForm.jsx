import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import * as postCardApi from '../../utils/postCardApi';

export default function AddCardForm({id, setCards}) {
    const [cardState, setCardState] = useState("")

    function handleChange(e){
        setCardState(
            e.target.value
        )
      }

    async function handleSubmit(e){
        e.preventDefault();
        const newCard = await postCardApi.create(id, cardState)
        setCards([
            ...newCard.cards
        ])
        setCardState("");
    }
      return (
        <Segment>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              className="form-control"
              name="title"
              value={cardState}
              placeholder="content"
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Add Content
            </Button>
          </Form>
        </Segment>
      )
}