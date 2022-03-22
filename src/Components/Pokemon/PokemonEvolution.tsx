import React, { useContext, useEffect, useState } from 'react';
import { evolutionAPI } from '../../api/evolveAPI';
import { pokemonAPI } from '../../api/pokemonAPI';
import { PokemonResponseType } from '../../Schema/pokemon';
import Spinner from '../Common/Spinner';
import EvolutionCard from './EvolutionCard';
import { AiFillCaretRight } from 'react-icons/ai';
import useEvolutionChain from '../../hooks/useEvolutionChain';
import EmptyWarning from '../Common/EmptyWarning';

type PokemonEvolutionProps = {
  id: number | string;
};

function PokemonEvolution(props: PokemonEvolutionProps) {
  const { id } = props;

  const {
    loading,
    firstPokemon,
    secondPokemonList,
    thirdPokemonList,
    isEvolve,
    isEvolveLv3,
  } = useEvolutionChain(id);

  console.log('test: ', useEvolutionChain(id));

  const imgSrc =
    firstPokemon?.sprites.other.dream_world.front_default ??
    firstPokemon?.sprites.front_default ??
    firstPokemon?.sprites.other['official-artwork'].front_default ??
    '';

  const cols = secondPokemonList.length > 4 ? 2 : 1;
  const cols_3 = thirdPokemonList.length > 4 ? 2 : 1;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        firstPokemon && (
          <div className='mt-3 border-[.1px] border-semiblack p-5 rounded bg-[url("/src/assets/image/body_gray_bg.png")] text-white'>
            <p className='text-[16px]'>Evolutions</p>
            {!isEvolve && (
              <p className='mt-1 font-[14px]'>This Pokémon does not evolve.</p>
            )}
            <div className='mt-7 flex flex-col slg:flex-row  items-center justify-between'>
              <div className='mb-[25px] md:mb-0 relative flex-1 flex flex-col items-center'>
                <EvolutionCard
                  imgSrc={imgSrc}
                  name={firstPokemon?.name}
                  id={firstPokemon?.id}
                  types={firstPokemon?.types}
                />

                {isEvolve && (
                  <AiFillCaretRight
                    size={'60px'}
                    className='absolute right-0 slg:top-[50%] slg:translate-y-[-100%] slg:translate-x-[50%] slg:left-[unset] left-[50%] translate-x-[-50%] top-[90%] translate-y-[100%] rotate-90 slg:rotate-0'
                  />
                )}
              </div>

              {secondPokemonList.length !== 0 && (
                <div
                  className={`flex-1 grid lg:grid-cols-${cols} md:grid-cols-${cols} grid-cols-1 gap-[30px] slg:mt-0 md:mt-[150px] mt-[100px]`}
                >
                  {secondPokemonList.map((item, index) => {
                    const imgSrc =
                      item?.sprites.other.dream_world.front_default ??
                      item?.sprites.front_default ??
                      item?.sprites.other['official-artwork'].front_default ??
                      '';

                    return (
                      <div
                        className='flex flex-col items-center relative'
                        key={index}
                      >
                        <EvolutionCard
                          imgSrc={imgSrc}
                          name={item?.name}
                          id={item?.id}
                          types={item?.types}
                        />

                        {isEvolveLv3 && (
                          <AiFillCaretRight
                            size={'60px'}
                            className='absolute right-0 slg:top-[50%] slg:translate-y-[-100%] slg:translate-x-[50%] slg:left-[unset] left-[50%] translate-x-[-50%] top-[90%] translate-y-[100%] rotate-90 slg:rotate-0'
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {thirdPokemonList.length !== 0 && (
                <div
                  className={`flex-1 grid lg:grid-cols-${cols_3}  md:grid-cols-${cols_3} grid-cols-1 gap-[30px] slg:mt-0 md:mt-[150px] mt-[120px]`}
                >
                  {thirdPokemonList.map((item, index) => {
                    const imgSrc =
                      item?.sprites.other.dream_world.front_default ??
                      item?.sprites.front_default ??
                      item?.sprites.other['official-artwork'].front_default ??
                      '';

                    return (
                      <div className='flex flex-col items-center' key={index}>
                        <EvolutionCard
                          imgSrc={imgSrc}
                          name={item?.name}
                          id={item?.id}
                          types={item?.types}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )
      )}
    </>
  );
}

export default React.memo(PokemonEvolution);
