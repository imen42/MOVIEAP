import React, { useState } from 'react';
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Editmovie = ({ imen,handleEdit }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: imen.name,
    date: imen.date,
    picture: imen.picture,
    rating: imen.rating,
  });

  const handlechange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
    const handlerating =(rate) =>setForm({...form,rating:rate});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMovie = { ...form, id: imen.id };
    handleEdit(newMovie);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };



  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className='btn-primary' onClick={openModal}>
        Edit
      </button>
      {/* <button className='btn-primary' onClick={closeModal}>
        Delete
      </button> */}
      <div className='modal'>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          <form onSubmit={handleSubmit}>
            <label>Movie name</label>
            <input type='text' value={form.name} name='name' onChange={handlechange} />
            <label>Release date</label>
            <input type='date' value={form.date} name='date' onChange={handlechange} />
            <StarRating  rating={form.rating} handleRating={handlerating} />
            <label>Movie poster</label>
            <input type='URL' value={form.picture} name='picture' onChange={handlechange} />
            <button type='submit'>Add</button>
            <button onClick={closeModal}>Cancel</button>
            
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Editmovie;