import Header from './components/Header';
import { List } from './components/List';

function App() {
  return (
    <div className="pb-[120px]" id="todo-top#id">
      <Header />
      <List />

      <a
        className="fixed bottom-7 right-7 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-light-gray-400 transition duration-300 ease-in hover:bg-secondary dark:bg-dark-gray-300 dark:hover:bg-secondary"
        href="#todo-top#id"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          className="fill-light-gray-500 dark:fill-dark-gray-100"
          viewBox="0 2.4 24 24"
        >
          <path
            className="fill-light-gray-500 dark:fill-dark-gray-100"
            fill="currentColor"
            d="M12 22.4q-.425 0-.713-.287T11 21.4V10.225L6.125 15.1q-.3.3-.713.3t-.712-.3q-.3-.3-.3-.7t.3-.7l6.6-6.6q.15-.15.325-.212T12 6.825q.2 0 .388.063t.312.212l6.6 6.6q.3.3.3.7t-.3.7q-.3.3-.713.3t-.712-.3L13 10.225V21.4q0 .425-.288.713T12 22.4Z"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;
