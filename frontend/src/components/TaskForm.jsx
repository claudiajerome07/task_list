// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.
import { useState } from "react";
import axios from "axios";
import { Form } from "react-router";
import TaskCard from "./TaskCard";

export default function TaskForm() {
    const [formdata,SetFormData]=useState({
        title:'', dueDate:'', priority:'', status:''
    })

    

    const handleChange=(e)=>{
        const {name,value}=e.target 

        SetFormData({
            ...formdata,[name]:value
        })
        console.log(SetFormData)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const { title, dueDate, priority, status } = formdata

        await axios.post('http://localhost:3000/create-tasks',formdata)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <br></br>
                    <input onChange={handleChange} type='text' name='title' value={formdata.title} aria-placeholder="enter title"></input>
                </div>
                <div>
                    <label>Due Date</label>
                    <br></br>
                    <input onChange={handleChange} type='Date' name='dueDate' value={formdata.dueDate} aria-placeholder="enter dueDate"></input>
                </div>
                <div>
                    <label>Priority</label>
                    <br></br>
                    <input onChange={handleChange} type='text' name='priority' value={formdata.priority} aria-placeholder="enter priority"></input>
                </div>
                <div>
                    <label>Status</label>
                    <br></br>
                    <input onChange={handleChange} type='text' name='status' value={formdata.status} aria-placeholder="enter status"></input>
                </div>
                <button>Submit</button>
            </form>
            
            
        </div>
        
    );
}