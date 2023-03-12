import { useState } from "react";

const WeatherForm = ({onChangeCity}) => {
    const [ ciudad, setCiudad ] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        onChangeCity(ciudad);

    }

  return (
    <form 
        onSubmit={handleSubmit}
        className="flex gap-5"
    >
        <input 
            type="text" 
            onChange={(e)=>setCiudad(e.target.value)} 
            placeholder='Ubicación' value={ciudad}
            className="border-2 border-gray-200 py-1 px-2 text-2xl rounded-lg"
        />
        <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-5 rounded-md py-3"
        >
            Buscar
        </button>
    </form>

  )
}

export default WeatherForm
