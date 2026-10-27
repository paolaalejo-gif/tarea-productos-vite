import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductTable({ productos }) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Lista de Productos</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Categoría</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productos.map((prod) => (
              <TableRow key={prod.codigo}>
                <TableCell className="font-medium">{prod.codigo}</TableCell>
                <TableCell>{prod.descripcion}</TableCell>
                <TableCell>S/ {prod.precio.toFixed(2)}</TableCell>
                <TableCell>{prod.categoria}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}