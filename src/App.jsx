import { useState } from 'react';
import { ProductForm } from './ProductForm';
import { ProductTable } from './ProductTable';

// Requisito 2: 5 productos iniciales
const productosIniciales = [
  { codigo: 1, descripcion: "Coca Cola", precio: 2.33, categoria: "Bebidas" },
  { codigo: 2, descripcion: "Fanta", precio: 1.70, categoria: "Bebidas" },
  { codigo: 3, descripcion: "Papas Lays", precio: 1.50, categoria: "Snacks" },
  { codigo: 4, descripcion: "Chocolate Águila", precio: 2.00, categoria: "Dulces" },
  { codigo: 5, descripcion: "Galletas Oreo", precio: 1.20, categoria: "Galletas" },
];

function App() {
  const [productos, setProductos] = useState(productosIniciales);
  const [mensaje, setMensaje] = useState('');

  const agregarProducto = (nuevoProducto) => {
    // Requisito 3: Generar código único automáticamente
    const nuevoCodigo = productos.length > 0 
      ? Math.max(...productos.map(p => p.codigo)) + 1 
      : 1;

    // Requisito 4: Incorporar al estado y actualizar tabla
    setProductos([...productos, { ...nuevoProducto, codigo: nuevoCodigo }]);
    
    // Mostrar mensaje de confirmación
    setMensaje('¡Producto registrado con éxito!');
    setTimeout(() => setMensaje(''), 3000); // El mensaje desaparece en 3 seg
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Requisito 6: Encabezado */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-slate-800">Gestión de productos</h1>
        </header>

        {/* Mensaje de confirmación */}
        {mensaje && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md text-center font-medium max-w-md mx-auto">
            {mensaje}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {/* Sección de Registro */}
          <section className="w-full md:w-1/2 flex justify-center md:justify-end">
            <ProductForm onAddProduct={agregarProducto} />
          </section>

          {/* Sección de Listado */}
          <section className="w-full md:w-1/2 flex justify-center md:justify-start">
            <ProductTable productos={productos} />
          </section>
        </div>

      </div>
    </div>
  );
}

export default App;