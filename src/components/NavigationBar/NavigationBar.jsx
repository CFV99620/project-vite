import React from 'react';


const NavigationBar = () => {

    const categories = ['Home', 'About', 'Services', 'Contact'];
    
    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-lg border-b border-gray-200 z-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-800">Mi App</h1>
                    </div>
                    
                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-8">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <a 
                                    href={`#${category.toLowerCase()}`} 
                                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                                >
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;