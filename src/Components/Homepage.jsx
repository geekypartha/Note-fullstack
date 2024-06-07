import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navbar from './Navbar/Navbar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Badge from "@mui/material/Badge";

const Homepage = () => {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    const fetchNotes=async()=>{
       
        await axios({
        method: "get",
        baseURL: "http://localhost:5000/api/data",
        }).then((response)=>{
            setNotes(response.data);
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
            
    useEffect(()=>{
       fetchNotes();
    },[])

    const deletehandler=(id)=>{
        if(window.confirm("Are you sure?")){

        }
    }
  return (
    <>
      <Navbar />

      <h1 className="text-3xl py-10">Welcome back Partha Pratim Mazumdar</h1>
      <div>
        <Button variant="contained" onClick={() => navigate("/mynotes")}>
          Create new note
        </Button>
      </div>
      <div>
        {notes.map((note, index) => (
          <div key={note._id} className="flex items-center justify-center">
            {/* <h3>{note.title}</h3> */}
            <Card className="w-[50%] py-5">
              <Card.Header className="flex bg-gray-200 p-3 rounded-md items-center justify-between">
                <span>{note.title}</span>

                <div className="flex gap-5">
                  <Button
                    onClick={() => navigate(`/mynotes/${note._id}`)}
                    variant="contained"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deletehandler(note._id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Card.Body className="bg-gray-100 p-5 flex justify-start rounded-md">
                <div>
                    <div className='flex items-center justify-start left-0 px-10 py-5'>
                        <Badge badgeContent={note.category} color='success'/>
                    </div>
                    
                        
                    
                  <p className="text-left">{note.content}</p>
                  <h2 className='text-left text-gray-400 text-sm pt-2'>Created on</h2>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
}

export default Homepage