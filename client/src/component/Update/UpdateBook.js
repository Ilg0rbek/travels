import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateBook = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`)
            setTitle(data.travel.title)
            setDesc(data.travel.desc)
            setImage(data.travel.image)
        } catch (error) {
            console.log(error.message);
        }
    }

    const updateHandler = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/api/travel/${id}`, {
            title,
            image,
            desc
        })
        navigate('/')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='my-4'>
            <form onSubmit={updateHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title City</label>
                    <input
                        type="text"
                        placeholder='Enter title'
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image City</label>
                    <input
                        type="text"
                        placeholder='Path image URL'
                        className="form-control"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description City</label> <br />
                    <input
                        id='desc'
                        type="text"
                        placeholder='Description'
                        className='form-control'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary form-control">Submit</button>
            </form>
        </div>
    )
}

export default UpdateBook
