import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="todoFooter">
      <p>Copyright {date.getFullYear()} | Emin Kumru</p>
    </footer>
  );
};

export default Footer;
