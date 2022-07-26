import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useUserAuth } from "../context/UserAuthContext";
import "./Form.css"

const Signup = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if (password === passwordConfirm) {
                await signUp(email, password);
                navigate("/");
            }
            else {
                throw new Error("Passwords do not match!");
            }
        }catch(err) {
            setError(err.message);
        }
    };
    return (
        <>
            <div className="form p-4 box">
                <h2 className="mb - 3">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email address" 
                            onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                        <Form.Control type="password" placeholder="Password Confirm"
                            onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    </Form.Group>
                    <div className="buton d-grid gap-2">
                        <Button type="Submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
                <div className = "p-4 box mt-3 text-center">
                    Already have an account? <Link to="/">Log In</Link>
                </div>
            </div>
        </>
    )
}

export default Signup;