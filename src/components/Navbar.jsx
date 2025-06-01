import { useState } from "react"
import { linksMenu, linksRedes} from "../utils/arrayLinks"
import nuezParaLogo from "../assets/nuezParaLogo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <nav className="w-full bg-amber-200 text-brown-900 shadow-md">

      {/* vista de escritorio */}
      <div className="flex justify-between items-center sm:px-12 sm:py-3 px-4 py-2">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
        
            srcSet={nuezParaLogo}
            alt="logo nueces"
            className="w-[50px]"
          />
          <p className="font-bold text-2xl">Nueces LOLO</p>
        </div>

        {/* BOTÓN HAMBURGUESA (celular) */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
        </button>

        {/* LINKS NAV + REDES (modo pc escritorio) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-4">
            {linksMenu.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-sm hover:text-yellow-500 transition hover:scale-110 inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex space-x-4">
            {linksRedes.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition hover:scale-125"
                >
                  <i className={`${link.icon} text-lg`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* vista para telefonos celulares */}
      <div className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-4 py-2">
          {linksMenu.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                href={link.link}
                className="text-sm hover:text-yellow-500 transition hover:scale-110 inline-block"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 px-4 py-2 border-t border-yellow-700 justify-center">
          {linksRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                <i className={`${link.icon} text-lg`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;