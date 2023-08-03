import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate} from 'react-router-dom'

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
        <div>Boards Page MOTHERFUCKER!!!!</div>
      )
}