import React from 'react';
import AboutUs from "./Pages/AboutUs";
import Contacts from "./Pages/Contacts";
import styled from "styled-components";
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  margin-bottom: 70px;
`;

function Task1() {
  return (
    <div>
        <h3>Task 1</h3>
      <Navbar>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contacts'>Contacts</Link>
      </Navbar>
      <Switch>
        <Route path='/about'>
          <AboutUs/>
        </Route>
        <Route path='/contacts'>
          <Contacts/>
        </Route>
      </Switch>

    </div>
  );
}

export default Task1;


/* TASK 1
task-1 aplanke, sukurkite aplanką ir pavadinkite jį "Pages". 
"Pages" aplanke turi būti sukurti dviejų puslapių komponentai 
"About Us" ir "Contacts", kurie viduje turės tik po h1 žymą,
kurioje bus randamas komponento pavadinimas (pvz. <h1>About Us</h1>)
ir mygtuką "Grįžti atgal", kurį paspaudus bus grįžtama atgal.

Tada, komponente Task1 (kuriame esate dabar) sukurkite navigaciją, 
kuri leis patekti į nurodytus "Pages" puslapių komponentus. 
Naudodami React Router DOM sukurkite SPA principo navigaciją.
"Pages" komponentų turinys turi būti atvaizduojamas Task1 komponente.
*/
