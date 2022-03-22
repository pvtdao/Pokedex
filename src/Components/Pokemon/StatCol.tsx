import React from 'react';
import { StatsSchema } from '../../Schema/stats';
import countCol from '../../utils/countCol';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';
import StatValue from './StatValue';

type StatColProps = {
  statData: StatsSchema;
};

function StatCol(props: StatColProps) {
  const { statData } = props;
  const { stat } = statData;

  const statName = upperCaseFirstLetter(stat.name);
  const statValue = statData.base_stat;
  const numberCol = countCol(statValue);

  return (
    <div className='min-w-full max-w-full flex flex-col col-span-1'>
      <div>
        {Array.from(new Array(15 - numberCol)).map((_, index) => {
          return <StatValue statName='white' key={index} />;
        })}
        {Array.from(new Array(numberCol)).map((_, index) => {
          return <StatValue statName={statName} key={index} />;
        })}
      </div>
      <p className='text-center xs:text-[8px] md:text-[12px] sm:text-[10px] max-w-full font-bold break-words mt-2 overflow-hidden'>
        {statName.includes('-') ? statName.replace('-', ' ') : statName}
      </p>
    </div>
  );
}

export default StatCol;
