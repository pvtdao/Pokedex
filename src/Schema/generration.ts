import {
  BlackWhite,
  Crystal,
  DiamondPearl,
  Emerald,
  FireredLeafGreen,
  Gold,
  HeartGoldSoulSilver,
  OmegarubyAlphasapphire,
  Platium,
  RedBlue,
  RubySapphire,
  Silver,
  UltraSunUltraMoon,
  Xy,
  Yellow,
} from './color';
import { IconSchema } from './common';

export type GenerationISchema = {
  'red-blue': RedBlue;
  yellow: Yellow;
};

export type GenerationIISchema = {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
};

export type GenerationIIISchema = {
  emerald: Emerald;
  'firered-leafgreen': FireredLeafGreen;
  'ruby-sapphire': RubySapphire;
};

export type GenerationIVSchema = {
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': HeartGoldSoulSilver;
  platium: Platium;
};

export type GenerationVSchema = {
  'black-white': BlackWhite;
};

export type GenerationVISchema = {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  'x-y': Xy;
};

export type GenerationVIISchema = {
  icons: IconSchema;
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
};

export type GenerationVIIISchema = {
  icons: IconSchema;
};
