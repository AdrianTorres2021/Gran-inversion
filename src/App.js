import React from 'react';
import PersonCard from "./PersonCard";

const App = () =>  (
    <div>
      <PersonCard firstName="Juan" lastName="Valderrama" age={25} hairColor="Negro"/>
      <PersonCard firstName="Gabriel" lastName="García" age={30} hairColor="Rojo"/>
      <PersonCard firstName="Pedro" lastName="Guerra" age={35} hairColor="Marrón"/>
      <PersonCard firstName="Marcelo" lastName="Sánchez" age={27} hairColor="Amarillo"/>
    </div>
  );

export default App;
