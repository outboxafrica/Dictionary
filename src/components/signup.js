import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthCont'
import { Link, useHistory } from "react-router-dom"
import CountrySelect from 'react-bootstrap-country-select';

const Signup = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmationRef = useRef()
    const emailconfirmationRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [ value, setValue ] = useState(null);

    async function handleSubmit(e) {
    e.preventDefault() //prevents form from refreshing

    //email confirmation
    if (emailRef.current.value !== emailconfirmationRef.current.value) {
        return setError("email does not match")
    }

    //password confirmation
    if (passwordRef.current.value !== passwordconfirmationRef.current.value) {
        return setError("Passwords do not match")
    }

    try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
    } catch {
        setError("Failed to create an account")
    }

    setLoading(false)
}


    return (
        <>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up Now</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="name">
                        <Form.Label>
                            Full Name
                        </Form.Label>
                        <Form.Control type = "name" placeholder="Name & Surname" ref = {nameRef} required />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control type = "text" placeholder="abc@example.com" ref = {emailRef} required />
                    </Form.Group>
                    <Form.Group id="email-confirmation">
                        <Form.Label>
                            Confirm Email
                        </Form.Label>
                        <Form.Control type = "email" placeholder="retype email" ref = {emailconfirmationRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type = "password" placeholder="create password" ref = {passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirmation">
                        <Form.Label>
                            Confirm Password
                        </Form.Label>
                        <Form.Control type = "password" placeholder="retype password" ref = {passwordconfirmationRef} required />
                    </Form.Group>
                    <Form.Group id="signupas">
                        <Form.Label>
                            Student or Facilitator
                        </Form.Label>
                        <Form.Control as="select" >
                            <option>Pick one</option>
                            <option>Student</option>
                            <option>Facilitator</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group id="country">
                        <Form.Label>
                            Select Country/State
                        </Form.Label>
                        <CountrySelect
                            value={value}
                            onChange={setValue}
                        />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                </Form>

            </Card.Body>
            <div className= "w-100 text-center mt-2">
                Already have an account? <Link to="/login">Sign In here</Link>
            </div>
        </>
    );
};

export default Signup;
