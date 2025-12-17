import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../main.jsx';


const NavigationBar = () => {//componente funcional NavigationBar con tailwindcss

    const { theme, toggleTheme } = useContext(ThemeContext);//useContext para consumir el contexto del tema
    const categories = ['Home', 'Posts','About', 'Services', 'Contact'];
    
    return (
        <nav className={`fixed top-0 left-0 right-0 w-full shadow-lg border-b z-50 rounded-b-lg transition-colors duration-200 ${
                        theme === 'light' 
                            ? 'bg-white border-gray-200' 
                            : 'bg-gray-800 border-gray-700'
                    }`}>
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
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={toggleTheme}
                            className={`p-2 rounded-md transition-colors duration-200 ${
                                theme === 'light' 
                                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                            }`}
                            title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
                        >
                            {theme === 'light' ? (
                                // Icono luna (modo oscuro)
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                // Icono sol (modo claro)
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>

                    </div>
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