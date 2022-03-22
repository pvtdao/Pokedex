import React, { useEffect, useState, useContext } from 'react';
import { pokemonAPI } from '../../api/pokemonAPI';
import { breakPoint } from '../../data/responsiveCarousel';
import { NameApiType } from '../../Schema/common';
import Card from '../Pokemon/Card';
import AppContext from '../../context/appContext';
import Spinner from '../Common/Spinner';
import { PokemonResponseType } from '../../Schema/pokemon';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { RiRefreshFill, RiRefreshLine } from 'react-icons/ri';

function Pokemon() {
  const { loading, setLoading } = useContext(AppContext);
  const [pokemonList, setPokemonList] = useState<NameApiType[]>([]);
  const [pokemonDetailLis, setPokemonDetailList] = useState<
    PokemonResponseType[]
  >([]);

  const randomNumber = React.useCallback(() => {
    return Math.floor(Math.random() * 1096);
  }, []);

  const getById = async () => {
    const pokeDetailList = [];
    setLoading(true);
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

  const fetch = React.useCallback(async () => {
    let randomOffset = randomNumber();

    setLoading(true);

    try {
      const [pokemonList] = await Promise.all([
        pokemonAPI.getByOffsetLimit(30, randomOffset),
      ]);
      setPokemonList(pokemonList.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRefresh = React.useCallback(() => {
    fetch();
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    getById();
  }, [pokemonList]);

  return (
    <div className='container mx-auto mt-10 lg:p-0 md:p-0 px-2 mb-10'>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center'>
          <p className='text-[1.4rem] font-bold'>Pokémon</p>
          <button className='ml-4 hover:animate-spin' onClick={handleRefresh}>
            <RiRefreshLine size={'26px'} />
          </button>
        </div>
        <Link
          to='/pokemons'
          className='border-black border-[1px] px-[12px] text-[14px] relative py-[8px] rounded text-black hover:text-white btn-black z-10'
        >
          See all
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <Carousel
          pagination={false}
          breakPoints={breakPoint}
          isRTL={false}
          itemsToShow={6}
        >
          {pokemonDetailLis.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Card dataPokemon={item} />
              </React.Fragment>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default React.memo(Pokemon);
