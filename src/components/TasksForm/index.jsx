import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addTask } from '../../store/slices/tasksSlice';
import { TASK_VALIDATION_SCHEMA } from '../../utils/validation/validationSchemas';
import CONSTANTS from '../../constants';

const {
  FORM: { MAX_LENGTH, INITIAL_VALUE },
} = CONSTANTS;

const initialValues = {
  taskText: INITIAL_VALUE,
};

function TasksForm () {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTask(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TASK_VALIDATION_SCHEMA}
    >
      <Form>
        <Field
          name='taskText'
          type='text'
          placeholder='Enter your task text'
          maxLength={MAX_LENGTH}
          autoFocus
        />
        <ErrorMessage name='taskText' component='div' />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  );
}

export default TasksForm;
