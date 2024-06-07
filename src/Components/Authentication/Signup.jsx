import { Button, Container, FormLabel, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("")

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(name,email,password)

        try {
            const config ={
                headers:{
                    'content-type':"application/json"
                }
            }
            const {data} = await axios.post('/api/users/',{
                name,email,password
            },config);

            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data))

        } catch (error) {
            setError(error.response.data.message)
        }
       
    }
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="mt-52">
          <h2 className="text-3xl pb-10">Welcome to Note app</h2>
          <div className="w-[25vw] bg-gray-100 px-10 rounded-md py-10">
            <h1 className="pb-10">Sign Up form</h1>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </Grid>
                <Grid className="flex justify-center" item xs={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    type="submit"
                    sx={{
                      px: "2rem",
                      color: "white",
                      overflow: "hidden",
                      py: ".8rem",

                      bgcolor: "black",
                      ":hover": {
                        bgcolor: "#fff",
                        color: "black",
                        boxShadow: "none",
                        border: "1px solid currentColor",
                      },
                    }}
                  >
                    <div className="flex items-center font-jost-medium gap-2 justify-center">
                      Create Account
                    </div>
                  </Button>
                </Grid>
              </Grid>
            </form>
            <div className="flex items-center justify-center pt-10 gap-2">
              <h2>Already have an account?</h2>
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup