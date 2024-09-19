import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}


      {/* Display of Work Section */}
      <div className="bg-royalblue py-16">
        <div className="container mx-auto text-center text-ivorywhite">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gold">
            Some of My Latest Works
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-9">
            {/* Work Card 1 */}
            <div className="bg-grey rounded-lg  overflow-hidden max-w-xs">
              <div className="bg-grey-100 p-20">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src="/src/assets/work1.jpg"
                    alt="Work 1"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-gold">Project Title 1</h3>
                <p className="text-gray-700">
                  Description of the project work 1.
                </p>
              </div>
            </div>
            {/* Work Card 2 */}
            <div className="bg-grey rounded-lg shadow-lg overflow-hidden max-w-xs">
              <div className="bg-grey-100 p-4">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src="/src/assets/work2.jpg"
                    alt="Work 2"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-gold">Project Title 2</h3>
                <p className="text-gray-700">
                  Description of the project work 2.
                </p>
              </div>
            </div>
            {/* Work Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
              <div className="bg-gray-100 p-4">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src="/src/assets/work3.jpg"
                    alt="Work 3"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-gold">Project Title 3</h3>
                <p className="text-gray-700">
                  Description of the project work 3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
