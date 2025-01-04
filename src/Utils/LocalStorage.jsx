// This is all employee data 
const employees = [
    {
        "id": 1,
        "password": "123",
        "email": "employee1@example.com",
        "tasks": [
            {
                "taskTitle": "Complete Report",
                "taskDescription": "Prepare the monthly sales report.",
                "taskDate": "2025-01-04",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },


        ]
    },
    {
        "id": 2,
        "password": "123",
        "email": "employee2@example.com",
        "tasks": [
            {
                "taskTitle": "System Check",
                "taskDescription": "Perform a full system diagnostic.",
                "taskDate": "2025-01-03",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },

        ]
    },
    {
        "id": 3,
        "password": "123",
        "email": "employee3@example.com",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest code commits.",
                "taskDate": "2025-01-03",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },

        ]
    },
    {
        "id": 4,
        "password": "123",
        "email": "employee4@example.com",
        "tasks": [
            {
                "taskTitle": "Presentation Prep",
                "taskDescription": "Prepare slides for the client presentation.",
                "taskDate": "2025-01-06",
                "category": "Presentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },

        ]
    },
    {
        "id": 5,
        "password": "123",
        "email": "employee5@example.com",
        "tasks": [
            {
                "taskTitle": "Customer Feedback",
                "taskDescription": "Collect feedback from recent surveys.",
                "taskDate": "2025-01-04",
                "category": "Customer Relations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },

        ]
    }
]

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

 console.log(Empdata,admin)
   
}