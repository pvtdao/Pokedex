import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pokemonAPI } from '../../api/pokemonAPI';
import appContext from '../../context/appContext';
import {
  PokemonResponseType,
  PokemonSpeciesResponseType,
} from '../../Schema/pokemon';
import { flavorTextEntriesSchema } from '../../Schema/flavor';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';
import BadgeType from '../Common/BadgeType';
import EmptyWarning from '../Common/EmptyWarning';
import Spinner from '../Common/Spinner';
import StatCol from './StatCol';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import EvolutionCard from './EvolutionCard';
import { EvolveChainResponseType } from '../../Schema/evolve';
import { evolutionAPI } from '../../api/evolveAPI';
import useEvolutionChain from '../../hooks/useEvolutionChain';
import PokemonEvolution from './PokemonEvolution';

// regirock -> No evolve
// Flareon -> Mutiple evolve lv2
// gloom -> Mutiple evolve lv3
// Wurmple

function DetailPokemon() {
  const { loading, setLoading } = useContext(appContext);
  const { name } = useParams();

  const [detail, setDetail] = useState<PokemonResponseType>();
  const [detailSpecies, setDetailSpecies] =
    useState<PokemonSpeciesResponseType>();
  const [description, setDescription] = useState<string>();

  const [evolutionChainId, setEvolutionChainId] = useState<number | string>();
  const [isError, setIsError] = useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const [pokemon] = await Promise.all([
          pokemonAPI.getDetail(name?.toLowerCase() ?? ''),
        ]);

        setDetail(pokemon.data);

        // Call pokemon species
        const detailSpecies = await pokemonAPI.getDetailSpecies(
          pokemon.data.species.name
        );

        setDetailSpecies(detailSpecies.data);

        // Get description
        detailSpecies.data.flavor_text_entries.some(
          (flavor: flavorTextEntriesSchema) => {
            if (flavor.language.name === 'en') {
              setDescription(flavor.flavor_text);
              return true;
            }
          }
        );

        // Call evolution
        const evolutionChainArr =
          detailSpecies.data.evolution_chain.url.split('/');
        const evolutionChainId =
          evolutionChainArr[evolutionChainArr.length - 2];

        setEvolutionChainId(evolutionChainId);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setLoading(false);
      }
    })();
  }, [name]);

  const imgSrc =
    detail?.sprites.other.dream_world.front_default ??
    detail?.sprites.front_default ??
    detail?.sprites.other['official-artwork'].front_default ??
    '';

  const heightFeet = detail?.height
    ? Math.round((detail?.height * 0.328084 + 0.001) * 100) / 100
    : detail?.height;

  const weightLbs = detail?.weight
    ? Math.round((detail?.weight * 0.220462 + 0.001) * 100) / 100
    : detail?.weight;

  return (
    <div className='container mx-auto lg:p-0 md:px-3 px-2 mt-12 mb-10'>
      {loading ? (
        <Spinner />
      ) : isError ? (
        <EmptyWarning />
      ) : (
        <>
          <div className='flex flex-wrap items-center justify-center'>
            <p className='font-semibold md:text-[22xp] text-[20px] text-center'>
              {upperCaseFirstLetter(detail?.name)}
            </p>
            <p className='ml-5 md:text-[22xp] md:mt-0 mt-1 text-[20px] text-gray-600'>
              #{`${detail?.id}`}
            </p>
          </div>

          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col md:min-w-[55%] md:max-w-[55%] slg:max-w-[50%] slg:min-w-[50%] lg:max-w-[40%] lg:min-w-[40%] w-full'>
              <div
                className={`mt-5 border-[.1px] border-semiblack bg-whitesmoke min-h-[300px] w-full flex p-5 rounded`}
              >
                <div
                  className={`bg-no-repeat bg-center bg-contain  w-full`}
                  style={{ backgroundImage: `url(${imgSrc})` }}
                ></div>
              </div>

              <div className='mt-5'>
                <div className='bg-darkgray border-[.1px] border-semiblack min-h-[200px] min-w-[200px] rounded px-3 py-3'>
                  <p className='text-[14px] font-semibold mb-2'>Stats</p>
                  <div className='grid grid-cols-[repeat(6, 1fr)] gap-2 justify-items-center auto-cols-fr grid-flow-col '>
                    {detail?.stats.map((stat, index) => {
                      return <StatCol statData={stat} key={index} />;
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className=' mt-5  md:ml-5  w-full bg-[whitesmoke] border-[.1px] border-semiblack relative'>
              <div className=' h-full w-full font-normal p-5 inline-block rounded'>
                <div className='flex flex-col'>
                  <div className='flex-1 md:flex-none flex flex-col justify-center'>
                    <p className='font-bold text-black text-[16px]'>
                      Description:
                    </p>
                    <p className='mt-1 text-[16px]'>{description}</p>
                  </div>
                  <div className='flex-1 md:flex-none flex items-center mt-3'>
                    <p className='font-bold text-black text-[16px]'>Height:</p>
                    <p className='ml-1 text-[16px]'>{heightFeet} Ft</p>
                  </div>
                  <div className='flex-1 md:flex-none flex items-center mt-3'>
                    <p className='font-bold text-black text-[16px]'>Weight:</p>
                    <p className='ml-1 text-[16px]'>{weightLbs} Lbs</p>
                  </div>
                  <div className='flex-1 md:flex-none flex items-center mt-3'>
                    <p className='font-bold text-black text-[16px]'>Color:</p>
                    <p className='ml-1 text-[16px]'>
                      {upperCaseFirstLetter(detailSpecies?.color?.name)}
                    </p>
                  </div>
                  <div className='flex-1 md:flex-none flex items-center mt-3'>
                    <p className='font-bold text-black text-[16px]'>Habitat:</p>
                    <p className='ml-1 text-[16px]'>
                      {upperCaseFirstLetter(detailSpecies?.habitat?.name) ||
                        '_'}
                    </p>
                  </div>
                </div>

                <div className='mt-3 '>
                  <p className='font-bold mb-1 text-black text-[16px]'>
                    Abilities:
                  </p>
                  <div className='flex flex-wrap'>
                    {detail?.abilities.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className='border-semiblack font-normal text-black px-3 py-2 border-[1px] mb-1 mr-2 rounded bg-skyblue duration-200 hover:opacity-70'
                        >
                          {upperCaseFirstLetter(item.ability.name)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className='mt-2 '>
                  <p className='font-bold mb-1 text-black text-[16px]'>Type:</p>
                  <div className='flex flex-wrap mt-3'>
                    {detail?.types.map((item, index) => {
                      return <BadgeType key={index} type={item.type.name} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {evolutionChainId ? <PokemonEvolution id={evolutionChainId} /> : ''}
        </>
      )}
    </div>
  );
}

export default React.memo(DetailPokemon);
