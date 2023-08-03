import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function AddPuppyForm({handleAddPost}) {
    // create the state, pay attention to how the inputs are setup!o
    const [state, setState] = useState({
      caption: ''
    })

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
      }

    function handleSubmit(e){
        handleAddBoard()
    }
      return (
        <Segment>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              className="form-control"
              name="title"
              value={state.title}
              placeholder="Title"
              onChange={handleChange}
              required
            />
            <Form.Input
              className="form-control"
              name="photo"
              value={state.caption}
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