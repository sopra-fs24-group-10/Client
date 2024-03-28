import React from "react";
import logo from "EasyEatsLogo.svg";


export default function Main() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center', // Centers children horizontally in the container
      alignItems: 'flex-end', // Aligns children to the bottom of the container
      height: '100vh', // Sets the container's height to fill the viewport height
      paddingBottom: '120px', // Adds some space at the bottom inside the container
    }}>
      <img src={logo} alt="EasyEats Logo" style={{
        maxWidth: '50%',
        height: 'auto',
      }} />
    </main>
  );
}
