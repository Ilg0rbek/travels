import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddTravels = () => {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/api/travel/add', {
            title,
            image,
            desc
        })
        setTitle('')
        setDesc('')
        setImage('')
        navigate('/')
    }


    return (
        <div className='my-4'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title City</label>
                    <input
                        type="text"
                        value={title}
                        placeholder='Enter title'
                        className="form-control"
                        id="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image City</label>
                    <input
                        type="text"
                        value={image}
                        placeholder='Path image URL'
                        className="form-control"
                        id="image"
                        required
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description City</label>
                    <input
                        type="text"
                        value={desc}
                        placeholder='Descripiton'
                        id='desc'
                        required
                        className='form-control'
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary form-control">Submit</button>
            </form>
        </div>
    )
}

export default AddTravels
