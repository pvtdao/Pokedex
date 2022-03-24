import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NameApiType } from '../../Schema/common';
import { TypeSchema } from '../../Schema/type';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';
import BadgeType from '../Common/BadgeType';

type EvolutionCardProps = {
  imgSrc: string;
  name?: string;
  types?: TypeSchema[];
  id?: number;
};

function EvolutionCard(props: EvolutionCardProps) {
  const navigate = useNavigate();

  const handleSeeDetail = React.useCallback((name: string | number) => {
    navigate(`/pokemons/${name}`);
  }, []);

  const typeName = props.types ? props.types[0].type.name : 'white';

  return (
    <>
      <div className='min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] rounded-[50%] border-[1px] border-white bg-white p-1 flex'>
        <div
          onClick={(name) => handleSeeDetail(props.name ?? '')}
          className={`cursor-pointer hover:background-fire duration-150 rounded-[50%] border-[1px] min-w-full max-w-full min-h-full max-h-full p-1 border-white bg-dimgray select-none`}
        >
          <img
            className='min-w-full max-w-full min-h-full max-h-full object-contain p-5'
            alt='test'
            src={props.imgSrc}
          />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-3'>
        <div className='flex items-center'>
          <p className='text-[18px] mr-[10px] font-normal'>
            {upperCaseFirstLetter(props.name) || '_'}
          </p>
          <p className='text-gray-400 text-[18px]'>#{props.id}</p>
        </div>
        <div className='mt-[10px]'>
          {props.types?.map((type, index) => {
            return <BadgeType key={index} type={type.type.name} />;
          })}
        </div>
      </div>
    </>
  );
}

export default EvolutionCard;
