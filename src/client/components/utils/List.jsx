import React from 'react';
export default function List({ children }) {
    return (
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {children}
      </div>
    )
  }