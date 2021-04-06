import React from 'react';

export default function Header({ name }) {
  return (
    <div
      className={
        'flex justify-between px-3 border-b border-gray-800 ' +
        (name ? 'py-1' : 'py-3')
      }
    >
      <p className="font-mono font-bold">{name}</p>
      <div className="flex items-center w-12 justify-between">
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-red-600" />
      </div>
    </div>
  );
}
