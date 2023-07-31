import { ParentInterface } from 'interfaces/parent';
import { StaffMemberInterface } from 'interfaces/staff-member';
import { TeacherInterface } from 'interfaces/teacher';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  parent?: ParentInterface[];
  staff_member?: StaffMemberInterface[];
  teacher?: TeacherInterface[];
  user?: UserInterface;
  _count?: {
    parent?: number;
    staff_member?: number;
    teacher?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
