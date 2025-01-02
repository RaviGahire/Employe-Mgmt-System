import React from 'react'
// here is we pass the task context children is app 
const TaskContext = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default TaskContext;