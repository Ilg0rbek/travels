import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TravelBook = () => {

    const [data, setData] = useState([])
    const [id, setId] = useState('')

    const fetchData = async () => {
        const { data } = await axios.get('http://localhost:5000/api/travel')
        setData(data.travels)
    }

    const deleteHandler = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`http://localhost:5000/api/travel/${id}`)
            console.log('delete book');
        } catch (error) {
            console.log(error.message);
        }
        fetchData()
    }


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {
                data.map(v => (
                    <div className="card mb-3" key={v._id}>
                        <img src={v.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{v.title}</h5>
                            <p className="card-text">{v.desc}</p>
                            <div className='d-flex justify-content-end'>
                                <Link className='btn btn-primary me-1' to={`/update/:${v._id}`}>Update</Link>
                                <form onSubmit={deleteHandler}>
                                    <button
                                        type='submit'
                                        className='btn btn-danger'
                                        onClick={() => setId(v._id)}
                                    >
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TravelBook
