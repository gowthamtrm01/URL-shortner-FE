import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from './form/form';
import ForgetForm from './forget_Form/forgetPasswordForm';
import ResetPasswordForm from './reset_Password_Form/resetPasswordForm';
import Navbar from './Navbar/navbar';
import Home from './home';

const Routers = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/auth" exact>
                    <Form />
                </Route>
                <Route path="/forget-password" exact>
                    <ForgetForm />
                </Route>
                <Route path="/reset-password/:id" exact>
                    <ResetPasswordForm />
                </Route>
                <Route exact path="/:id">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routers;