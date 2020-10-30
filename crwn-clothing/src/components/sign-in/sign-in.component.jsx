import React from 'react';

import './sign-in.styles.scss';

// Class Component
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const {value, name} = event.target;
        // Dynamically changes the state values based on event.target with same name
        this.setState({ [name]: value });
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        oncChange={this.handleChange}
                        required 
                    />
                    <label>Email</label>
                    <input 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        oncChange={this.handleChange}
                        required
                    />
                    <label>Password</label>

                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        )
    }
};

export default SignIn;