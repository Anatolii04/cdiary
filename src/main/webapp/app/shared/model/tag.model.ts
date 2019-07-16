import { ISession } from 'app/shared/model/session.model';

export interface ITag {
  id?: number;
  name?: string;
  sessions?: ISession[];
}

export class Tag implements ITag {
  constructor(public id?: number, public name?: string, public sessions?: ISession[]) {}
}
