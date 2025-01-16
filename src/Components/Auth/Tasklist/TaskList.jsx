import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompeletTask from './CompeletTask';
import FaildTask from './FaildTask';

const TaskList = ({ data }) => {

    return (
        <div
            id="tasklist"
            className="flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full bg-[#393E46] py-5 mt-10 rounded overflow-x-auto scrollbar-hide">

            {
                data.tasks.map((element , idx) => {
                    if (element.active) {
                        return <AcceptTask key={idx} data ={element}/>
                    }
                    if (element.newTask) {
                        return <NewTask  key={idx} data ={element}/>
                    }
                    if (element.completed) {
                        return <CompeletTask key={idx} data ={element}/>

                    }
                    if (element.failed) {
                        return <FaildTask key={idx}data ={element} />
                    }

                })
            }





        </div>
    )
}

export default TaskList;
