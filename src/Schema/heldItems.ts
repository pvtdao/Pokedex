import { ItemSchema } from './items';
import { VersionDetailSchema } from './version';

export type HeldItemSchema = {
  item: ItemSchema;
  version_details: VersionDetailSchema;
};
