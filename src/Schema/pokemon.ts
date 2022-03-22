import { AbilitySchema } from './ability';
import { NameApiType } from './common';
import { flavorTextEntriesSchema } from './flavor';
import { FormDescriptionSchma, formPokemonSchema } from './form';
import { GameIndiceSchema } from './gameIndices';
import { HeldItemSchema } from './heldItems';
import { MoveSchema } from './moves';
import { SpritesSchema } from './sprites';
import { StatsSchema } from './stats';
import { PastTypeSchema, TypeSchema } from './type';

export type PokemonResponseType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: AbilitySchema[];
  forms: formPokemonSchema[];
  game_indices: GameIndiceSchema[];
  held_items: HeldItemSchema[];
  location_area_encounters: string;
  moves: MoveSchema[];
  past_types: PastTypeSchema[];
  sprites: SpritesSchema;
  species: NameApiType;
  stats: StatsSchema[];
  types: TypeSchema[];
};

export type PokemonSpeciesResponseType = {
  has_gender_differences: boolean;
  form_descriptions: FormDescriptionSchma[];
  color: NameApiType;
  habitat: NameApiType;
  evolves_from_species: NameApiType;
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: flavorTextEntriesSchema[];
};
