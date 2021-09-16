import React, { useState } from 'react';
import { Paper, Container, Typography, Button, Grid, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Input from './input';
import USeStyles from './style';
import { signin, signup } from './../../action/user';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Form = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = USeStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formatData, setFormatData] = useState(initialState);


    const handleChange = (e) => {
        setFormatData({ ...formatData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    const forgetPage = () => {
        history.push('/forget-password')
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formatData, history));
            alert("Aitivation link was send to your email");
        } else {
            dispatch(signin(formatData, history));
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} half autoFocus />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button variant="contained" fullWidth type="submit" color="primary" className={classes.submit} >{isSignup ? "Sign up" : "Sign In"}</Button>
                    <Grid container justifyContent="flex-end">
                        {!isSignup && (
                            <Grid item>
                                <Button onClick={forgetPage}>Forget Password?</Button>
                            </Grid>
                        )}
                        <Grid item >
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have a account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Form;