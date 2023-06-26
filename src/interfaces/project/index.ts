import { TaskInterface } from 'interfaces/task';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  organization_id: string;
  project_manager_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
  project_manager_id?: string;
}
