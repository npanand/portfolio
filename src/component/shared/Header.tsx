    import { useState } from 'react'
    // import { Dialog } from '@headlessui/react'
    // import {
    //     XMarkIcon, Bars3Icon
    // } from '@heroicons/react/24/outline'
    // import { BiLogoGithub } from 'react-icons/bi';
    // import { Link } from 'react-router-dom';


    function Header() {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        return (
            <header className="bg-slate-800">
                {/* <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="h-8 w-auto text-white ">ANAND</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            {/* <span className="sr-only"><a href="https://github.com/npanand">                     
                            <BiLogoGithub className="h-6 w-6 text-white"  aria-hidden="true" /> 
                            </a> </span> */}
                            {/* <Bars3Icon className="h-6 w-6 text-white" />


                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link to="/portfolio" className='text-sm font-semibold leading-6 text-gray-900 text-white' >
                            Profile
                        </Link>
                        <Link to="/Project" className='text-sm font-semibold leading-6 text-gray-900 text-white' >
                            Projects
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="https://github.com/npanand" className=" m-1 p-2 font-semibold leading-6 text-gray-900 text-white ">
                            <span ><BiLogoGithub /></span>
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10 " />
                    <Dialog.Panel className="fixed inset-y-0 bg-slate-800 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between ">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="h-8 w-auto "><a href="https://github.com/npanand">
                                    <BiLogoGithub className="h-6 w-6" aria-hidden="true" />
                                </a> </span>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6  w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">

                                    <span>
                                        <Link to="/Project" className='-mx-3  block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-slate-800' onClick={() => { setMobileMenuOpen(false) }} >
                                            Project
                                        </Link>

                                    </span>
                                    <span >
                                        <Link to="/portfolio" className='-mx-3  block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-slate-800' onClick={() => { setMobileMenuOpen(false) }}>
                                            Profile
                                        </Link>
                                    </span>

                                </div>

                            </div>
                        </div>
                    </Dialog.Panel> */}
                {/* </Dialog> */} 
            </header>
        )
    }


    export default Header;