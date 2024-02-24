import React from 'react';

const ServicesPage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Service 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            sagittis quam. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Service 2</h2>
          <p className="text-gray-600">
            Nullam nec risus convallis, pulvinar nisl vel, eleifend leo. In
            dapibus eros lectus, in pretium sapien luctus et. Cras id leo sed
            urna ultrices tincidunt.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Service 3</h2>
          <p className="text-gray-600">
            Etiam nec libero facilisis, tincidunt urna et, eleifend ante. Nunc
            dignissim lectus in nunc luctus, non malesuada leo efficitur. Ut
            tincidunt, mauris a luctus viverra, lorem lectus tincidunt nulla.
          </p>
        </div>
      </div>

      {/* Add more service items as needed */}
    </div>
  );
};

export default ServicesPage;