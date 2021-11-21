import React, { useState, useEffect } from 'react';

// const dataa = 'https://jsonplaceholder.typicode.com/users';

function Task6() {

    const [data, setData] = useState('')

    useEffect(() => {
        fetchData()
    }, [setData])

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json();
        setData(result.data)
    }

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

                    {/*{data.map((item) => {*/}
                    {/*    <tr key={item.id}>{item.name}</tr>*/}
                    {/*})}*/}



                </tbody>


                    {/*{data.map((item) => {*/}
                    {/*    return (*/}
                    {/*        <tr>*/}
                    {/*            <td key={item.id}>{item.name}</td>*/}
                    {/*        </tr>*/}

                    {/*    )*/}

                    {/*})}*/}



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
