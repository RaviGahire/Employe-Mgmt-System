import React from 'react'
import Header from './Others/Header'
import TaskListNumbers from './Others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeDashboard = ({data}) => {
 
    return (
        <>
            <div className="p-20 h-screen  bg-[ #222831]">
                <Header data = {data} />
                <TaskListNumbers  data = {data} />
                <TaskList  data = {data} />
            </div>

       </>
    )
}

export default EmployeDashboard