import React from 'react';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';

type BadgeTypeProps = {
  type: string;
  textSize?: number;
};

function BadgeType(props: BadgeTypeProps) {
  const { type, textSize } = props;
  let color = 'black';

  if (
    type === 'dark' ||
    type === 'psychic' ||
    type === 'bug' ||
    type === 'water' ||
    type === 'rock' ||
    type === 'ground' ||
    type === 'fighting' ||
    type === 'ghost' ||
    type === 'dragon' ||
    type === 'steel'
  ) {
    color = 'white';
  }

  return (
    <span
      className={`bg-${type} text-[${textSize}px] text-${color} py-[3px] px-[5px] rounded mr-[6px] border-[1px] border-semiblack select-none`}
    >
      {upperCaseFirstLetter(type)}
    </span>
  );
}

export default React.memo(BadgeType);
