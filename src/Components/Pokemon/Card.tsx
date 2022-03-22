import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonResponseType } from '../../Schema/pokemon';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';
import BadgeType from '../Common/BadgeType';

type CardPokemoHomePropsType = {
  dataPokemon: PokemonResponseType;
};

function Card(props: CardPokemoHomePropsType) {
  const { dataPokemon } = props;
  const navigate = useNavigate();

  const id = `${dataPokemon.id}`;

  const { types } = dataPokemon;
  const pokeType = types[0].type.name;

  const handleSeeDetail = React.useCallback((name: string | number) => {
    navigate(`/pokemons/${name}`);
  }, []);

  return (
    <div
      onClick={(name) => handleSeeDetail(dataPokemon.name ?? dataPokemon.id)}
      className='select-none min-h-[250px] bg-white p-3 rounded-xl md:w-52 lg-w-full w-full  cursor-pointer border-[0.5px] border-semiblack group'
    >
      <div
        className={`group-hover:bg-${pokeType} flex justify-center duration-150 bg-whitesmoke max-h-[200px]`}
      >
        <img
          src={
            dataPokemon.sprites.other.dream_world.front_default ??
            dataPokemon.sprites.front_default ??
            dataPokemon.sprites.other['official-artwork'].front_default
          }
          className='min-h-[200px] max-h-[200px] object-contain p-5'
          alt={dataPokemon.name}
        />
      </div>
      <p className='text-[12px] leading-4 mt-1'>#{id}</p>
      <p className='text-base text-left truncate text-black font-semibold mt-2'>
        {upperCaseFirstLetter(dataPokemon?.name)}
      </p>
      <div className='mt-[5px]'>
        {dataPokemon.types.map((type, index) => {
          return <BadgeType key={index} type={type.type.name} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(Card);
