import React from 'react';
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import "./Home.css"

const Home = () => {
    const {user, logOut} = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    }
    const navigate = useNavigate();
    const handleQuiz = async () => {
        navigate("/quiz");
    }
    return (
    <>
        <div className = "p-4 box mt-3 text-center welcome">Welcome, {user && user.email.split('@')[0]}!</div>
        <div className="buton d-grid gap-2">
            <Button onClick={handleQuiz}>Start Quiz!</Button>
        </div>
        <div className = "buton d-grid gap-2">
            <Button onClick = {handleLogOut}>Log Out</Button>
        </div>
    </>
    );
};

export default Home;