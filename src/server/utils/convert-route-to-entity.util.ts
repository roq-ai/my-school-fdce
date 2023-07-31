const mapping: Record<string, string> = {
  organizations: 'organization',
  parents: 'parent',
  'staff-members': 'staff_member',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
