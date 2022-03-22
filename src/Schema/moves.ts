import { NameApiType } from './common';
import { VersionGroupDetail } from './version';

export type MoveSchema = {
  move: NameApiType;
  version_group_details: VersionGroupDetail;
};
