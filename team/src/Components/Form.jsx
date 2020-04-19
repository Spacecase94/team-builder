import React, {useState} from 'react';

const Form = (props) => {

    return (
        <div>
            <form onSubmit={props.onFormSubmit}>
                <label>
                    First Name:
                    <input
                        onChange={props.onInputChange}
                        value={props.newTeamList.firstName}
                        name='firstName'
                        type='text'
                    />
                </label>
                <br/>
                <label>
                    Last Name:
                    <input
                        onChange={props.onInputChange}
                        value={props.newTeamList.lastName}
                        name='lastName'
                        type='text'
                    />
                </label>
                <br/>
                <label>
                    Email:
                    <input
                        onChange={props.onInputChange}
                        value={props.newTeamList.email}
                        name='email'
                        type='email'
                    />
                </label>
                <br/>
                <label>
                    Role:
                    <input
                        onChange={props.onInputChange}
                        value={props.newTeamList.role}
                        name='role'
                        type='text'
                    />
                    <br/>
                    <input 
                        type='submit'
                        // onSubmit={props.submit}
                        />
                    <br/>
                </label>

            </form>

            
        </div>
    );

};

export default Form;