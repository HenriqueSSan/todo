import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import theSunIcon from './assets/icon-sun.svg';

export function Header() {
  const [theme, setTheme] = useState('dark');

  const dispatch = useDispatch();

  function handleToggleTheme() {
    const html = document.querySelector('html');
    if (theme === 'dark') {
      html?.removeAttribute('data-mode');
      setTheme('light');
    } else {
      html?.setAttribute('data-mode', 'dark');
      setTheme('dark');
    }
  }

  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-mode', 'dark');
  }, []);

  return (
    <header>
      <div className="h-[320px] bg-header-desktop-light-image dark:bg-header-desktop-dark-image">
        <div className="mx-auto max-w-[620px] pt-[120px]">
          <div className="w-100 flex items-center justify-between">
            <h1 className="text-[2.4rem] font-bold leading-none tracking-[3px] text-common-white">
              TODO
            </h1>
            <button type="button" onClick={handleToggleTheme}>
              <img src={theSunIcon} alt="" />
            </button>
          </div>
          <div className="w-100 mt-6">
            <Formik
              initialValues={{ title: '', checked: false }}
              onSubmit={(values, { resetForm }) => {
                dispatch({ type: 'ADD_TODO', payload: values.title });

                resetForm({
                  isSubmitting: true,
                });
              }}
            >
              <Form>
                <label
                  className="flex min-h-[64px] items-center gap-x-3 rounded-[10px] py-3 px-3 dark:bg-dark-gray-700"
                  htmlFor="field-todo-title#id"
                  aria-label="Created new Todo"
                >
                  <div className="h-[36px] w-[36px] rounded-full border border-dark-gray-400">
                    <label htmlFor="field-todo-check#id">
                      <Field
                        id="field-todo-check#id"
                        name="checked"
                        className="hidden"
                        checked="false"
                      />
                    </label>
                  </div>
                  <Field
                    className="h-[36px] flex-grow px-4  text-common-white placeholder:text-common-white dark:bg-dark-gray-700"
                    id="field-todo-title#id"
                    name="title"
                    placeholder="Created new Todo..."
                  />
                </label>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </header>
  );
}
