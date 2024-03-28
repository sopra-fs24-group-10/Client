import React from "react";
import logo from "EasyEatsLogo.svg";

export default function Main() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'flex-end', // Aligns children horizontally to the right
      alignItems: 'flex-start', // Aligns children to the top of the container
      height: '100vh', // Sets the container's height to fill the viewport height
      paddingTop: '50px', // Adds some space at the top inside the container
      paddingRight: '50px', // Adds some space on the right for visual balance
    }}>
      <img src={logo} alt="EasyEats Logo" style={{
        maxWidth: '30%', // Makes the logo a bit smaller
        height: 'auto',
      }} />
    </main>
  );
}

