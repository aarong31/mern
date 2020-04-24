import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_EMAIL, 
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks';
import './Auth.css';

const Auth = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)

    const authSubmitHandler = event => {
        event.preventDefault();
    };

    return (
    <Card className="authentication">
        <h2>Login required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
            <Input 
                element="input" 
                id="email" 
                type="email" 
                label="Email" 
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email address"
                onInput={inputHandler}
            />
            <Input 
                element="input"
                id="password" 
                type="password" 
                label="Password" 
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid password of at least 5 characters"
                onInput={inputHandler}
            />
            <Button type="submit" disable={!formState.isValid}>LOGIN</Button>
        </form>
    </Card>
    );
};

export default Auth;