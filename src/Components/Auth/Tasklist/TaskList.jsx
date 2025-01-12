import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompeletTask from './CompeletTask';
import FaildTask from './FaildTask';

const TaskList = ({ data }) => {

    console.log('From task list',data)
    return (
        <div
            id="tasklist"
            className="flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full bg-[#393E46] py-5 mt-10 rounded overflow-x-auto scrollbar-hide">

            {
                data.tasks.map((element , idx) => {
                    if (element.active) {
                        return <AcceptTask key={idx}/>
                    }
                    if (element.newTask) {
                        return <NewTask  key={idx}/>
                    }
                    if (element.completed) {
                        return <CompeletTask key={idx}/>

                    }
                    if (element.failed) {
                        return <FaildTask key={idx} />
                    }

                })
            }





        </div>
    )
}

export default TaskList;
