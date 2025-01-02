import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
<div className="min-h-screen flex flex-col">
  <footer className="mt-auto bg-gray-800 border-gray-700 dark:bg-gray-850 py-6">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span className="self-center text-sm font-semibold whitespace-nowrap text-white">© 2025 MovieMania. Todos los derechos reservados.</span>
      <div className="w-full md:flex md:w-auto">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-850">
          <li>
            <Link to="/" className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-white md:p-0 md:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/movies" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</Link>
          </li>
          <li>
            <Link to="/series" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Series</Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>





    </>
  )
}

export default Footer


