import { VersionPokemonSchema } from "./version";

export type DreamWorldSchema = {
  front_default: string;
  front_female: string | null;
};

export type HomeSchema = {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
};

export type OfficialArtWorkSchema = {
  front_default: string;
};

export type SpritesOtherSchema = {
  dream_world: DreamWorldSchema;
  home: HomeSchema;
  'official-artwork': OfficialArtWorkSchema;
};

export type SpritesSchema = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: SpritesOtherSchema;
  versions: VersionPokemonSchema;
};
