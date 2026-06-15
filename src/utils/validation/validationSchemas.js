import * as yup from 'yup';
import CONSTANTS from '../../constants';

const {
  FORM: { MAX_LENGTH, MIN_LENGTH },
} = CONSTANTS;

export const TASK_VALIDATION_SCHEMA = yup.object({
  taskText: yup
    .string()
    .trim()
    .required('Task is required')
    .min(MIN_LENGTH, `Minimum ${MIN_LENGTH} characters required`)
    .max(MAX_LENGTH, `Maximum ${MAX_LENGTH} characters`),
});
