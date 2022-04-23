import React from 'react';
import { Div } from './Styled';

function NavBar() {
  return (
    <Div>
    <div className='contP'>
        <a href='#info'>Sobre mi</a>
        <a href='#proyectos'>Mis proyectos</a>
        <a href='#contacto'>Contacto</a>
    </div>
    </Div>
  );
};

export default NavBar;
     