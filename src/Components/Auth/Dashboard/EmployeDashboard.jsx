import React from 'react'
import Header from './Others/Header'
import TaskListNumbers from './Others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeDashboard = () => {
    return (
        <>
            <div className="p-20 h-screen  bg-[ #222831]">
                <Header />
                <TaskListNumbers/>
                <TaskList/>
            </div>

       </>
    )
}

export default EmployeDashboard