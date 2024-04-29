'use client'; // This line is required to mark the component as a Client Component

import React, { useState } from 'react';
import CreateAccountModal from './CreateAccountModal';

const Options: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="block text-gray-700 text-sm font-bold">
        Forgot Password?
      </p>
      <hr className="w-full border-t border-gray-400 my-4" />
      <p className="block text-gray-700 text-sm font-bold cursor-pointer" onClick={toggleModal}>
        Create Account
        {showModal && <CreateAccountModal onClose={toggleModal} />}
      </p>
    </div>
  );
};

export default Options;