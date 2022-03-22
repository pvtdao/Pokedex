import { useEffect, useState } from 'react';
import { evolutionAPI } from '../api/evolveAPI';
import { pokemonAPI } from '../api/pokemonAPI';
import { PokemonResponseType } from '../Schema/pokemon';

export default function useEvolutionChain(id: number | string) {
  const [loading, setLoading] = useState<boolean>(false);

  const [firstPokemon, setFirstPokemon] = useState<PokemonResponseType>();
  const [secondPokemonList, setSecondPokemonList] = useState<
    PokemonResponseType[]
  >([]);
  const [thirdPokemonList, setThirdPokemonList] = useState<
    PokemonResponseType[]
  >([]);

  const [isEvolve, setIsEvole] = useState<boolean>(true);
  const [isEvolveLv3, setIsEvoleLv3] = useState<boolean>(true);

  const getEvolutionChain = async () => {
    setLoading(true);

    try {
      const evolutionRes = await evolutionAPI.getDetail(id);

      const firstPokemon = await pokemonAPI.getDetail(
        evolutionRes.data.chain.species.name
      );

      setFirstPokemon(firstPokemon.data);

      if (evolutionRes.data.chain.evolves_to.length === 0) setIsEvole(false);
      else {
        const pokeDetailList = [];

        for (const elm of evolutionRes.data.chain.evolves_to) {
          const res = pokemonAPI.getDetail(elm.species.name);
          pokeDetailList.push(res);
        }

        const result = await Promise.all(pokeDetailList);
        const pokemonList = result.map((item) => item.data);

        setSecondPokemonList(pokemonList);

        if (evolutionRes.data.chain.evolves_to[0].evolves_to.length === 0) {
          setIsEvoleLv3(false);
        } else {
          const pokeDetaiLv3lList = [];
          for (const elmList of evolutionRes.data.chain.evolves_to) {
            for (const elm of elmList.evolves_to) {
              const res = pokemonAPI.getDetail(elm.species.name);
              pokeDetaiLv3lList.push(res);
            }
          }
          const result = await Promise.all(pokeDetaiLv3lList);
          const pokemonList = result.map((item) => item.data);
          setThirdPokemonList(pokemonList);
        }
      }
    } catch (error) {
      console.log('error: ', error);
      setLoading(false);

      return {
        loading,
        firstPokemon: null,
        secondPokemonList: [],
        thirdPokemonList: [],
        isEvolve: false,
        isEvolveLv3: false,
      };
    }

    setLoading(false);
  };

  useEffect(() => {
    getEvolutionChain();
  }, [id]);

  return {
    loading,
    firstPokemon,
    secondPokemonList,
    thirdPokemonList,
    isEvolve,
    isEvolveLv3,
  };
}
