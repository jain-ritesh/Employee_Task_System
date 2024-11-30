import React from 'react';

const Header = (props) => {
  const handleLogOut = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg rounded-lg">
      <div>
        <h1 className="text-lg md:text-xl lg:text-2xl font-sans text-white">
          Hello, <br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">{props.data.firstName} 👋</span>
        </h1>
      </div>
      <button
        onClick={handleLogOut}
        className="bg-red-500 hover:bg-red-600 text-white font-medium text-sm md:text-base px-4 py-2 rounded-lg shadow-md transition duration-200"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
