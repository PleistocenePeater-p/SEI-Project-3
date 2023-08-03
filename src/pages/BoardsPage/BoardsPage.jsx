import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate} from 'react-router-dom'
import AddBoardForm from "../../components/ErrorMessage/AddBoardForm/AddBoardForm";



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

      function handleAddBoard(e) {
        try {
            console.log(e.target.value, "here is e.target.value")
            console.log(e.target.title.value)
        setBoards({
            ...boards,
            [e.target.name]: e.target.title.value
        }) 
        } catch(err){
            console.log(err, "error")
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