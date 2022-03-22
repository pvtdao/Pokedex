import { NameApiType } from './common';

export type TypeSchema = {
  slot: number;
  type: NameApiType;
};

export type PastTypeSchema = {
  generation: NameApiType;
  types: TypeSchema[];
};
