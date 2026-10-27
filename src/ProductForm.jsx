import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductForm({ onAddProduct }) {
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validaciones del Requisito 3
    if (descripcion.trim().length < 3) {
      return setError("La descripción debe tener al menos 3 caracteres.");
    }
    if (precio === '' || Number(precio) <= 0) {
      return setError("El precio debe ser un número mayor que cero.");
    }
    if (categoria.trim() === '') {
      return setError("La categoría es obligatoria.");
    }

    onAddProduct({
      descripcion: descripcion.trim(),
      precio: Number(precio),
      categoria: categoria.trim()
    });

    // Limpiamos el formulario
    setDescripcion('');
    setPrecio('');
    setCategoria('');
  };

  const handleLimpiar = () => {
    setDescripcion('');
    setPrecio('');
    setCategoria('');
    setError('');
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Registrar Nuevo Producto</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="descripcion">Descripción</Label>
            <Input 
              id="descripcion" 
              value={descripcion} 
              onChange={(e) => setDescripcion(e.target.value)} 
              placeholder="Ej. Coca Cola" 
            />
          </div>
          <div>
            <Label htmlFor="precio">Precio (S/.)</Label>
            <Input 
              id="precio" 
              type="number" 
              value={precio} 
              onChange={(e) => setPrecio(e.target.value)} 
              placeholder="Ej. 2.50" 
            />
          </div>
          <div>
            <Label htmlFor="categoria">Categoría</Label>
            <Input 
              id="categoria" 
              value={categoria} 
              onChange={(e) => setCategoria(e.target.value)} 
              placeholder="Ej. Bebidas" 
            />
          </div>

          {/* Mensaje de validación */}
          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

          <div className="flex gap-2 pt-2">
            <Button type="submit" className="w-full">Registrar producto</Button>
            <Button type="button" variant="outline" onClick={handleLimpiar} className="w-full">Limpiar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}