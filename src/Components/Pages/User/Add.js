import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Add() {
    const navi = useNavigate()

    const { register, handleSubmit } = useForm()

    function saveData(data) {
        axios.post('  http://localhost:5000/user', data)
        alert('Added')
        navi('/show')

    }

    return (
        <>
            <div className=" container border border-info mt-3 p-3">
                <center><b>Car enquiry</b></center>
                <form onSubmit={handleSubmit(saveData)}>
                    <label htmlFor='n'> Customer Name : </label>
                    <input type='text' id='n' className='form-control' {...register('name')} />

                    <label htmlFor='add'> Customer Address : </label>
                    <input type='text' id='add' className='form-control' {...register('add')} />

                    <label htmlFor='con'> Customer Contact: </label>
                    <input type='number' id='con' className='form-control' {...register('con')} />

                    <label htmlFor='email'> Customer Email: </label>
                    <input type='text' id='email' className='form-control' {...register('email')} />

                    <input type='submit' value={'Submit'} className='mt-2' />
                    <input type='reset' value={'Reset'} className='float-end mt-2' />
                </form>

            </div>
        </>
    )
}

export default Add