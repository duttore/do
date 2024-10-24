"use client"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWrench, faCogs, faCommentDots, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans bg-[#f8f9fa] text-[#343a40]">
      {/* Header */}
      <header className="bg-[#5465ff] py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo text-white text-3xl font-extrabold">
            <a href="#">Stefano Ricci</a>
          </div>
          <nav className="hidden md:flex space-x-6 text-white text-lg">
            <a href="#servizi" className="flex items-center hover:text-[#ffbe0b] transition duration-300">
              <FontAwesomeIcon icon={faWrench} className="mr-1" />
              Servizi
            </a>
            <a href="#chi-sono" className="flex items-center hover:text-[#ffbe0b] transition duration-300">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              Chi Sono
            </a>
            <a href="#contatti" className="flex items-center hover:text-[#ffbe0b] transition duration-300">
              <FontAwesomeIcon icon={faPhone} className="mr-1" />
              Contatti
            </a>
          </nav>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#5465ff] text-white text-lg py-4">
            <a href="#servizi" className="flex items-center block py-2 px-4 hover:bg-[#788bff]">
              <FontAwesomeIcon icon={faWrench} className="mr-1" />
              Servizi
            </a>
            <a href="#chi-sono" className="flex items-center block py-2 px-4 hover:bg-[#788bff]">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              Chi Sono
            </a>
            <a href="#contatti" className="flex items-center block py-2 px-4 hover:bg-[#788bff]">
              <FontAwesomeIcon icon={faPhone} className="mr-1" />
              Contatti
            </a>
          </div>
        )}
      </header>

      {/* WhatsApp Contact Section */}
      <section className="py-4 bg-[#f8f9fa] text-center">
        <p className="text-lg font-bold">
          <FontAwesomeIcon icon={faPhone} className="text-green-500 mr-2" />
          Contattami su WhatsApp: <span className="text-[#343a40]">+39 334 315 6903</span>
        </p>
      </section>

      {/* Hero Section */}
      <section className="hero relative py-32 text-center text-white bg-[#5465ff]">
        <Image 
          src="https://milanimacchinepercucire.com/wp-content/uploads/2024/02/milani_shop_desio-1024x575.webp" 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-50"
        />
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold leading-tight">Assistenza Professionale per Macchine da Cucire</h1>
          <p className="text-xl mt-4 max-w-lg mx-auto">
            Riparazioni rapide ed efficienti per garantire il massimo delle prestazioni della tua macchina da cucire.
          </p>
          <a href="#servizi" className="mt-6 inline-block bg-[#ffbe0b] text-[#343a40] py-3 px-8 rounded-full hover:bg-[#ffb703] transition duration-300 shadow-lg">
            Scopri i servizi
          </a>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#343a40]">I miei servizi</h2>
          <div className="flex justify-between space-x-6">
            {[
              { name: 'Riparazioni', icon: faWrench, description: 'Riparazioni complete per ogni tipo di macchina da cucire, meccanica o elettronica.' },
              { name: 'Manutenzione', icon: faCogs, description: 'Controllo e manutenzione preventiva per mantenere la macchina in condizioni ottimali.' },
              { name: 'Consulenza', icon: faCommentDots, description: 'Consulenza personalizzata per l\'acquisto di nuove macchine da cucire e accessori.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300">
                <FontAwesomeIcon icon={service.icon} className="text-[#5465ff] text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-[#343a40]">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-[#343a40] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Cosa dicono i nostri clienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Servizio eccellente e riparazione veloce. La mia macchina da cucire funziona come nuova!", name: "Maria Rossi" },
              { text: "Personale qualificato e molto disponibile. Consiglio vivamente!", name: "Luca Bianchi" },
              { text: "Ottimo servizio di consulenza per l'acquisto della mia nuova macchina da cucire.", name: "Federica Verdi" },
            ].map((testimonial, index) => (
              <div key={index} className={`bg-[#${index === 0 ? '788bff' : index === 1 ? '9bb1ff' : 'bfd7ff'}] p-6 rounded-lg shadow-lg`}>
                <p>{testimonial.text}</p>
                <p className="mt-4 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#343a40]">Contattami</h2>
          <p className="text-lg text-gray-600">Per richiedere informazioni o prenotare un appuntamento, puoi contattarmi anche su WhatsApp.</p>
          <div className="text-lg font-bold mt-6">
            <p><FontAwesomeIcon icon={faPhone} className="mr-2" />Telefono: <span className="text-[#5465ff]">+39 334 315 6903</span></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5465ff] py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Stefano Ricci - Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  );
}
