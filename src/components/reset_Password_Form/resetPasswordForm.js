import React, { useState } from 'react';
import { Paper, Container, Button, Typography, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

import Input from '../form/input';
import UseStyles from '../form/style';
import { resetPassword } from '../../action/user';

const initialState = { password: '', confirmPassword: '' };

const ResetPasswordForm = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const [showPassowrd, setShowPassword] = useState(false);
    const [formatData, setFormData] = useState(initialState)
    const classes = UseStyles();

    const handleShowPassword = () => setShowPassword((prevShowPassowrd) => !prevShowPassowrd)

    const handleChange = (e) => {
        setFormData({ ...formatData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(formatData, id, history))
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Reset Password</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input label="Password" name="password" type={showPassowrd ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                        <Input label="Confirm Passowrd" name="confirmPassword" type="password" handleChange={handleChange} />
                    </Grid>
                    <Button className={classes.submit} color="primary" fullWidth variant="contained" type="submit">Submit</Button>
                </form>
            </Paper>
        </Container>
    );
}

export default ResetPasswordForm