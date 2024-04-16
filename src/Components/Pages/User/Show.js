import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [user, setUser] = useState([])

    async function fetchData() {
        const result = await axios.get('http://localhost:5000/user')
        setUser(result.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h2 className='text-center'><u> Show Information...... </u></h2>
            <table className=" container table table-striped">
                <thead>
                    <tr>
                        <th>Customer Name </th>
                        <th>Customer Address</th>
                        <th>Customer Contact</th>
                        <th>Customer Email</th>
                        <th colspan='2' className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((obj) => {
                            return (
                                <tr>
                                    <td>{obj.name}</td>
                                    <td>{obj.add}</td>
                                    <td>{obj.con}</td>
                                    <td>{obj.email}</td>
                                    <td>
                                        <NavLink to={`/update/${obj.id}`}><button className="btn btn-success">Update</button></NavLink>
                                        <NavLink to={`/delete/${obj.id}`}><button className='btn btn-warning float-end'>Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )  
}

export default Show