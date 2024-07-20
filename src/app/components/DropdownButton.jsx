import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';

const DropdownButton = ({ title = "Menu", data }) => {
  return (
    <FlyoutLink title={title} FlyoutContent={data} />
  );
};

const FlyoutLink = ({ title, FlyoutContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const changeOpenState = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeStart', changeOpenState);

    return () => {
      router.events.off('routeChangeStart', changeOpenState);
    };
  }, []);

  return (
    <div className="relative inline-block" onClick={toggleDropdown}>
      <div
        className="flex justify-center items-center gap-2 cursor-pointer bg-white py-1 px-3 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100"
        style={{ width: '120px' }}
      >
        <span className="text-sky-900 font-semibold text-md">
          {title}
        </span>
        {isOpen ? (
          <FaChevronUp style={{ color: '#6B7280', fontSize: '16px' }} />
        ) : (
          <FaChevronDown style={{ color: '#6B7280', fontSize: '16px' }} />
        )}
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-10" style={{ width: '120px' }}>
          <FlyoutContentComponent options={FlyoutContent} />
        </div>
      )}
    </div>
  );
};

const FlyoutContentComponent = ({ options }) => {
  return (
    <div className="py-2">
      {options.map(({ name, link }, index) => (
        <Link href={link} key={index}>
          <span className="block text-sm hover:bg-gray-100 px-6 py-1.5 text-gray-900">
            {name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default DropdownButton;
