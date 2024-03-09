// Options.client.tsx
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
      <a className="text-blue-500 hover:text-blue-700" onClick={toggleModal}>
        Forgot Password?
      </a>
      <hr className="w-full border-t border-gray-400 my-4" />
      <a className="text-blue-500 hover:text-blue-700" onClick={toggleModal}>
        Create Account
      </a>
      {showModal && <CreateAccountModal onClose={toggleModal} />}
    </div>
  );
};

export default Options;