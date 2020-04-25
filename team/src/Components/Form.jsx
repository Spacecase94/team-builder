import React, {useState} from 'react';
import './Form.scss'
const Form = (props) => {

    return (
        <div className='Form-Container'>
            <form onSubmit={props.onFormSubmit}>
                <label className='title'>
                    First Name:
                    <input
                        onChange={props.onInputChange}
                        value={props.newTeamList.firstName}
                        name='firstName'
                        type='text'
                    />
                </label>
                <br/>
                <label className='title'>
                    Last Name:
                    <input
                        onChange={props.onInputChange}
                        value={props.newTeamList.lastName}
                        name='lastName'
                        type='text'
                    />
                </label >
                <br/>
                <label className='title'>
                    Email:
                    <input
                        onChange={props.onInputChange}
                        value={props.newTeamList.email}
                        name='email'
                        type='email'
                    />
                </label>
                <br/>
                <label className='title'>
                    Role:
                    <input
                        onChange={props.onInputChange}
                        value={props.newTeamList.role}
                        name='role'
                        type='text'
                    />
                    <br/>
                    <button
                        className='submit-button'
                        type='submit'
                        // onSubmit={props.submit}
                        >Submit</button>
                    <br/>
                </label>

            </form>

            
        </div>
    );

};

export default Form;