import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <NavLink to="/" className="hover:text-yellow-400">
            Email Sender Tool
          </NavLink>
        </div>
        <div className="flex space-x-6">
          <NavLink to="/send-mails" className="text-gray-300 hover:text-white" activeClassName="text-yellow-400">
            Send Mails
          </NavLink>
          <NavLink to="/file-store" className="text-gray-300 hover:text-white" activeClassName="text-yellow-400">
            File Store
          </NavLink>
          <NavLink to="/create-drafts" className="text-gray-300 hover:text-white" activeClassName="text-yellow-400">
            Create Drafts
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
