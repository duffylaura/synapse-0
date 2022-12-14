import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import {ADD_GROUP} from '../../utils/mutations';

import Auth from '../../utils/auth';

const GroupForm = () => {

    const [name, setGroupName] = useState('');

    const [addGroup, {error}] = useMutation(ADD_GROUP);

    const handleFormSubmit = async(e) => {
        e.preventDefault(); 
        try {
            const { data } = await addGroup ({
                variables: {
                    name
                },
            });

            setGroupName('');
        } catch (err) {console.error(err)}
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
          setGroupName(value);
        }
      };

    return (
<div>
      <h3>Create a new group!</h3>

      {Auth.loggedIn() ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <div>
              <textarea
                name="name"
                placeholder="What is your group's name!?"
                value={name}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button className="btn" type="submit"> Create New Group! </button>
            </div>

                {error && (
                <div>
                    {error.message}
                </div>
                )}

          </form>
        </>
      ) : (
        <p>
          You need to be logged in to create a new group! Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default GroupForm;

   

