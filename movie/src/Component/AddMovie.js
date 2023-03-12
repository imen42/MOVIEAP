import React, { useState } from 'react'
import Modal from "react-modal";
import StarRating from './StarRating';
 
const AddMovie = ({handleAdd}) => {
  const [date , setName] = useState("")
  const [name , setDate] = useState("")
  const [picture , setPicture] = useState("")
  const [rating, setRating] = useState("1")
  const handleSubmit =()=> {
    const film={
      id:Math.random(),name,date,rating,picture
    }
    handleAdd(film)
    closeModal()
  }


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
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
      const [form,setForm] = useState({
        name:'',
        date:'',
        picture:'',
        rating:1,
})
const handleChange = (e) => setForm({...form,[e.target.name]:e.target.value});
const handleRating = (rate) => setForm ({...form,rating:rate})
  return (
    <div> <button className='btn-primary' onClick={openModal}>ADD MOVIE</button> 
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}>

        <form onSubmit={(e) =>{
            e.preventDefault();
           let newMovie = {
            ...form,
            id: Math.random(),
           };
           handleAdd(newMovie);
           closeModal();
         }}
         >
            <label>Movie name</label>
            <input type="text" value={form.name} name ='name' onChange={handleChange}/>
            <label>Release Date</label>
            <input type="date" value={form.date} name ='date' onChange={handleChange}/>
            <StarRating rating={form.rating} handleRating={handleRating}/>
            <label> Movie Poster</label>
            <input type='url' value={form.picture} name ='picture' onChange={handleChange}/>
            <button className='btn btn-primary'>ADD</button>
            <button className='btn btn-danger'>Cancel</button>

        </form>
    </Modal>
    </div>

    );

}

export default AddMovie