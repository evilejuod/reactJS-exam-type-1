import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 0 10px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  font-size: 15px;
  background-color: #051e28;
  color: whitesmoke;
  border: none;
  height: 35px;
  width: 325px;
  border-radius: 3px;
   :hover{
    background-color: #1DA1F2;
  }
`;

const Text = styled.p`
  margin-top: 10px;
`;

function Task3() {

    const [ inputs, setInputs ] = useState({
        name: '',
        surname: '',
        age: '',
    })

    const [msg, setMsg] = useState('')

    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { age } = inputs;
        if(age >= 18 ){
            setMsg('Dėkojame, kad užsiregistravote')
        }
        if(age <= 17 ){
            setMsg('Dėja, registracija negalima. Registruotis galima tik nuo 18 metų')
        }
    }

    useEffect(() => {
        const { age } = inputs;
        if (age === '') return setInputs(true)

    }, [])

  return (
    <div >
      <h3>Task 3</h3>
            <Form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    placeholder='Vardas'
                    name='name'
                    onChange={handleInputs}
                    value={inputs.name}
                />

                <Input
                    type='text'
                    placeholder='Pavardė'
                    name='surname'
                    onChange={handleInputs}
                    value={inputs.surname}
                />

                <Input
                    type='number'
                    placeholder='Amžius'
                    name='age'
                    onChange={handleInputs}
                    value={inputs.age}
                />

                <Button disabled={false} type='submit'>Pateikti</Button>
                <Text>{msg}</Text>
            </Form>

    </div>
  );
}

export default Task3;

/* TASK 3
Sukurkite forma, kurioje vartotojas galės nurodyti
- vardą
- pavardę
- amžių

Vartotojui užpildius formą ir paspaudus "Pateikti", po forma 
atsiras atsiras pasisveikinimas:
- Jei asmuo yra 18 m. ir vyresnis: "Dėkojame, kad užsiregistravote"
- Jei asmuo yra 17 m. ir jaunesnis: "Deja, registracija negalima. 
Registruotis galima tik nuo 18 metų"

Pastaba: panaudokite useState
*/
