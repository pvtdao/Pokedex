import React from 'react';

type StatValueProps = {
  statName: string;
};

// bg - ${ statName.toLowerCase() }

function StatValue(props: StatValueProps) {
  const { statName } = props;
  return (
    <div
      className={`w-full min-h-[10px] border-[.1px]  border-semiblack mt-1`}
    ></div>
  );
}

export default StatValue;
