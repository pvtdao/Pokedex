import React from 'react';

function EmptyWarning() {
  return (
    <div
      className='bg-white border-semiblack p-2 w-full flex items-center justify-center'
      style={{ borderWidth: '1px', minHeight: '100px' }}
    >
      <p
        className='bg-white p-2 rounded text-center w-full'
        style={{
          fontSize: '14px',
        }}
      >
        No data to display
      </p>
    </div>
  );
}

export default EmptyWarning;
