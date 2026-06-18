import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import classNames from 'classnames';
import { addTask } from '../../store/slices/tasksSlice';
import { TASK_VALIDATION_SCHEMA } from '../../utils/validation/validationSchemas';
import styles from './TasksForm.module.sass';
import CONSTANTS from '../../constants';

const {
  FORM: {
    MAX_LENGTH,
    ERROR_IDS: { INVALID_TEXT, INVALID_DEADLINE },
  },
} = CONSTANTS;

const initialValues = {
  taskText: '',
  taskDeadline: '',
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
      <Form className={styles.taskForm}>
        <label className={styles.taskLabel}>
          <Field name='taskText'>
            {({ field, meta }) => {
              const inputClassNames = classNames(styles.taskInput, {
                [styles.invalidInput]: meta.touched && meta.error,
              });

              return (
                <input
                  type='text'
                  placeholder='Enter your task text'
                  maxLength={MAX_LENGTH}
                  aria-invalid={!!(meta.touched && meta.error)}
                  aria-describedby={INVALID_TEXT}
                  autoFocus
                  {...field}
                  className={inputClassNames}
                />
              );
            }}
          </Field>

          <ErrorMessage name='taskText'>
            {msg => (
              <div id={INVALID_TEXT} className={styles.invalidMsg}>
                {msg}
              </div>
            )}
          </ErrorMessage>
        </label>

        <label className={styles.taskLabel}>
          <Field name='taskDeadline'>
            {({ field, meta }) => {
              const inputClassNames = classNames(styles.taskInput, {
                [styles.invalidInput]: meta.touched && meta.error,
              });

              return (
                <input
                  type='datetime-local'
                  aria-invalid={!!(meta.touched && meta.error)}
                  aria-describedby={INVALID_DEADLINE}
                  {...field}
                  className={inputClassNames}
                />
              );
            }}
          </Field>

          <ErrorMessage name='taskDeadline'>
            {msg => (
              <div id={INVALID_DEADLINE} className={styles.invalidMsg}>
                {msg}
              </div>
            )}
          </ErrorMessage>
        </label>

        <button
          type='submit'
          className={styles.submitBtn}
          aria-label='Add task'
        >
          Add
        </button>
      </Form>
    </Formik>
  );
}

export default TasksForm;
