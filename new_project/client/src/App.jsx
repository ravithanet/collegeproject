import React from 'react'
import { Menu } from '@headlessui/react';
import avatar from './assets/images/avatar.jpg';
import logo from './assets/images/ededi.svg';
import { SearchIcon, MailIcon, BellIcon, UserAddIcon, UserCircleIcon, AdjustmentsIcon, UserGroupIcon, UsersIcon, CogIcon, LogoutIcon, ChatAlt2Icon } from '@heroicons/react/outline';

import './App.css'

function App() {


  return (
    <>
      <section className='bg-white dark:bg-slate-700'>
        <aside className='h-screen w-[25%] fixed top-0 left-0'>
          <div className='top h-1/2 min-h-[400px] w-100 bg-slate-800 dark:bg-slate-600 relative'>
            <div className='logo p-5 flex justify-center'>
              <img src={logo} alt="logo" className='w-32 h-32' />
            </div>
            <div className='profile flex flex-col items-center w-3/4 h1/2 bg-white dark:bg-slate-800 absolute ml-auto mr-auto inset-x-0 -bottom-20 rounded-2xl p-5 drop-shadow-lg'>
              <div className='avatar rounded-full h-1/2 w-1/2 p-2 border-2 border-indigo-200'>
                <img src={avatar} alt='profile picture' className='rounded-full' />
              </div>
              <h1 className='text-2xl dark:text-slate-300'>Jane Doe</h1>
              <p className='border-gray-300 pb-4 dark:text-slate-400'>Member</p>
              <div className='flex flex-row justify-around border-t dark:text-slate-400'>
                <div className='text-center p-2 '>
                  <p>5</p>
                  <p>Friends</p>
                </div>
                <div className='text-center p-2'>
                  <p>3</p>
                  <p>Groups</p>
                </div>
              </div>
            </div>

          </div>

          <div className='bottom bg-slate-50 w-100 h-full pt-20 flex justify-center'>
            <p className="mt-10 text-slate-300">New features comming soon</p>
          </div>
        </aside>

        <main className='w-3/4 h-auto ml-[25%] p-5'>
          <header className='p-5 bg-white dark:bg-slate-700 dark:text-slate-400 flex justify-between items-center fixed top-0 right-0 w-3/4 border-b z-[999]'>
            <div className='searchbox'>
              <form className='flex flex-row items-center'>
                <div className='relative'>
                  <input type='text' id='search' name='search' placeholder='Search' className='peer px-4 py-3 rounded-full border-none placeholder-transparent' />

                  <label for='search' className='absolute flex items-center left-[15px] text-xs text-gray-500 top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3'>Search <SearchIcon className='h-4 w-4 inline-flex' /></label>
                </div>
              </form>
            </div>
            <div className='right-nav flex flex-row items-center'>
              <div className='flex flex-row mr-5'>
                <div className='relative'>
                  <MailIcon className="h-5 w-5 text-blue-500 dark:text-indigo-700  ml-6" />
                  <span className='absolute text-[8px] bg-red-500 p-1 rounded-full text-white font-medium bottom-3 right-3'>99+</span>
                </div>
                <div className='relative'>
                  <BellIcon className="h-5 w-5 text-blue-500 dark:text-indigo-700 ml-6" />
                  <span className='absolute text-[8px] bg-red-500 p-1 rounded-full text-white font-medium bottom-3 left-3'>99+</span>
                </div>
                <div className='relative'>
                  <UserAddIcon className="h-5 w-5 text-blue-500 dark:text-indigo-700 ml-6" />
                  <span className='absolute text-[8px] bg-red-500 p-1 rounded-full text-white font-medium bottom-3 left-3'>99+</span>
                </div>
              </div>
              <Menu as="div" className='relative'>
                <UserCircleIcon className='h-5 w-5 text-blue-500 dark:text-indigo-700 inline-flex' />
                <Menu.Button href='#' id="user-btn" className=' focus-visible:outline-none'>@username</Menu.Button>


                <Menu.Items className='dropdown-menu absolute top-16 right-1 bg-white drop-shadow-lg rounded divide-y flex flex-col  focus-visible:outline-none'>
                  <Menu.Item>
                    {({ active }) => (
                      <a href='#' className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}>
                        <UserCircleIcon className='h-5 w-5 dark:text-indigo-700 inline-flex '/> Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href='#' className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}>
                        <UsersIcon className='h-5 w-5 dark:text-indigo-700 inline-flex ' /> Friends
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href='#' className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}>
                        <UserGroupIcon className='h-5 w-5 dark:text-indigo-700 inline-flex ' /> Groups
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href='#' className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}>
                        <CogIcon className='h-5 w-5 dark:text-indigo-700 inline-flex ' /> Setting
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href='#' className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}>
                        <LogoutIcon className='h-5 w-5 dark:text-indigo-700 inline-flex ' /> Logout
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>

            </div>

          </header>
          <article className='content w-100 h-100 mt-[71px] flex flex-row dark:text-slate-400'>
            <section className=' h-full w-4/5 p-5 mt-5'>
              <div className='breadcrumb pb-2 border-b'>
                <a href='#' className='mr-5 text-blue-500'>All Forums</a>
              </div>
              <div className='list text-center'>
                <ul className='list-inside'>
                  <li>
                    <ul className='flex justify-between border-b'>
                      <li className='w-1/2 pl-12 text-left'>Forum</li>
                      <li className='w-[10%]'>Topics</li>
                      <li className='w-[10%]'>Posts</li>
                      <li className='w-[20%]'>Last Post</li>
                    </ul>
                  </li>
                  <li className='py-3'>
                    <ul className='flex justify-between items-center'>
                      <li className='w-1/2 text-left flex items-center'>
                        <span className='inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2'>
                          <ChatAlt2Icon className='w-3 h-3 text-indigo-600' />
                        </span>
                        <div className='content'>
                        <h2 className='text-lg font-medium'><a href='#' className='text-blue-500'>Programming Comm</a></h2>
                        <p className='text-sm w-fit'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        </p>
                        </div>
                      </li>
                      <li className='w-[10%]'>4</li>
                      <li className='w-[10%]'>5</li>
                      <li className='w-[20%]'>3 day ago</li>
                    </ul>
                  </li>

                  <li className='py-3'>
                    <ul className='flex justify-between items-center'>
                      <li className='w-1/2 text-left flex items-center'>
                        <span className='inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2'>
                          <ChatAlt2Icon className='w-3 h-3 text-indigo-600' />
                        </span>
                        <div className='content'>
                        <h2 className='text-lg font-medium'><a href='#' className='text-blue-500'>Programming Comm</a></h2>
                        <p className='text-sm w-fit'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        </p>
                        </div>
                        
                      </li>
                      <li className='w-[10%]'>4</li>
                      <li className='w-[10%]'>5</li>
                      <li className='w-[20%]'>3 day ago</li>
                    </ul>
                  </li>
                  <li className='py-3'>
                    <ul className='flex justify-between items-center'>
                      <li className='w-1/2 text-left flex items-center'>
                        <span className='inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2'>
                          <ChatAlt2Icon className='w-3 h-3 text-indigo-600' />
                        </span>
                        <div className='content'>
                        <h2 className='text-lg font-medium'><a href='#' className='text-blue-500'>Programming Comm</a></h2>
                        <p className='text-sm w-fit'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        </p>
                        </div>
                      </li>
                      <li className='w-[10%]'>4</li>
                      <li className='w-[10%]'>5</li>
                      <li className='w-[20%]'>3 day ago</li>
                    </ul>
                  </li>
                  <li className='py-3'>
                    <ul className='flex justify-between items-center'>
                      <li className='w-1/2 text-left flex items-center'>
                        <span className='inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2'>
                          <ChatAlt2Icon className='w-3 h-3 text-indigo-600' />
                        </span>
                        <div className='content'>
                        <h2 className='text-lg font-medium'><a href='#' className='text-blue-500'>Programming Comm</a></h2>
                        <p className='text-sm w-fit'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        </p>
                        </div>
                      </li>
                      <li className='w-[10%]'>4</li>
                      <li className='w-[10%]'>5</li>
                      <li className='w-[20%]'>3 day ago</li>
                    </ul>
                  </li>
                  <li className='py-3'>
                    <ul className='flex justify-between items-center'>
                      <li className='w-1/2 text-left flex items-center'>
                        <span className='inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2'>
                          <ChatAlt2Icon className='w-3 h-3 text-indigo-600' />
                        </span>
                        <div className='content'>
                        <h2 className='text-lg font-medium'><a href='#' className='text-blue-500'>Programming Comm</a></h2>
                        <p className='text-sm w-fit'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        </p>
                        </div>
                      </li>
                      <li className='w-[10%]'>4</li>
                      <li className='w-[10%]'>5</li>
                      <li className='w-[20%]'>3 day ago</li>
                    </ul>
                  </li>
                  <li className='py-3'>
                    <ul className='flex justify-between items-center'>
                      <li className='w-1/2 text-left flex items-center'>
                        <span className='inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2'>
                          <ChatAlt2Icon className='w-3 h-3 text-indigo-600' />
                        </span>
                        <div className='content'>
                        <h2 className='text-lg font-medium'><a href='#' className='text-blue-500'>Programming Comm</a></h2>
                        <p className='text-sm w-fit'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        </p>
                        </div>
                      </li>
                      <li className='w-[10%]'>4</li>
                      <li className='w-[10%]'>5</li>
                      <li className='w-[20%]'>3 day ago</li>
                    </ul>
                  </li>
                  <li className='py-3'>
                    <ul className='flex justify-between items-center'>
                      <li className='w-1/2 text-left flex items-center'>
                        <span className='inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2'>
                          <ChatAlt2Icon className='w-3 h-3 text-indigo-600' />
                        </span>
                        <div className='content'>
                        <h2 className='text-lg font-medium'><a href='#' className='text-blue-500'>Programming Comm</a></h2>
                        <p className='text-sm w-fit'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        </p>
                        </div>
                      </li>
                      <li className='w-[10%]'>4</li>
                      <li className='w-[10%]'>5</li>
                      <li className='w-[20%]'>3 day ago</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
            <section className='border-l flex flex-col items-center w-1/5 h-min-screen mt-5 relative'>
              <div className='card bg-slate-300 h-1/4 rounded p5 w-[90%] -mr-5 flex flex-col items-center sticky top-24'>
                  <h2>Recent Topics</h2>
              </div>
              <footer className='text-sm -mr-5'>
                <a href='#'>Home</a>.
                <a href='#'> About</a>.
                <a href='#'> FAQs</a>.
                <a href='#'> Contact Us</a>
              </footer>
            </section>
          </article>
        </main>
      </section>
    </>
  );
}

export default App
