import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="bg-white border-gray-400 dark:bg-gray-900 mb-6">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        className="dark"
                        src="/logo.png"
                        alt="Next.js logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Todo App</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href={"/tasks/addtask"}>
                                <div className="text-white hover:border-b hover:text-blue  focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2">
                                    <p className="">CRUD</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/user/signin"}>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <p className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">Sign in</p>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/user/signup"}>
                                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <p className="block capitalcase py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">Sign up</p>
                                </button>
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}