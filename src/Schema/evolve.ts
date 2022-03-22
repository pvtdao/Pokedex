import { NameApiType } from './common';

export type EvolveToSchema = {
  species: NameApiType;
};

export type ChainEvolveSchema = {
  evolution_details: [];
};

export type EvolveChainResponseType = {
  baby_trigger_item: string | null;
  chain: {
    species: NameApiType;
    evolves_to: {
      species: NameApiType;
      evolves_to: {
        evolves_to: {}[];
        species: NameApiType;
      };
    }[];
  };
  id: string;
};
