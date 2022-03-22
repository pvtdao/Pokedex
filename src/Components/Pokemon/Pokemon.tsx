import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { pokemonAPI } from '../../api/pokemonAPI';
import appContext from '../../context/appContext';
import { NameApiType } from '../../Schema/common';
import { PokemonResponseType } from '../../Schema/pokemon';
import Spinner from '../Common/Spinner';
import Card from './Card';
import EmptyWarning from '../Common/EmptyWarning';

function Pokemon() {
  const [searchParams] = useSearchParams();
  const { loading, setLoading } = useContext(appContext);
  const navigate = useNavigate();

  const [pokemonList, setPokemonList] = useState<NameApiType[]>([]);
  const [pokemonDetailList, setPokemonDetailList] = useState<
    PokemonResponseType[]
  >([]);

  const [totalPage, setTotalPage] = useState<number>(0);
  const [canPrevious, setCanPrevious] = useState<boolean>(true);
  const [canNext, setCanNext] = useState<boolean>(true);

  const page = searchParams.get('page');

  const getById = async () => {
    setLoading(true);
    const pokeDetailList = [];
    try {
      for (const elm of pokemonList) {
        const res = pokemonAPI.getDetail(elm.name);
        pokeDetailList.push(res);
      }

      const result = await Promise.all(pokeDetailList);

      const newPokeList = result.map((item) => {
        return item.data;
      });

      setPokemonDetailList(newPokeList);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleSetTotalPage = React.useCallback(() => {
    const total = Math.ceil(1126 / 20);
    setTotalPage(total);
  }, []);

  useEffect(() => {
    setLoading(true);

    let offset = 0;
    if (!page) offset = 0;
    else {
      offset = (+page - 1) * 20;
    }

    const fetch = async () => {
      try {
        const pokemonList = await pokemonAPI.getByOffsetLimit(20, offset);
        setPokemonList(pokemonList.data.results);

        if (!pokemonList.data.previous) setCanPrevious(false);
        else setCanPrevious(true);
        if (!pokemonList.data.next) setCanNext(false);
        else setCanNext(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [page]);

  useEffect(() => {
    getById();
  }, [pokemonList]);

  useEffect(() => {
    handleSetTotalPage();
  }, []);

  const handleNext = React.useCallback(() => {
    if (page === null) {
      navigate(`/pokemons/?page=2`);
    } else {
      navigate(`/pokemons/?page=${+page + 1}`);
    }
  }, [page]);

  const handlePrevious = React.useCallback(() => {
    if (page !== null) {
      navigate(`/pokemons/?page=${+page - 1}`);
    }
  }, [page]);

  return (
    <div className='container mx-auto mt-20 lg:p-0 md:px-3 px-2 mb-10'>
      <p className='w-full text-center font-bold text-3xl mb-2'>Pokémon</p>

      {loading ? (
        <Spinner />
      ) : pokemonDetailList.length === 0 ? (
        <EmptyWarning />
      ) : (
        <>
          <div className='mt-10 gap-4 slg:grid-cols-4 lg:grid-cols-6 md:grid-cols-3 grid-cols-1 mx-auto grid content-center justify-items-center'>
            {pokemonDetailList.map((item) => {
              return <Card key={item.id} dataPokemon={item} />;
            })}
          </div>

          <div className='flex items-center justify-between mt-10'>
            {canPrevious ? (
              <button
                onClick={handlePrevious}
                className='btn text-[16px] text-black border-[1px] px-[12px] py-[6px] rounded border-black hover:text-white btn-black z-10 relative'
              >
                Previous
              </button>
            ) : (
              <button className='text-[16px] text-gray-600 border-[1px] px-[12px] py-[6px] rounded border-gray-600 cursor-default'>
                Previous
              </button>
            )}

            <div className='flex items-center text-[20px] select-none'>
              <p>{!page ? '1' : page}</p>
              {'/'}
              <p>{totalPage}</p>
            </div>

            {canNext ? (
              <button
                type='button'
                onClick={handleNext}
                className='btn text-[16px] text-black border-[1px] px-[12px] py-[6px] rounded border-black hover:text-white btn-black z-10 relative'
              >
                Next
              </button>
            ) : (
              <button className='text-[16px] text-gray-400 border-[1px] px-[12px] py-[6px] rounded border-gray-400 '>
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Pokemon;
