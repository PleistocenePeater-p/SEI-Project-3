import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function AddBoardForm({handleAddBoard}) {
    // create the state, pay attention to how the inputs are setup!o
    const [boardState, setBoardState] = useState({
        title: "",
        caption: ""
    })

    function handleChange(e){
        setBoardState({
            ...boardState,
            [e.target.name]: e.target.value
        })
      }

    function handleSubmit(e){
        e.preventDefault();
        handleAddBoard(boardState)
    }
      return (
        <Segment>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              className="form-control"
              name="title"
              value={boardState.title}
              placeholder="Title"
              onChange={handleChange}
              required
            />
            <Form.Input
              className="form-control"
              name="caption"
              value={boardState.caption}
              placeholder="Add a caption"
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Add Dream
            </Button>
          </Form>
        </Segment>
      )
}