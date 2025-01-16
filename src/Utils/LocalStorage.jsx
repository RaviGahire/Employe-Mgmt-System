// This is all employee data 
const employees = [
    {
        "id": 1,
        "firstName": "Ravi",
        "password": "123",
        "email": "ravi@me.com",
        "taskCount": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Report",
                "taskDescription": "Prepare the monthly sales report.",
                "taskDate": "2025-01-04",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Discuss team progress and tasks for the week.",
                "taskDate": "2025-01-05",
                "category": "Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Call",
                "taskDescription": "Weekly check-in with the client.",
                "taskDate": "2025-01-06",
                "category": "Client Relations"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "password": "123",
        "email": "employee2@example.com",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "System Check",
                "taskDescription": "Perform a full system diagnostic.",
                "taskDate": "2025-01-03",
                "category": "IT"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Backup Data",
                "taskDescription": "Ensure all data is backed up to the server.",
                "taskDate": "2025-01-04",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Software",
                "taskDescription": "Install the latest software update on all machines.",
                "taskDate": "2025-01-05",
                "category": "IT"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Vihaan",
        "password": "123",
        "email": "employee3@example.com",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest code commits.",
                "taskDate": "2025-01-03",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix the issues reported by QA.",
                "taskDate": "2025-01-04",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "API Integration",
                "taskDescription": "Integrate new APIs for user authentication.",
                "taskDate": "2025-01-05",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Myra",
        "password": "123",
        "email": "employee4@example.com",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Presentation Prep",
                "taskDescription": "Prepare slides for the client presentation.",
                "taskDate": "2025-01-06",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Review",
                "taskDescription": "Review the progress of team projects.",
                "taskDate": "2025-01-07",
                "category": "Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Client Feedback",
                "taskDescription": "Collect feedback from the client.",
                "taskDate": "2025-01-08",
                "category": "Client Relations"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Ananya",
        "password": "123",
        "email": "employee5@example.com",
        "taskCount": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Customer Feedback",
                "taskDescription": "Collect feedback from recent surveys.",
                "taskDate": "2025-01-04",
                "category": "Customer Relations"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Product Launch",
                "taskDescription": "Plan the upcoming product launch event.",
                "taskDate": "2025-01-05",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Marketing Strategy",
                "taskDescription": "Develop a new marketing strategy for the year.",
                "taskDate": "2025-01-06",
                "category": "Marketing"
            }
        ]
    }
];



const admin = [

    {
        "id": 1,
        "password": "123",
        "email": "admin@example.com"
    },


]

// Here we create one functin setLocalStorage
export const setLocalStorage = () => {
    //localStorage.setItem() --> is method to set data to local storage  here we set employee data 
    localStorage.setItem('employees', JSON.stringify(employees))
    //Here we set admin data 
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const Empdata = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }

}