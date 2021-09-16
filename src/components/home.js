import React, { useEffect } from 'react';
import { Paper, Container, Typography } from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { activeLink } from '../action/user';

const Home = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem("profile"));

    console.log(user);

    useEffect(() => {
        if (id !== "new-location") {
            dispatch(activeLink(id, history))
        }
    }, [])


    return (
        <Container component="main" >
            <Paper>
                {user?.result?.name && (
                    <>
                        <Typography variant="h2" align="center" >Welcome to Project</Typography>
                        <Typography variant="h4" align="center">{user?.result?.name}</Typography>
                    </>
                )}
            </Paper>
        </Container>
    );
}

export default Home;