import { IUser } from 'app/core/user/user.model';

export const enum Status {
  REDPOINT = 'REDPOINT',
  FLASH = 'FLASH',
  INPROGRESS = 'INPROGRESS',
  ONSIGHT = 'ONSIGHT'
}

export interface IProject {
  id?: number;
  name?: string;
  grade?: string;
  status?: Status;
  user?: IUser;
}

export class Project implements IProject {
  constructor(public id?: number, public name?: string, public grade?: string, public status?: Status, public user?: IUser) {}
}
