import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

import Title from "../../styles/components/UI/Title/Title";

import StyledLogin from "../../styles/components/Login/Login";
import Text from "../../styles/components/Login/Text/Text";
import Logo from "../../styles/components/Login/Logo/Logo";

import reset from "../../styles/constants/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

const Login = () => (
    <Fragment>
        <StyledLogin>
            <Logo>
                <Title>Gigatron</Title>
            </Logo>
            <Text>
                <h3>
                    Welcome to Xgruve. Please sign up if you dont already have
                    an account.
                </h3>
            </Text>
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/forgot" component={ForgotPassword} />
            </Switch>
        </StyledLogin>
        <GlobalStyle />
    </Fragment>
);

export default Login;
