import { Field, Form, Formik, FormikConfig, FormikProps } from 'formik';
import { useDispatch } from 'react-redux';

export function $Formulary() {
  const dispatch = useDispatch();

  function handleOnSubtmit(values, { resetForm }: any) {
    dispatch({ type: 'ADD_TODO', payload: values.title });
  }

  return (
    <div className="w-100 mt-6">
      <Formik
        initialValues={{ title: '', checked: false }}
        onSubmit={handleOnSubtmit}
      >
        <Form>
          <label
            className="flex min-h-[64px] items-center gap-x-3 rounded-[10px] bg-light-gray-100 py-3 px-3 dark:bg-dark-gray-600"
            htmlFor="field-todo-title#id"
            aria-label="Created new Todo"
          >
            <Field
              className="h-[36px] flex-grow bg-light-gray-100 px-4 text-light-gray-500 outline-none placeholder:text-light-gray-500 dark:bg-dark-gray-600 dark:text-dark-gray-100"
              id="field-todo-title#id"
              name="title"
              placeholder="Created new Todo..."
            />
          </label>
        </Form>
      </Formik>
    </div>
  );
}
