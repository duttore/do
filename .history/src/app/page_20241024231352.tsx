import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#2c3e50] py-5">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <div className="logo text-white text-2xl font-bold">
              <a href="#">Stefano Ricci</a>
            </div>
            <ul className="flex space-x-6 text-white">
              <li>
                <a href="#servizi" className="hover:text-[#1abc9c] transition duration-300">
                  <FontAwesomeIcon icon={faGear} /> Servizi
                </a>
              </li>
              <li>
                <a href="#chi-sono" className="hover:text-[#1abc9c] transition duration-300">
                  <FontAwesomeIcon icon={faUser} /> Chi Sono
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-[#1abc9c] transition duration-300">
                  <FontAwesomeIcon icon={faEnvelope} /> Contatti
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero relative py-32 text-center text-white">
        <Image 
          src="https://www.milanimacchinepercucire.com/wp-content/uploads/2024/02/milani_shop_desio-1024x575.webp" 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0"
        />
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl font-bold leading-tight">Stefano Ricci - Assistenza Professionale per Macchine da Cucire</h1>
          <p className="text-lg mt-4 max-w-lg mx-auto">
            Riparazioni rapide ed efficienti per garantire il massimo delle prestazioni della tua macchina da cucire.
          </p>
          <a href="#servizi" className="mt-6 inline-block bg-[#1abc9c] text-white py-3 px-8 rounded hover:bg-[#16a085] transition duration-300 shadow-lg">
            Scopri i servizi
          </a>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#2c3e50]">I miei servizi</h2>
          <div className="flex justify-between space-x-6">
            <div className="bg-white p-8 shadow-lg rounded-lg text-center transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Riparazioni</h3>
              <p className="text-gray-500">
                Riparazioni complete per ogni tipo di macchina da cucire, meccanica o elettronica.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg text-center transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Manutenzione</h3>
              <p className="text-gray-500">
                Controllo e manutenzione preventiva per mantenere la macchina in condizioni ottimali.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg text-center transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Consulenza</h3>
              <p className="text-gray-500">
                Consulenza personalizzata per l&apos;acquisto di nuove macchine da cucire e accessori.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Sono Section */}
      <section id="chi-sono" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#2c3e50]">Chi Sono</h2>
          <p className="text-lg text-gray-600">
            Mi chiamo Stefano Ricci e da oltre 20 anni offro assistenza e riparazione di macchine da cucire. La mia esperienza garantisce servizi di alta qualità.
          </p>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#2c3e50]">Contattami</h2>
          <p className="text-lg text-gray-600">Per richiedere informazioni o prenotare un appuntamento, puoi contattarmi per telefono.</p>
          <div className="text-lg font-bold mt-6">
            <p>Telefono: +39 334 315 6903</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c3e50] py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Stefano Ricci - Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  );
}
