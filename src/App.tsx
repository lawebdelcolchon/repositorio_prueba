import React, { useState } from 'react';

interface Producto {
  id: number;
  nombre: string;
  fono: string;
  disponibilidad: boolean;
  precio: number;
}

const App = () => {
  const [productos, setProductos] = useState<Producto[]>([
    { id: 1, nombre: 'Producto 1', fono: '123456789', disponibilidad: true, precio: 100 },
    { id: 2, nombre: 'Producto 2', fono: '987654321', disponibilidad: false, precio: 200 },
  ]);

  const [nombre, setNombre] = useState('');
  const [fono, setFono] = useState('');
  const [disponibilidad, setDisponibilidad] = useState(true);
  const [precio, setPrecio] = useState(0);

  const agregarProducto = () => {
    const nuevoProducto: Producto = {
      id: productos.length + 1,
      nombre,
      fono,
      disponibilidad,
      precio,
    };
    setProductos([...productos, nuevoProducto]);
    setNombre('');
    setFono('');
    setDisponibilidad(true);
    setPrecio(0);
  };

  const eliminarProducto = (id: number) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gestión de Inventario</h1>
      <form className="mb-4">
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Nombre del producto</span>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Fono</span>
          <input
            type="text"
            value={fono}
            onChange={(e) => setFono(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Disponibilidad</span>
          <select
            value={disponibilidad ? 'true' : 'false'}
            onChange={(e) => setDisponibilidad(e.target.value === 'true')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="true">Disponible</option>
            <option value="false">No disponible</option>
          </select>
        </label>
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Precio</span>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <button
          type="button"
          onClick={agregarProducto}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Agregar producto
        </button>
      </form>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nombre</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Fono</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Disponibilidad</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Precio</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td className="px-4 py-2 text-sm text-gray-700">{producto.nombre}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{producto.fono}</td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {producto.disponibilidad ? 'Disponible' : 'No disponible'}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">{producto.precio}</td>
              <td className="px-4 py-2 text-sm text-gray-700">
                <button
                  type="button"
                  onClick={() => eliminarProducto(producto.id)}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;