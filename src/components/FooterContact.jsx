import React from "react";

const FooterContact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row py-8 px-4 lg:px-8 sm:px-6 gap-8">
        {/* left column */}
        <div className="flex-1 space-y-4">
          {/*<button className="bg-primary text-black px-6 py-2 rounded-md font-medium">
            Contact
          </button> */}

          <div className="text-white space-y-2">
            <p>
              <strong>Email:</strong>
              <a
                href="mailto:hello.codeware@gmail.com"
                className="text-white hover:text-primary transition-colors duration-300"
              >
                hello.codeware@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>
              <a
                href="https://wa.me/918592983978?text=Hi%20Codeware,%20I%20would%20like%20to%20discuss%20my%20project%20requirements%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                +91&nbsp;8592983978
              </a>
            </p>
            <p>
              <strong>Address:</strong> PG-1&nbsp;Nit&nbsp;Calicut,&nbsp;Kozhikode,&nbsp;India
            </p>
          </div>

        </div>

              <div className="flex-1 bg-[#292A32] justify-center items-center p-8 rounded-md">
                  <form className="flex flex-col justify-center items-center h-20 md:flex-row gap-4">
                      <input
                          type="email"
                          placeholder="hello@example.com"
                           className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button className="bg-primary text-black px-6 py-2.5 rounded-md font-medium">
                          Contact
                      </button>
                  </form>
              </div>


        
      </div>
    </>
  );
};

export default FooterContact;
