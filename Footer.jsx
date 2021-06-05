import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  //siempre el tag de la funcion en return no div
  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default Footer;
