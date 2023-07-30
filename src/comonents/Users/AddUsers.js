import React, { useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUsers.module.css';
import ErrorModal from '../UI/ErrorModal';



const AddUsers = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        
        if(username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }


    return (
        <>
            {error && <ErrorModal 
                errorTitle={error.title} 
                errorMessage={error.message} 
                onConfirm={errorHandler}
                />
            }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        value={username} 
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        value={age} 
                        onChange={ageChangeHandler} 
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card> 
        </>     
    )
}

export default AddUsers;