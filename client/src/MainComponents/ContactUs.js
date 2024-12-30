import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactUs = () => {
  return (
    <div className="w-[90%] mx-auto md:w-[80%]">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.406894185975!2d80.21261740403212!3d12.788135050168158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52509116b4ba75%3A0x94d4211ea4900d05!2sKelambakkam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1723396787024!5m2!1sen!2sin"
            style={{
              width: '100%',
              height: '450px',
              border: 0,
              borderRadius: '10px',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="md:w-1/2 bg-[#03396c] p-6 md:p-8 rounded-lg shadow-lg text-left text-white flex flex-col justify-center min-h-[450px]">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Contact Us</h2>
          <h2 className="text-xl md:text-1xl font-bold mb-3">Publisher</h2>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-[#ffd700] text-xl" />
              <div className="text-justify">

                JKRMS Publications <br />
                Dr Karthikeyan M V <br></br>
                2/297, MADHA KOVIL STREET <br />
                KELAMBAKKAM, KANCHIPURAM  DISTRICT <br />
                CHENNAI,
                TAMILNADU - 603103
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#ffd700] text-xl" />
              <a href="tel:+918610143762" className="text-red-500 hover:text-red-700 text-sm md:text-base">
                +91 86101 43762
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#ffd700] text-xl" />
              <a href="mailto:admin@jcbeca.com" className="text-red-500 hover:text-red-700 text-sm md:text-base">
                admin@jcbeca.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#ffd700] text-xl" />
              <a href="mailto:jcbecapublications@gmail.com" className="text-red-500 hover:text-red-700 text-sm md:text-base">
                jcbecapublications@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-[#03396c] p-6 md:p-8 rounded-lg shadow-lg text-left text-white flex flex-col justify-center min-h-[450px]">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Contact Us</h2>
          <h2 className="text-xl md:text-1xl font-bold mb-3">Chief - Editor</h2>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-[#ffd700] text-xl" />
              <div className="text-justify">
                Dr Karthikeyan M V <br />
                JKRMS PUBLICATIONS<br />
                2/297, MADHA KOVIL STREET <br />
                KELAMBAKKAM, KANCHIPURAM DISTRICT <br />
                CHENNAI,
                TAMILNADU - 603103
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#ffd700] text-xl" />
              <a href="tel:+918610143762" className="text-red-500 hover:text-red-700 text-sm md:text-base">
                +91 86101 43762
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#ffd700] text-xl" />
              <a href="mailto:jcbecapublications@gmail.com" className="text-red-500 hover:text-red-700 text-sm md:text-base">
                jcbecapublications@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#03396c] p-4 rounded-lg shadow-lg text-left text-white flex flex-col justify-center h-[180px]">
          <h2 className="text-lg md:text-xl font-bold mb-3">Research Paper Format</h2>
          <div className="text-justify text-sm md:text-base">
            Download it from here
            <a target='_blank' href='https://user-jcbeca.s3.us-east-1.amazonaws.com/JCBECA_ARTICLE_TEMPLATE.docx' className="text-red-500 hover:text-red-700"> Click here</a>
          </div>
        </div>
        <div className="bg-[#03396c] p-4 rounded-lg shadow-lg text-left text-white flex flex-col justify-center h-[180px]">
          <h2 className="text-lg md:text-xl font-bold mb-3">Copyright Permission Form</h2>
          <div className="text-justify text-sm md:text-base">
            Download it from here
            <a target='_blank' href='https://user-jcbeca.s3.us-east-1.amazonaws.com/JCBECA_copy_right_transfer_form.docx' className="text-red-500 hover:text-red-700"> Click here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
