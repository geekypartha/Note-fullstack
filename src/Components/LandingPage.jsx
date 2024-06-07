import { Button, Container } from '@mui/material'
import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    

    //  useEffect(() => {
    //    const userInfo = localStorage.getItem("userInfo");

    //    if (userInfo) {
    //      history.push("/mynotes");
    //    }
    //  }, [history]);

    const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="flex items-center justify-center">
          <div className="mt-72">
            <h2 className="text-3xl pb-10">Welcome to Notes app</h2>
            <div className="w-10vw h-20vh bg-gray-100 px-10 rounded-md py-10">
              <h1 className="pb-10">Join today</h1>
              <Button
                className="mt-10 w-full"
                variant="outlined"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <div className="flex items-center justify-center pt-10">
                <h2>Don't have an account?</h2>
                <Button className="mt-10" onClick={() => navigate("/signup")}>
                  signup
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default LandingPage