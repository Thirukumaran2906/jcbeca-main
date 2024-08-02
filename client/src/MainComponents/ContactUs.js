import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logoImg from '../images/new-jcbeca-logo.png';

export const ContactUs = () => {
  return (
    <div className="w-[90%] mx-auto md:w-[80%]">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={logoImg}
            alt="Logo"
            className="object-contain h-64 w-full"
          />
        </div>
        <div className="md:w-1/2 bg-[#03396c] p-6 md:p-8 rounded-lg shadow-lg border-2 border-[#ffd700] text-left text-white overflow-hidden flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Contact Us</h2>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-[#ffd700] text-xl" />
              <div className="text-justify">
                Dr. M. V. KARTHIKEYAN <br />
                JKRMS Publications <br />
                2/297, II FLOOR, MADHA KOVIL STREET <br />
                KELAMBAKKAM, CHENGALPATTU DISTRICT <br />
                TAMILNADU - 603103
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#ffd700] text-xl" />
              <a href="tel:+918610143762" className="hover:text-yellow-300 transition-colors duration-300 text-sm md:text-base">
                +91 86101 43762
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#ffd700] text-xl" />
              <a href="mailto:admin@jcbeca.com" className="hover:text-yellow-300 transition-colors duration-300 text-sm md:text-base">
                admin@jcbeca.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Boxes Section */}
      <div className="mt-8 space-y-4">
        <div className="bg-[#03396c] p-4 rounded-lg shadow-lg border-2 border-[#ffd700] text-left text-white overflow-hidden h-32">
          <h2 className="text-lg md:text-xl font-bold mb-3">Research Paper Format</h2>
          <div className="text-justify text-sm md:text-base">
            Download it from here
          </div>
        </div>
        <div className="bg-[#03396c] p-4 rounded-lg shadow-lg border-2 border-[#ffd700] text-left text-white overflow-hidden h-32">
          <h2 className="text-lg md:text-xl font-bold mb-3">Copyright Permission Form</h2>
          <div className="text-justify text-sm md:text-base">
            Download it from here
          </div>
        </div>
        <div className="bg-[#03396c] p-4 rounded-lg shadow-lg border-2 border-[#ffd700] text-left text-white overflow-hidden h-32">
          <h2 className="text-lg md:text-xl font-bold mb-3">Covering Letter</h2>
          <div className="text-justify text-sm md:text-base">
            Download it from here ...click here
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
