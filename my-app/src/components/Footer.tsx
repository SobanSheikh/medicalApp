import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#9e8474] text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Copy Right. All rights reserved.</p>
    </footer>
  );
};

export default Footer;