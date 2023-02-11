import React from 'react'
// import { Postdata } from '../../Postdata';
import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [isSignUp, setisSignUp] = useState(false);
  const [input, setinput] = useState(
    {
      name: "",
      email: "",
      password: "",
    },
  );
  {

  }
  // useEffect(() => {

  // console.log(input);

  // }, [input])

  const submitform = (event) => {
    event.preventDefault();
    if (!isSignUp) {

      if (input.email !== "" && input.password !== "") {

        const inputdata = {
          // name:input.name,
          email: input.email,
          password: input.password,
        }
        console.log(inputdata);
      }
      else{
        toast.error("Please fill the missing fields")
      }

 
    }
    else {
      if (input.name !== "" && input.email !== "" && input.password !== "") {
        const inputdata = {
          name: input.name,
          email: input.email,
          password: input.password,
        }
        console.log(inputdata);

      }
else{
  toast.error("Please fill the missing fields")
}
  
    }



  }

  const HandleChange = (event, data) => {
    //  event.preventDefault();
    setinput({ ...input, [data]: event.target.value })
  }


  return (
    <div>
      <form  >
        <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems='centre' justifyContent={'centre'} margin='auto' marginTop={5} padding={5} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} sx={{
          ":hover": {
            boxShadow: '10px 10px 20px #ccc',
          }
        }} >
          <Typography variant='h2' padding={3} textAlign='center' >{isSignUp ? 'SignUp' : 'Login'}</Typography>
          {isSignUp && <TextField margin='normal' variant='outlined' type={'text'} placeholder='Name' onChange={(event) => HandleChange(event, 'name')} value={input.name} />}
          <TextField margin='normal' variant='outlined' type={'email'} placeholder='Email' onChange={(event) => HandleChange(event, 'email')} value={input.email} />
          <TextField margin='normal' variant='outlined' type={'password'} placeholder='Password' onChange={(event) => HandleChange(event, 'password')} value={input.password} />
          <Button sx={{ marginTop: 3, borderRadius: 3 }} variant='contained' color='warning' onClick={submitform}>{isSignUp ? 'SignUp' : 'Login'}</Button>
          <Button onClick={() => setisSignUp(!isSignUp)} sx={{ marginTop: 3, borderRadius: 3 }} >{!isSignUp ? 'Go To SignUp' : "Back to Login"}</Button>
        </Box>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Login
