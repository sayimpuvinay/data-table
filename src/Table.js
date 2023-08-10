import React, {
    useState,
    useEffect
  } from 'react';
  import axios from 'axios';
  
  
  function App() {
    const columns = [{
        name: 'Name',
        selector: row => row.name
      },
      {
        name: "Email",
        selector: row => row.email
      },
      {
        name: "Age",
        selector: row => row.age
      }
    ];
  
    const data = [
      {
        id: 1,
        name: 'yousaf',
        email: 'yousaf@gmail.com',
        age: '23'
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: '30'
      },
      {
        id: 3,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        age: '25'
      },
      {
        id: 4,
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        age: '28'
      },
      {
        id: 5,
        name: 'Emily Brown',
        email: 'emily.brown@example.com',
        age: '22'
      },
      {
        id: 6,
        name: 'Michael Wilson',
        email: 'michael.wilson@example.com',
        age: '35'
      },
      {
        id: 7,
        name: 'Sophia Lee',
        email: 'sophia.lee@example.com',
        age: '27'
      },
      {
        id: 8,
        name: 'Daniel Martinez',
        email: 'daniel.martinez@example.com',
        age: '29'
      },
      {
        id: 9,
        name: 'Olivia Johnson',
        email: 'olivia.johnson@example.com',
        age: '26'
      },
      {
        id: 10,
        name: 'William Davis',
        email: 'william.davis@example.com',
        age: '31'
      },
      {
        id: 11,
        name: 'Ava Miller',
        email: 'ava.miller@example.com',
        age: '24'
      },
      {
        id: 12,
        name: 'Liam Jackson',
        email: 'liam.jackson@example.com',
        age: '33'
      },
      {
        id: 13,
        name: 'Emma White',
        email: 'emma.white@example.com',
        age: '21'
      },
      {
        id: 14,
        name: 'Noah Harris',
        email: 'noah.harris@example.com',
        age: '28'
      },
      {
        id: 15,
        name: 'Mia Wilson',
        email: 'mia.wilson@example.com',
        age: '29'
      },
      {
        id: 16,
        name: 'Ethan Taylor',
        email: 'ethan.taylor@example.com',
        age: '25'
      },
      {
        id: 17,
        name: 'Isabella Brown',
        email: 'isabella.brown@example.com',
        age: '27'
      },
      {
        id: 18,
        name: 'James Johnson',
        email: 'james.johnson@example.com',
        age: '32'
      },
      {
        id: 19,
        name: 'Ava Anderson',
        email: 'ava.anderson@example.com',
        age: '23'
      },
      {
        id: 20,
        name: 'Liam Miller',
        email: 'liam.miller@example.com',
        age: '30'
      }
    ];  
  }
  
  export default App;