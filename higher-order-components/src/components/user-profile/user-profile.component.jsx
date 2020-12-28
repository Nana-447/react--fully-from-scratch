import React from 'react';

class UserProfile extends React.Component {
    render(){
        return (
            <div className='container'>
                <h1>{this.props.name}</h1>
                <h1>{this.props.email}</h1>
            </div>
        )
    }
}

export default UserProfile;