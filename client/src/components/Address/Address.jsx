import React from 'react';

const AddressCard = ({ name, address, city, state, postalCode, country }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-80">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{address}</p>
        <p className="text-gray-600 mb-2">{`${city}, ${state} ${postalCode}`}</p>
        <p className="text-gray-600 mb-2">{country}</p>
      </div>
    </div>
  );
};

export default AddressCard;
