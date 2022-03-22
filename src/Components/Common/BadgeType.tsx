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
      className={`bg-${type} text-${color}  rounded border-semiblack select-none`}
      style={{
        padding: '3px 5px',
        marginRight: '6px',
        borderWidth: '1px',
      }}
    >
      {upperCaseFirstLetter(type)}
    </span>
  );
}

export default React.memo(BadgeType);
