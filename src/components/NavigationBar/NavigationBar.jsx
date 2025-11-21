import React from 'react';


const NavigationBar = () => {//componente funcional NavigationBar con tailwindcss

    const categories = ['Home', 'About', 'Services', 'Contact'];
    
    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-lg border-b border-gray-200 z-50 rounded-b-lg">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-800">Mambo</h1>
                    </div>
                    
                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-8">
                        {categories.map((category, index) => (//map para recorrer el array categories y crear un enlace por cada categoria
                            <li key={index}>
                                <a 
                                    href={`#${category.toLowerCase()}`} //href para cada categoria en minusculas, el "#" es para anclar a una seccion de la pagina, es decir, al hacer click en el enlace, la pagina se desplazara a la seccion correspondiente
                                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                                >
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 rounded-md p-2">
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