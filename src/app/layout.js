import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  const date = new Date().toLocaleString();
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {date}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
