import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate} from 'react-router-dom'
import AddBoardForm from "../../components/ErrorMessage/AddBoardForm/AddBoardForm";
import * as postBoardApi from "../../utils/postBoardApi";


import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";

import userService from "../../utils/userService";

export default function BoardsPage({user, handleLogout}){
    const [boards, setBoards] = useState([]);
    const [userState, setUserState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { username } = useParams();
    
    async function getBoards() {
        try {
            setLoading(true);
            const response = await userService.getBoards(username);
            console.log(response);
            setBoards(response.boards);
            setUserState(response.user);
            setLoading(false)
        } catch (err) {
            setError("Error loading boards");
            console.log(err, " err in boardsPage");
        }
      }

      async function handleAddBoard(data) {
        console.log(data, "<-- handleAddBoard(data) before try/catch")
        try {
            const responseData = await postBoardApi.create(data);
            console.log(responseData, " <-- response from server in handleAddBoard");
            setBoards([responseData.data, ...boards]); 
        } catch(err){
            console.log(err, "error");
            setError("Error creating a board. BoardsPage --> handleAddBoard");
        }
    }
      useEffect(() => {
        getBoards();
      }, [username]);

      if (loading) {
        return (
          <>
            <h1>Loading....</h1>
          </>
        );
      }

      return(
      <div>Boards Page!!!!
        <Grid centered>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddBoardForm handleAddBoard={handleAddBoard} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
      )
}