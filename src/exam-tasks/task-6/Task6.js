import React, { useState, useEffect } from 'react';


function Task6() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json();
        setData(result)
    }

    useEffect(() => {
        fetchData()
    }, [setData])

    return (
        <div>
            <h3>Task 6</h3>
            <div>
                <h2>Table</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                    </thead>
                    <tbody>

                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{`${user.address.street}, ${user.address.city}`}</td>
                            <td>{user.phone}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}



                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Task6;

/* Task 6
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
