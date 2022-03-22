import axiosClient from './axiosClient';

const basePokemon = '/pokemon';

export const pokemonAPI = {
  getByOffsetLimit(limit = 0, offset = 0) {
    const url = `${basePokemon}/`;
    return axiosClient.get(url, {
      params: {
        offset,
        limit,
      },
    });
  },

  getDetail(id: string | number) {
    const url = `${basePokemon}/${id}/`;

    return axiosClient.get(url);
  },

  getDetailSpecies(id: string | number) {
    const url = `${basePokemon}-species/${id}/`;

    return axiosClient.get(url);
  },
};
