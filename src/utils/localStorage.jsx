
const employees = [
  {
    "id": 1,
    "firstName": "Rajesh",
    "lastName": "Sharma",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounter": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Inventory Update",
        "buttonTitle": "Mark as Completed",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskDescription": "Update inventory records",
        "taskDate": "2024-10-15",
        "category": "Inventory"
      },
      {
        "taskNumber": 2,
        "taskTitle": "Marketing Strategy Development",
        "buttonTitle": "Start Task",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDescription": "Develop marketing strategy",
        "taskDate": "2024-10-18",
        "category": "Marketing"
      },
      {
        "taskNumber": 3,
        "taskTitle": "Sales Report Preparation",
        "buttonTitle": "View Report",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskDescription": "Prepare sales report",
        "taskDate": "2024-10-20",
        "category": "Sales"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "lastName": "Patel",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounter": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Bug Fixing",
        "buttonTitle": "Resolve Issue",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDescription": "Fix bugs in project",
        "taskDate": "2024-10-22",
        "category": "Development"
      },
      {
        "taskNumber": 2,
        "taskTitle": "Documentation Writing",
        "buttonTitle": "View Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskDescription": "Write documentation",
        "taskDate": "2024-10-10",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Amit",
    "lastName": "Singh",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounter": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Client Records Update",
        "buttonTitle": "Retry Task",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskDescription": "Update client records",
        "taskDate": "2024-10-19",
        "category": "Client Management"
      },
      {
        "taskNumber": 2,
        "taskTitle": "Competitor Research",
        "buttonTitle": "Begin Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDescription": "Research competitor products",
        "taskDate": "2024-10-23",
        "category": "Research"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Pooja",
    "lastName": "Nair",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounter": {
      "active": 0,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Financial Review",
        "buttonTitle": "Start Review",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDescription": "Review financial statements",
        "taskDate": "2024-10-25",
        "category": "Finance"
      },
      {
        "taskNumber": 2,
        "taskTitle": "Event Assistance",
        "buttonTitle": "View Event Plan",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskDescription": "Assist with event planning",
        "taskDate": "2024-10-12",
        "category": "Event"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "lastName": "Choudhary",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounter": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Quality Assurance",
        "buttonTitle": "Submit Results",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskDescription": "Perform quality assurance",
        "taskDate": "2024-10-21",
        "category": "Quality Assurance"
      },
      {
        "taskNumber": 2,
        "taskTitle": "UI Component Development",
        "buttonTitle": "Start Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDescription": "Develop UI components",
        "taskDate": "2024-10-17",
        "category": "UI/UX"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Anjali",
    "lastName": "Mehta",
    "email": "admin@example.com",
    "password": "123"
  }
];




  

  export  const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export  const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return({employees,admin});
    // console.log(JSON.parse(data))
    // console.log(employees, admin)
  }