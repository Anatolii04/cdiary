import { Moment } from 'moment';
import { IProject } from 'app/shared/model/project.model';
import { ITag } from 'app/shared/model/tag.model';

export interface ISession {
  id?: number;
  thoughts?: any;
  date?: Moment;
  project?: IProject;
  tags?: ITag[];
}

export class Session implements ISession {
  constructor(public id?: number, public thoughts?: any, public date?: Moment, public project?: IProject, public tags?: ITag[]) {}
}
