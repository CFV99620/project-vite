import './PersonalForm.module.css';
import { useState } from "react";

const PersonalForm = () => {
    // Estado para todos los campos del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        fechaNacimiento: ""
    });

    // Función para manejar cambios en cualquier campo
    const handleChange = (event) => { //event es el objeto del evento espera a que se dispare un evento en el dom
        const { name, value } = event.target;// Esto es destructuring - extrae propiedades de un objeto, en este caso del event.target que es el input que disparó el evento y alinea los nombres de las propiedades con las variables
        setFormData(prevData => ({//prevData es una función que recibe el estado anterior y devuelve un nuevo estado, aquí usamos la sintaxis de propagación para copiar las propiedades del estado anterior y luego actualizamos la propiedad específica usando el nombre del campo como clave dinámica
            ...prevData,
            [name]: value
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Datos del formulario:", formData);
        // Aquí puedes hacer lo que necesites con los datos
    };

    //estilo tailwind para los inputs
    const inputStyle = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900";

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Datos Personales
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo Nombre */}
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        id="nombre"
                        name="nombre"
                        placeholder="Ingresa tu nombre" 
                        value={formData.nombre} 
                        onChange={handleChange}
                        className={inputStyle}
                    />
                </div>

                {/* Campo Apellido */}
                <div>
                    <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                        Apellido
                    </label>
                    <input 
                        type="text" 
                        id="apellido"
                        name="apellido"
                        placeholder="Ingresa tu apellido" 
                        value={formData.apellido} 
                        onChange={handleChange}
                        className={inputStyle}
                    />
                </div>

                {/* Campo Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="correo@ejemplo.com" 
                        value={formData.email} 
                        onChange={handleChange}
                        className={inputStyle}
                    />
                </div>

                {/* Campo Teléfono */}
                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                    </label>
                    <input 
                        type="tel" 
                        id="telefono"
                        name="telefono"
                        placeholder="123-456-7890" 
                        value={formData.telefono} 
                        onChange={handleChange}
                        className={inputStyle}
                    />
                </div>

                {/* Campo Fecha de Nacimiento */}
                <div>
                    <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700 mb-1">
                        Fecha de Nacimiento
                    </label>
                    <input 
                        type="date" 
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento} 
                        onChange={handleChange}
                        className={inputStyle}
                    />
                </div>

                {/* Botón de envío */}
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                    Guardar Datos
                </button>
            </form>

            {/* Mostrar los datos ingresados */}
            <div className="mt-6 p-4 bg-gray-100 rounded-md text-gray-900">
                <h3 className="font-semibold text-gray-800 mb-2">Vista previa:</h3>
                <p><strong>Nombre:</strong> {formData.nombre || "No ingresado"}</p>
                <p><strong>Apellido:</strong> {formData.apellido || "No ingresado"}</p>
                <p><strong>Email:</strong> {formData.email || "No ingresado"}</p>
                <p><strong>Teléfono:</strong> {formData.telefono || "No ingresado"}</p>
                <p><strong>Fecha de Nacimiento:</strong> {formData.fechaNacimiento || "No ingresada"}</p>
            </div>
        </div>
    );
};

export default PersonalForm;