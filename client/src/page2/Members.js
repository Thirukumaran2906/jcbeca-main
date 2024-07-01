import React from 'react';
import CSS from './page2.module.css'
import Logo from '../images/Logo.jpg'

function ChiefEditor() {
  return (
    <div className={CSS.editorBox} id='members'>
      <h2>Chief Editor</h2>
      <img src={Logo} alt="Chief Editor" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <p>
        Cras venenatis euismod malesuada. Nullam ac erat ante. Quisque non odio lectus.
      </p>
      <p>
        Sed sit amet arcu eget ipsum faucibus efficitur non sed justo.
      </p>
    </div>
  );
}

export default ChiefEditor;
