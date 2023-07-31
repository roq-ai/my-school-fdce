import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
