import Image from 'next/image'
import UserCard from './components/user-card'
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next/types';
import ThemeChanger from './components/theme-changer';

const users = [{
  id: 1,
  firstname: 'John',
  lastname: 'Smith',
  phone: '1234',
},{
  id: 2,
  firstname: 'billy',
  lastname: 'bob',
  phone: '23412',
}]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
      {/* <ThemeChanger /> */}
      <form className=" w-full">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Name..." required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
      </form>

      <div className="grid gap-4 grid-cols-5">
          {
            users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          }
      </div>
    </main>
  )
}
