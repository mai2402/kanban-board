import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     title: Yup.string().required('Title is required'),
    name: Yup.string().required('Name is required'),
    age: Yup.number()
      .nullable()
      .transform((value, originalValue) => (originalValue === "" ? null : value))
      .required('Age is required')
      .min(0, 'Age must be a positive number')
      .integer('Age must be an integer'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Phone number is not valid')
      .required('Phone number is required'),
  });