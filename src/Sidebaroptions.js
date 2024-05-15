import React from 'react';
import './css/sidebaroptions.css';

function Sidebaroptions({ Icon, title, number, isactive }) {
  return (
    <div className={`sidebarOptions ${isactive && 'sidebarOptions--active'}`}>
      <Icon />
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  );
}

export default Sidebaroptions;
