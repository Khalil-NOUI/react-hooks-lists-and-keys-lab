import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linker = links.map((link) => <a key={link} href={`#${link}`}> {link} </a>)

  return <nav>{linker}</nav>;
}

export default NavBar;
