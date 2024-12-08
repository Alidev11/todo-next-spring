import Image from "next/image";
import NavBar from "./navbar";
import path from "path";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="align-center justify-items-center justflex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="mb-4"></div>
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white px-3 py-3 m-3">It's time to start organizing yourlife!</h1>
        <p className="capitalize mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Start by sign in/sign up.</p>
        <div className="mb-6"></div>

        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
          <li>
            <Link href={"/user/signin"}>
              <button type="button" className="capitalize text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <p className="block">Sign in</p>

              </button>
            </Link>
          </li>
          <li>
            <Link href={"/user/signup"}>
              <button type="button" className="capitalize text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <p className="">Sign up</p>
              </button>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
