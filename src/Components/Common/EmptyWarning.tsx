import React from 'react';

function EmptyWarning() {
  return (
    <div className='bg-white border-[1px] min-h-[100px] border-semiblack p-2 w-full flex items-center justify-center'>
      <p className='bg-white p-2 rounded text-center w-full text-[14px]'>
        No data to display
      </p>
    </div>
  );
}

export default EmptyWarning;
