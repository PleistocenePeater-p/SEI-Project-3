import { useState } from 'react'
import userService from '../../utils/userService'
//import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";

// this hook can be used to programtically change url we are on 
// on the client (react, browser code)
import { useNavigate } from 'react-router-dom';

export default function SignUpPage({handleSignUpOrLogin}){
		const [state, setState] = useState({
			username: '',
			email: '',
			password: '',
			passwordConf: '',
			bio: ''
		})
		const [selectedFile, setSelectedFile] = useState('')
		const [error, setError] = useState('');
		const navigate = useNavigate()

		function handleChange(e){

			setState({
				...state,
				[e.target.name]: e.target.value
			})
		}	

		function handleFileInput(e){
			setSelectedFile(e.target.files[0])
		}

		async function handleSubmit(e){
			e.preventDefault();
			const formData = new FormData();
			// key on req.file would be photo, 
			formData.append('photo', selectedFile);
			// req.body formdata
			formData.append('username', state.username)
			formData.append('email', state.email)
			formData.append('password', state.password)	
			formData.append('bio', state.bio)

			try {
				const signUp = await userService.signup(formData)
				console.log(signUp)
				navigate('/');
				handleSignUpOrLogin();
			} catch(err){
				console.log(err, ' err in handleSubmit');
				setError('Check your terminal for your error and the chrome console!')
			}
		}
	
		return (
			<Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
			 <Grid.Column style={{ maxWidth: 450 }}>
				<Header textAlign="center">
                    <h2>Welcome to DreamMapper!</h2>
                    <h5>What've you been dreaming about?</h5>
                </Header>
			   <Form autoComplete="off" onSubmit={handleSubmit}>
				 <Segment stacked>
				   <Form.Input
					 name="username"
					 placeholder="Username"
					 value={state.username}
					 onChange={handleChange}
					 required
				   />
				   <Form.Input
					 type="email"
					 name="email"
					 placeholder="Email"
					 value={state.email}
					 onChange={handleChange}
					 required
				   />
				   <Form.Input
					 name="password"
					 type="password"
					 placeholder="Password"
					 value={state.password}
					 onChange={handleChange}
					 required
				   />
				   <Form.Input
					 name="passwordConf"
					 type="password"
					 placeholder="Confirm password"
					 value={state.passwordConf}
					 onChange={handleChange}
					 required
				   />
				   <Form.Field>
					 <Form.Input
					   type="file"
					   name="photo"
					   placeholder="upload image"
					   onChange={handleFileInput}
					 />
				   </Form.Field>
				   <Button type="submit" className="btn">
					 Signup
				   </Button>
				 </Segment>
				 {error ? <ErrorMessage error={error} /> : null}
			   </Form>
			 </Grid.Column>
		   </Grid>
			 );
		}
