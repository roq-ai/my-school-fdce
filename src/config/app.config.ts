interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: ['Parent'],
  tenantRoles: ['School Administrator', 'Teacher', 'Staff Member'],
  tenantName: 'Organization',
  applicationName: 'My school',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
