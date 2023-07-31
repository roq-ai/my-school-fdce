import { ParentInterface } from 'interfaces/parent';
import { StaffMemberInterface } from 'interfaces/staff-member';
import { TeacherInterface } from 'interfaces/teacher';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;
  created_at: string;
  updated_at: string;

  parent: ParentInterface[];
  staff_member: StaffMemberInterface[];
  teacher: TeacherInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
