import React from 'react';

const ThankYou = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      margin: 0,
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        padding: '15px',
        backgroundColor: '#ffeb3b',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        fontSize: '16px',
        fontWeight: 'normal',
        color: '#000000',
        maxWidth: '300px',
        width: '100%',
        textAlign: 'center'
      }}>
        Thank You! JCBECA will contact you soon.
      </div>
    </div>
  );
}

export default ThankYou;
