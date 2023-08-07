import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate} from 'react-router-dom'
import AddBoardForm from "../../components/AddBoardForm/AddBoardForm";
import BoardGallery from "../../components/BoardGallery/BoardGallery";
import * as postBoardApi from '../../utils/postBoardApi'
import userService from "../../utils/userService";
import * as bookmarkApi from '../../utils/bookmarkApi'
import PageHeader from "../../components/Header/Header";


import {
	Button,
	Form,
	Grid,
    Card,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";


export default function BoardsPage({user, handleLogout}){
    const [boards, setBoards] = useState([]);
    const [userState, setUserState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { username } = useParams();

    async function bookmark(boardId) {
    try {
      const response = await bookmarkApi.create(boardId)
      handleGetBoards();
    } catch(err) {
      setError("Error adding bookmark");
      console.log(err, " err in boardsPage");
    }
  }

    async function removeBookmark(boardId) {
    try {
      const response = await bookmarkApi.removeBookmark(boardId)
      handleGetBoards();
    } catch(err) {
      setError("Error adding bookmark");
      console.log(err, " err in boardsPage");
    }
  }
    
    async function handleGetBoards() {
        try {
            setLoading(true);
            const response = await postBoardApi.getBoards(username);
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
        handleGetBoards();
      }, [username]);

      if (loading) {
        return (
        <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <h1>Loading....</h1>
        </>
        );
      }

      return(
      <div>
        <Grid centered>
            <Grid.Row>
              <Grid.Column>
                <PageHeader handleLogout={handleLogout} user={user}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Card.Group>
                        Dream Boards
                        <BoardGallery user={user} boards={boards} bookmark={bookmark} removeBookmark={removeBookmark}/>
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                
                <Grid.Column style={{ maxWidth: 450 }}>Add Board
                    <AddBoardForm handleAddBoard={handleAddBoard} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
      )
}