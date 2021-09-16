import React, { useState } from 'react';
import { Paper, Container, Typography, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import UseStyle from './../form/style';
import Input from './../form/input';
import { forgotPassword } from './../../action/user';

const initialState = { email: '' };

const ForgetFrom = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = UseStyle();
    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        setData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(data));
        alert("Forgot passowrd link send to your Email");
        history.push('/')
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Forget Password</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Input label="Email" type="email" name="email" handleChange={handleChange} ></Input>
                    </Grid>
                    <Button className={classes.submit} fullWidth variant="contained" color="primary" type="submit">Submit</Button>
                </form>
            </Paper>
        </Container>
    );
}

export default ForgetFrom