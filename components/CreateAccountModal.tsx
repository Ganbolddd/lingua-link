// CreateAccountModal.tsx

import React from 'react';

interface Props {
  onClose: () => void;
}

const CreateAccountModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        {/* Add your content for the Create Account modal here */}
        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default CreateAccountModal;