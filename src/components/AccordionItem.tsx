import React, { useState } from 'react';
import type { TemaConocimiento } from '../types';

interface AccordionItemProps {
  item: TemaConocimiento;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="accordion-button-style"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{item.titulo}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div
          className="accordion-content-style"
          dangerouslySetInnerHTML={{ __html: item.contenido }} // Use with caution, ensure content is trusted
        />
        /*
        NOTE: Using dangerouslySetInnerHTML is a direct migration path but can be risky if the HTML content is not sanitized or controlled.
        A safer approach would be to parse the HTML content into React elements or structure the 'contenido' as JSON/JSX.
        For this migration, we'll stick to the direct approach.
        */
      )}
    </div>
  );
};

export default AccordionItem;