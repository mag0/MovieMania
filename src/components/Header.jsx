
const Header = () => {
  return (
    <div>
    <nav className="bg-gray-900 border-gray-800 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MovieMania</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black">
                    <li>
                        <a href="#" className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-white md:p-0 md:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Series</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

  )
}

export default Header