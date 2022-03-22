import { NameApiType } from './common';
import {
  GenerationISchema,
  GenerationIISchema,
  GenerationIIISchema,
  GenerationIVSchema,
  GenerationVSchema,
  GenerationVISchema,
  GenerationVIISchema,
  GenerationVIIISchema,
} from './generration';

export type VersionSchema = NameApiType;

export type VersionDetailSchema = {
  rarity: number;
  version: NameApiType;
};

export type VersionGroupDetail = {
  level_learned_at: number;
  version_group: NameApiType;
  move_learn_method: NameApiType;
};

export type VersionPokemonSchema = {
  'generation-i': GenerationISchema;
  'generation-ii': GenerationIISchema;
  'generation-iii': GenerationIIISchema;
  'generation-iv': GenerationIVSchema;
  'generation-v': GenerationVSchema;
  'generation-vi': GenerationVISchema;
  'generation-vii': GenerationVIISchema;
  'generation-viii': GenerationVIIISchema;
};
