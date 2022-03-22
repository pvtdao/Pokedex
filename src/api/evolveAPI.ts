import axiosClient from './axiosClient';

const baseEvolution = '/evolution-chain';

export const evolutionAPI = {
  getDetail(id: string | number) {
    const url = `${baseEvolution}/${id}/`;

    return axiosClient.get(url);
  },
};
