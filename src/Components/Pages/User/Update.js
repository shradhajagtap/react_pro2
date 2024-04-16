import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {


    const { register, handleSubmit, setValue } = useForm()

    const { userId } = useParams()

    const navi = useNavigate()

    async function fetchData() {
        const result = await axios.get(`http://localhost:5000/user/${userId}`)
        setValue('name', result.data.name)
        setValue('rent', result.data.add)
        setValue('add', result.data.con)
        setValue('email', result.data.email)

    }

    function saveData(data) {
        axios.put(`http://localhost:5000/user/${userId}`, data)
        navi('/show')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className=" container border border-info mt-3 p-3">
                <center><b>Update enquiry</b></center>
                <form onSubmit={handleSubmit(saveData)}>
                    <label htmlFor='n'> Customer Name : </label>
                    <input type='text' id='n' className='form-control' {...register('name')} />

                    <label htmlFor='add'> Customer Address : </label>
                    <input type='number' id='add' className='form-control' {...register('add')} />

                    <label htmlFor='con'> Customer Contact: </label>
                    <input type='text' id='con' className='form-control' {...register('con')} />

                    <label htmlFor='email'> Customer Email: </label>
                    <input type='text' id='email' className='form-control' {...register('email')} />

                    <input type='submit' value={'Update'} className='mt-2' />
                    <input type='reset' value={'Reset'} className='float-end mt-2' />
                </form>

            </div>
        </>
    )
}

export default Update