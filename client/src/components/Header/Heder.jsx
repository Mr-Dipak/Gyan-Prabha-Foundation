import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Logo from '../../../public/Logo.svg'
import {NavLink} from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/About',
  },
  {
    name: 'Causes',
    to: '/Causes',
  },
  {
    name: 'Contact',
    to: '/Contact',
  },
  {
    name: 'Blog',
    to: '/Blog',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow bg-white">
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img
                width="100"
                height="100"
                viewBox="0 0 50 56"
                src={Logo}
                alt="Logo"
              />
            </span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={({isActive})=> `inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 ${isActive ? 'text-orange-700' : 'text-gray-700'}`}
                  >
                    {item.name}
                    <span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <button
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign In
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log In
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <img
                          width="150"
                          height="150"
                          viewBox="0 0 50 56"
                          src={Logo}
                          alt="Logo"
                        />
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className={(isActive)=> `-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50 ${isActive ? 'text-orange-700' : 'text-gray-700'}`}
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          <span>
                            <ChevronRight className="ml-3 h-4 w-4" />
                          </span>
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-2 space-y-2">
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
