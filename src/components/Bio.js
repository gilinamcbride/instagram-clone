import profileIcon from '../assets/profileIcon.svg';
import getPhotoUrl from 'get-photo-url';
import React, { useState } from 'react';
import { db } from '../dexie.js';

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Gilina McBride',
    about: "Hey it's me!",
  });

  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon);

  const updateUserDetails = async (event) => {
    event.preventDefault();
    const objectData = {
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    };
    setUserDetails(objectData);
    // await db.bio.put(objectData, 'info');
    setEditFormIsOpen(false);
  };

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl('#profilePhotoInput');
    setProfilePhoto(newProfilePhoto);
  };

  const editForm = (
    <form className='edit-bio-form' onSubmit={(e) => updateUserDetails(e)}>
      <input type='text' id='' name='nameOfUser' placeholder='Your name' />
      <input type='text' id='' name='aboutUser' placeholder='About you' />
      <br />
      <button
        type='button'
        className='cancel-button'
        onClick={() => setEditFormIsOpen(false)}
      >
        Cancel
      </button>
      <button type='submit'>Save</button>
    </form>
  );

  const editButton = (
    <button onClick={() => setEditFormIsOpen(true)}>Edit</button>
  );

  return (
    <section className='bio'>
      <input type='file' accept='image/*' name='photo' id='profilePhotoInput' />
      <label htmlFor='profilePhotoInput' onClick={updateProfilePhoto}>
        <div
          className='profile-photo'
          role='button'
          title='Click to Edit Photo'
        >
          <img src={profilePhoto} alt='profile'></img>
        </div>
      </label>

      <div className='profile-info'>
        <p className='name'>{userDetails.name}</p>
        <p className='about'>{userDetails.about}</p>
        {editFormIsOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
