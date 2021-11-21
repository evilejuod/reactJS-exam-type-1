import React from 'react';
import Button from "./Button";
import 'font-awesome/css/font-awesome.min.css';
import './Task5.css'

function Task5() {

  return (
    <div>
      <h3>Task 5</h3>
        <div className='container'>
            <i className="fa fa-twitter fa-3x" aria-hidden="true" />
            <h1 className='title'>Happening now</h1>
            <h3 className='subtitle'>Join Twitter today.</h3>

            <Button styleName='blue'  text='Sign up'/>
            <Button styleName='white' text='Log in'/>
        </div>
    </div>
  );
}

export default Task5;

/* Task 5
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
