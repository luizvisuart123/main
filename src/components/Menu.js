// Menu.js

import React from 'react';
import '../styles/estilomenu.css'; // Importe o arquivo CSS

const Menu = () => {
  return (
    <header>
      <nav>
        <ul className="menu">
          <li><a href="/">Início</a></li>
          <li><a href="#">Calcula Consumo Água</a></li>
          <li><a href="#">Calcula IMC</a></li>
          <li><a href="#">Integrantes</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;

